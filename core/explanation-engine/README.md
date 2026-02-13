# Explanation Engine

The core intelligence layer — generates personalized physiological explanations.

## Responsibilities

- Process user questions
- Retrieve relevant context from Biological Self
- Retrieve relevant medical knowledge via RAG
- Construct prompts with appropriate depth level
- Interface with local LLM (Ollama)
- Ensure all explanations are grounded in sources

## Pipeline

```
User Question
     │
     ▼
┌─────────────────────────┐
│  Context Retrieval      │
│  - Pull relevant data   │
│    from Biological Self │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Knowledge Retrieval    │
│  - RAG over medical     │
│    knowledge base       │
│  - Return with citations│
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Prompt Construction    │
│  - User's depth level   │
│  - System instructions  │
│  - Context + knowledge  │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  LLM Inference          │
│  - Local Ollama call    │
│  - No network to cloud  │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Response Processing    │
│  - Extract citations    │
│  - Format for UI        │
└───────────┴─────────────┘
```

## Depth Levels

| Level | Name | System Prompt Modifier |
|-------|------|------------------------|
| 1 | Foundation | Explain like I'm in 8th grade. Use simple words and analogies. |
| 2 | Developing | Use basic medical terms but define them. 10th grade level. |
| 3 | Standard | Standard medical terminology with context. High school graduate. |
| 4 | Advanced | Include biochemistry and pathways. College/pre-med level. |
| 5 | Expert | Research depth with statistical nuance. Graduate level. |
| 6 | Clinical | Full clinical reasoning and differentials. Physician level. |
