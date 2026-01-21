/**
 * Content Viewer Panel
 *
 * Full-text viewer for source content (OpenStax, StatPearls) with formatting,
 * images, navigation, and citation highlighting.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Citation } from '../core/rag/cited-response';

/**
 * Content document to display
 */
export interface ContentDocument {
  id: string;
  title: string;
  source: string;
  chapter?: string;
  section?: string;
  content: string;  // HTML or markdown content
  url?: string;
  license?: string;
  figures?: ContentFigure[];
  relatedDocuments?: ContentDocumentRef[];
}

/**
 * Figure/image in content
 */
export interface ContentFigure {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Reference to another document
 */
export interface ContentDocumentRef {
  id: string;
  title: string;
  section?: string;
}

interface ContentViewerProps {
  contentDoc: ContentDocument;
  highlightedCitation?: Citation;
  onClose?: () => void;
  onNavigate?: (docId: string) => void;
  onBookmark?: (docId: string) => void;
  isBookmarked?: boolean;
}

export function ContentViewer({
  contentDoc,
  highlightedCitation,
  onClose,
  onNavigate,
  onBookmark,
  isBookmarked = false,
}: ContentViewerProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(16);
  const [showOutline, setShowOutline] = useState(true);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  // Extract headings from content for outline
  useEffect(() => {
    if (contentRef.current) {
      const h2s = contentRef.current.querySelectorAll('h2, h3, h4');
      const extractedHeadings = Array.from(h2s).map((h, i) => ({
        id: `heading-${i}`,
        text: h.textContent || '',
        level: parseInt(h.tagName.substring(1)),
      }));
      setHeadings(extractedHeadings);

      // Add IDs to headings for scrolling
      h2s.forEach((h, i) => {
        h.id = `heading-${i}`;
      });
    }
  }, [contentDoc.content]);

  // Scroll to citation highlight
  useEffect(() => {
    if (highlightedCitation && contentRef.current) {
      // Find and highlight the relevant passage
      const content = contentRef.current;
      const relevantText = highlightedCitation.relevantText.substring(0, 50);

      // Simple text matching - in production would use more sophisticated approach
      const textNodes = getTextNodes(content);
      for (const node of textNodes) {
        if (node.textContent?.includes(relevantText.substring(0, 30))) {
          const range = window.document.createRange();
          range.selectNode(node);

          const span = window.document.createElement('span');
          span.className = 'citation-highlight';
          range.surroundContents(span);

          span.scrollIntoView({ behavior: 'smooth', block: 'center' });
          break;
        }
      }
    }

    return () => {
      // Clean up highlights on unmount
      if (contentRef.current) {
        const highlights = contentRef.current.querySelectorAll('.citation-highlight');
        highlights.forEach(h => {
          const parent = h.parentNode;
          if (parent) {
            parent.replaceChild(window.document.createTextNode(h.textContent || ''), h);
            parent.normalize();
          }
        });
      }
    };
  }, [highlightedCitation]);

  // Get all text nodes in element
  const getTextNodes = (element: HTMLElement): Text[] => {
    const nodes: Text[] = [];
    const walker = window.document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent?.trim()) {
        nodes.push(node as Text);
      }
    }
    return nodes;
  };

  // Scroll to heading
  const scrollToHeading = useCallback((id: string) => {
    const heading = window.document.getElementById(id);
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Font size controls
  const increaseFontSize = () => setFontSize(prev => Math.min(24, prev + 2));
  const decreaseFontSize = () => setFontSize(prev => Math.max(12, prev - 2));

  // Render markdown-like content to HTML
  const renderContent = (text: string): string => {
    // Simple markdown conversion
    let html = text
      // Headers
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      // Bold and italic
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.+<\/li>\n?)+/g, '<ul>$&</ul>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p>')
      // Line breaks
      .replace(/\n/g, '<br/>');

    return `<p>${html}</p>`;
  };

  return (
    <div className="content-viewer">
      {/* Header */}
      <div className="content-header">
        <div className="header-info">
          <h2>{contentDoc.title}</h2>
          <div className="source-info">
            <span className="source-badge">{contentDoc.source}</span>
            {contentDoc.chapter && <span className="chapter">{contentDoc.chapter}</span>}
            {contentDoc.section && <span className="section">{contentDoc.section}</span>}
          </div>
        </div>
        <div className="header-actions">
          <button
            onClick={() => onBookmark?.(contentDoc.id)}
            className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
          >
            {isBookmarked ? '★' : '☆'}
          </button>
          <button onClick={decreaseFontSize} title="Decrease font size">A-</button>
          <button onClick={increaseFontSize} title="Increase font size">A+</button>
          <button
            onClick={() => setShowOutline(!showOutline)}
            className={showOutline ? 'active' : ''}
            title="Toggle outline"
          >
            ≡
          </button>
          {onClose && (
            <button onClick={onClose} className="close-btn" title="Close">
              ×
            </button>
          )}
        </div>
      </div>

      <div className="content-body">
        {/* Outline sidebar */}
        {showOutline && headings.length > 0 && (
          <nav className="content-outline">
            <h3>Outline</h3>
            <ul>
              {headings.map(h => (
                <li
                  key={h.id}
                  className={`level-${h.level}`}
                  onClick={() => scrollToHeading(h.id)}
                >
                  {h.text}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Main content */}
        <div
          className="content-main"
          ref={contentRef}
          style={{ fontSize: `${fontSize}px` }}
        >
          <div
            className="content-text"
            dangerouslySetInnerHTML={{ __html: renderContent(contentDoc.content) }}
          />

          {/* Figures */}
          {contentDoc.figures && contentDoc.figures.length > 0 && (
            <div className="content-figures">
              {contentDoc.figures.map(fig => (
                <figure key={fig.id}>
                  <img src={fig.src} alt={fig.alt} />
                  {fig.caption && <figcaption>{fig.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}

          {/* Related documents */}
          {contentDoc.relatedDocuments && contentDoc.relatedDocuments.length > 0 && (
            <div className="related-section">
              <h3>Related Content</h3>
              <ul>
                {contentDoc.relatedDocuments.map(doc => (
                  <li key={doc.id}>
                    <button onClick={() => onNavigate?.(doc.id)}>
                      {doc.title}
                      {doc.section && <span className="section"> - {doc.section}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="content-footer">
        {contentDoc.url && (
          <a href={contentDoc.url} target="_blank" rel="noopener noreferrer">
            View original source ↗
          </a>
        )}
        {contentDoc.license && (
          <span className="license">License: {contentDoc.license}</span>
        )}
      </div>

      <style>{`
        .content-viewer {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1a1a1a;
          color: #e0e0e0;
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 20px;
          background: #242424;
          border-bottom: 1px solid #333;
        }

        .header-info h2 {
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 600;
        }

        .source-info {
          display: flex;
          gap: 12px;
          font-size: 13px;
          color: #888;
        }

        .source-badge {
          background: #333;
          padding: 2px 8px;
          border-radius: 4px;
          color: #4a9eff;
        }

        .header-actions {
          display: flex;
          gap: 8px;
        }

        .header-actions button {
          width: 32px;
          height: 32px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
          font-size: 14px;
        }

        .header-actions button:hover {
          background: #444;
        }

        .header-actions button.active {
          background: #4a9eff;
          color: white;
        }

        .bookmark-btn.bookmarked {
          color: #ffc107;
        }

        .close-btn {
          font-size: 20px !important;
        }

        .content-body {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .content-outline {
          width: 220px;
          padding: 16px;
          background: #222;
          border-right: 1px solid #333;
          overflow-y: auto;
        }

        .content-outline h3 {
          margin: 0 0 12px 0;
          font-size: 12px;
          text-transform: uppercase;
          color: #888;
          letter-spacing: 0.5px;
        }

        .content-outline ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .content-outline li {
          padding: 6px 8px;
          cursor: pointer;
          border-radius: 4px;
          font-size: 13px;
          color: #bbb;
        }

        .content-outline li:hover {
          background: #333;
        }

        .content-outline li.level-3 {
          padding-left: 20px;
          font-size: 12px;
          color: #999;
        }

        .content-outline li.level-4 {
          padding-left: 32px;
          font-size: 11px;
          color: #888;
        }

        .content-main {
          flex: 1;
          padding: 24px 32px;
          overflow-y: auto;
          line-height: 1.7;
        }

        .content-text {
          max-width: 720px;
        }

        .content-text h1,
        .content-text h2,
        .content-text h3,
        .content-text h4 {
          color: #fff;
          margin-top: 32px;
          margin-bottom: 16px;
        }

        .content-text h2 {
          font-size: 1.5em;
          border-bottom: 1px solid #333;
          padding-bottom: 8px;
        }

        .content-text h3 {
          font-size: 1.25em;
        }

        .content-text p {
          margin-bottom: 16px;
        }

        .content-text strong {
          color: #fff;
        }

        .content-text em {
          color: #aaa;
        }

        .content-text ul,
        .content-text ol {
          margin-bottom: 16px;
          padding-left: 24px;
        }

        .content-text li {
          margin-bottom: 8px;
        }

        .citation-highlight {
          background: rgba(74, 158, 255, 0.3);
          padding: 2px 4px;
          border-radius: 2px;
          border-bottom: 2px solid #4a9eff;
        }

        .content-figures {
          margin-top: 32px;
        }

        .content-figures figure {
          margin: 0 0 24px 0;
        }

        .content-figures img {
          max-width: 100%;
          border-radius: 8px;
        }

        .content-figures figcaption {
          margin-top: 8px;
          font-size: 13px;
          color: #888;
          font-style: italic;
        }

        .related-section {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid #333;
        }

        .related-section h3 {
          font-size: 14px;
          color: #888;
          margin-bottom: 16px;
        }

        .related-section ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .related-section li {
          margin-bottom: 8px;
        }

        .related-section button {
          background: none;
          border: none;
          color: #4a9eff;
          cursor: pointer;
          font-size: 14px;
          padding: 0;
          text-align: left;
        }

        .related-section button:hover {
          text-decoration: underline;
        }

        .related-section .section {
          color: #666;
        }

        .content-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: #222;
          border-top: 1px solid #333;
          font-size: 12px;
        }

        .content-footer a {
          color: #4a9eff;
          text-decoration: none;
        }

        .content-footer a:hover {
          text-decoration: underline;
        }

        .content-footer .license {
          color: #666;
        }
      `}</style>
    </div>
  );
}

export default ContentViewer;
