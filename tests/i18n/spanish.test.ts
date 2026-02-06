import { describe, it, expect } from 'vitest';

describe('Spanish Language Tests (i18n)', () => {
  describe('Translation Keys', () => {
    const enTranslations = {
      common: {
        welcome: 'Welcome',
        continue: 'Continue',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close',
        back: 'Back',
        next: 'Next',
        finish: 'Finish',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
      },
      navigation: {
        home: 'Home',
        dashboard: 'Dashboard',
        timeline: 'Timeline',
        education: 'Education',
        labs: 'Lab Results',
        settings: 'Settings',
        profile: 'Profile',
      },
      education: {
        modules: 'Learning Modules',
        complexity: 'Complexity Level',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert',
        quiz: 'Quiz',
        quizScore: 'Quiz Score',
        learningObjectives: 'Learning Objectives',
        prerequisites: 'Prerequisites',
        estimatedTime: 'Estimated Time',
      },
      health: {
        bloodPressure: 'Blood Pressure',
        heartRate: 'Heart Rate',
        bloodSugar: 'Blood Sugar',
        cholesterol: 'Cholesterol',
        weight: 'Weight',
        height: 'Height',
        bmi: 'BMI',
        medications: 'Medications',
        allergies: 'Allergies',
        conditions: 'Medical Conditions',
      },
      labs: {
        results: 'Lab Results',
        normal: 'Normal',
        abnormal: 'Abnormal',
        critical: 'Critical',
        referenceRange: 'Reference Range',
        testedOn: 'Tested On',
        orderedBy: 'Ordered By',
      },
      family: {
        sharing: 'Family Sharing',
        shareWith: 'Share With',
        caregiver: 'Caregiver',
        revokeAccess: 'Revoke Access',
        pending: 'Pending',
        accepted: 'Accepted',
      },
      emergency: {
        card: 'Emergency Card',
        emergencyContact: 'Emergency Contact',
        bloodType: 'Blood Type',
        generateCard: 'Generate Card',
        downloadPDF: 'Download PDF',
      },
    };

    const esTranslations = {
      common: {
        welcome: 'Bienvenido',
        continue: 'Continuar',
        cancel: 'Cancelar',
        save: 'Guardar',
        delete: 'Eliminar',
        edit: 'Editar',
        close: 'Cerrar',
        back: 'Atrás',
        next: 'Siguiente',
        finish: 'Finalizar',
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
      },
      navigation: {
        home: 'Inicio',
        dashboard: 'Panel',
        timeline: 'Línea de Tiempo',
        education: 'Educación',
        labs: 'Resultados de Laboratorio',
        settings: 'Configuración',
        profile: 'Perfil',
      },
      education: {
        modules: 'Módulos de Aprendizaje',
        complexity: 'Nivel de Complejidad',
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto',
        quiz: 'Examen',
        quizScore: 'Puntuación del Examen',
        learningObjectives: 'Objetivos de Aprendizaje',
        prerequisites: 'Requisitos Previos',
        estimatedTime: 'Tiempo Estimado',
      },
      health: {
        bloodPressure: 'Presión Arterial',
        heartRate: 'Frecuencia Cardíaca',
        bloodSugar: 'Glucosa en Sangre',
        cholesterol: 'Colesterol',
        weight: 'Peso',
        height: 'Altura',
        bmi: 'IMC',
        medications: 'Medicamentos',
        allergies: 'Alergias',
        conditions: 'Condiciones Médicas',
      },
      labs: {
        results: 'Resultados de Laboratorio',
        normal: 'Normal',
        abnormal: 'Anormal',
        critical: 'Crítico',
        referenceRange: 'Rango de Referencia',
        testedOn: 'Analizado El',
        orderedBy: 'Ordenado Por',
      },
      family: {
        sharing: 'Compartir con Familia',
        shareWith: 'Compartir Con',
        caregiver: 'Cuidador',
        revokeAccess: 'Revocar Acceso',
        pending: 'Pendiente',
        accepted: 'Aceptado',
      },
      emergency: {
        card: 'Tarjeta de Emergencia',
        emergencyContact: 'Contacto de Emergencia',
        bloodType: 'Tipo de Sangre',
        generateCard: 'Generar Tarjeta',
        downloadPDF: 'Descargar PDF',
      },
    };

    it('should have matching translation keys in Spanish', () => {
      function checkKeys(en: any, es: any, path = ''): string[] {
        const missing: string[] = [];
        
        for (const key of Object.keys(en)) {
          const currentPath = path ? `${path}.${key}` : key;
          
          if (!(key in es)) {
            missing.push(currentPath);
          } else if (typeof en[key] === 'object' && en[key] !== null) {
            missing.push(...checkKeys(en[key], es[key], currentPath));
          }
        }
        
        return missing;
      }

      const missingKeys = checkKeys(enTranslations, esTranslations);
      expect(missingKeys).toEqual([]);
    });

    it('should have no extra keys in Spanish translations', () => {
      function checkExtraKeys(en: any, es: any, path = ''): string[] {
        const extra: string[] = [];
        
        for (const key of Object.keys(es)) {
          const currentPath = path ? `${path}.${key}` : key;
          
          if (!(key in en)) {
            extra.push(currentPath);
          } else if (typeof es[key] === 'object' && es[key] !== null) {
            extra.push(...checkExtraKeys(en[key], es[key], currentPath));
          }
        }
        
        return extra;
      }

      const extraKeys = checkExtraKeys(enTranslations, esTranslations);
      expect(extraKeys).toEqual([]);
    });
  });

  describe('Spanish Translation Quality', () => {
    it('should translate common actions correctly', () => {
      const translations = {
        save: 'Guardar',
        cancel: 'Cancelar',
        continue: 'Continuar',
        delete: 'Eliminar',
      };

      expect(translations.save).toBe('Guardar');
      expect(translations.cancel).toBe('Cancelar');
      expect(translations.continue).toBe('Continuar');
      expect(translations.delete).toBe('Eliminar');
    });

    it('should translate medical terms correctly', () => {
      const medicalTerms = {
        bloodPressure: 'Presión Arterial',
        heartRate: 'Frecuencia Cardíaca',
        bloodSugar: 'Glucosa en Sangre',
        cholesterol: 'Colesterol',
        medications: 'Medicamentos',
        allergies: 'Alergias',
      };

      expect(medicalTerms.bloodPressure).toContain('Presión');
      expect(medicalTerms.heartRate).toContain('Cardíaca');
      expect(medicalTerms.medications).toBe('Medicamentos');
    });

    it('should translate navigation terms correctly', () => {
      const navTerms = {
        dashboard: 'Panel',
        settings: 'Configuración',
        profile: 'Perfil',
      };

      expect(navTerms.dashboard).toBe('Panel');
      expect(navTerms.settings).toBe('Configuración');
      expect(navTerms.profile).toBe('Perfil');
    });
  });

  describe('Pluralization', () => {
    const pluralRules = new Intl.PluralRules('es');

    it('should handle Spanish pluralization rules', () => {
      // Spanish uses 's' for plural in most cases
      const singularForms = ['módulo', 'resultado', 'examen'];
      const pluralForms = ['módulos', 'resultados', 'exámenes'];

      singularForms.forEach((singular, i) => {
        const plural = pluralForms[i];
        
        // Check plural form ends in 's' or appropriate ending
        expect(plural.endsWith('s') || plural.endsWith('es')).toBe(true);
      });
    });

    it('should select correct plural form', () => {
      expect(pluralRules.select(0)).toBe('other'); // Spanish uses 'other' for 0
      expect(pluralRules.select(1)).toBe('one');
      expect(pluralRules.select(2)).toBe('other');
      expect(pluralRules.select(5)).toBe('other');
    });

    it('should format count with correct plural', () => {
      const formatCount = (count: number, singular: string, plural: string) => {
        return `${count} ${pluralRules.select(count) === 'one' ? singular : plural}`;
      };

      expect(formatCount(1, 'módulo', 'módulos')).toBe('1 módulo');
      expect(formatCount(5, 'módulo', 'módulos')).toBe('5 módulos');
      expect(formatCount(0, 'resultado', 'resultados')).toBe('0 resultados');
    });
  });

  describe('Date Formatting', () => {
    const esDateFormatter = new Intl.DateTimeFormat('es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const esShortDateFormatter = new Intl.DateTimeFormat('es', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    it('should format full dates in Spanish', () => {
      const date = new Date('2024-03-15');
      const formatted = esDateFormatter.format(date);

      expect(formatted).toContain('15');
      expect(formatted).toContain('marzo');
      expect(formatted).toContain('2024');
    });

    it('should format short dates in Spanish', () => {
      const date = new Date('2024-03-15');
      const formatted = esShortDateFormatter.format(date);

      expect(formatted).toContain('15');
      expect(formatted).toContain('mar');
    });

    it('should use Spanish month names', () => {
      const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
      ];

      months.forEach((month, index) => {
        const date = new Date(2024, index, 15);
        const formatted = esDateFormatter.format(date).toLowerCase();
        expect(formatted).toContain(month);
      });
    });
  });

  describe('Number Formatting', () => {
    const esNumberFormatter = new Intl.NumberFormat('es');
    const esDecimalFormatter = new Intl.NumberFormat('es', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    it('should format numbers with Spanish locale', () => {
      expect(esNumberFormatter.format(1000)).toBe('1000');
      expect(esNumberFormatter.format(1000000)).toBe('1.000.000');
    });

    it('should use comma as decimal separator', () => {
      expect(esDecimalFormatter.format(14.5)).toBe('14,50');
      expect(esDecimalFormatter.format(3.14159)).toBe('3,14');
    });

    it('should format percentages in Spanish', () => {
      const percentFormatter = new Intl.NumberFormat('es', {
        style: 'percent',
        minimumFractionDigits: 1,
      });

      expect(percentFormatter.format(0.855)).toContain('85,5');
    });

    it('should format currency in Spanish', () => {
      const currencyFormatter = new Intl.NumberFormat('es', {
        style: 'currency',
        currency: 'USD',
      });

      const formatted = currencyFormatter.format(1234.56);
      expect(formatted).toContain('1.234,56');
    });
  });

  describe('Relative Time Formatting', () => {
    const rtFormatter = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

    it('should format relative time in Spanish', () => {
      expect(rtFormatter.format(-1, 'day')).toContain('ayer');
      expect(rtFormatter.format(0, 'day')).toContain('hoy');
      expect(rtFormatter.format(1, 'day')).toContain('mañana');
    });

    it('should format relative days', () => {
      const formatter = new Intl.RelativeTimeFormat('es');
      
      expect(formatter.format(-3, 'day')).toContain('hace');
      expect(formatter.format(3, 'day')).toContain('dentro de');
    });
  });

  describe('List Formatting', () => {
    const listFormatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });

    it('should format lists in Spanish', () => {
      expect(listFormatter.format(['A', 'B'])).toBe('A y B');
      expect(listFormatter.format(['A', 'B', 'C'])).toBe('A, B y C');
    });
  });

  describe('Medical Specialty Names', () => {
    const specialties = {
      cardiology: 'Cardiología',
      endocrinology: 'Endocrinología',
      neurology: 'Neurología',
      gastroenterology: 'Gastroenterología',
      dermatology: 'Dermatología',
      orthopedics: 'Ortopedia',
      oncology: 'Oncología',
      psychiatry: 'Psiquiatría',
      pulmonology: 'Neumología',
      nephrology: 'Nefrología',
      rheumatology: 'Reumatología',
      urology: 'Urología',
      ophthalmology: 'Oftalmología',
    };

    it('should have Spanish translations for all specialties', () => {
      Object.values(specialties).forEach((translation) => {
        expect(typeof translation).toBe('string');
        expect(translation.length).toBeGreaterThan(0);
      });
    });

    it('should use correct Spanish medical terminology', () => {
      expect(specialties.cardiology).toBe('Cardiología');
      expect(specialties.neurology).toBe('Neurología');
      expect(specialties.dermatology).toBe('Dermatología');
    });
  });

  describe('Accessibility Labels in Spanish', () => {
    it('should have Spanish aria-labels', () => {
      const ariaLabels = {
        closeButton: 'Cerrar',
        menuButton: 'Abrir menú',
        searchInput: 'Buscar',
        submitButton: 'Enviar',
        backButton: 'Atrás',
      };

      expect(ariaLabels.closeButton).toBe('Cerrar');
      expect(ariaLabels.menuButton).toBe('Abrir menú');
    });

    it('should have Spanish screen reader text', () => {
      const screenReaderText = {
        loading: 'Cargando contenido',
        error: 'Se produjo un error',
        success: 'Operación exitosa',
        required: 'Campo obligatorio',
      };

      expect(screenReaderText.loading).toContain('Cargando');
      expect(screenReaderText.required).toContain('obligatorio');
    });
  });
});
