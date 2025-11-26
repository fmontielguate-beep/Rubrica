
import { type Criterion } from './types';

export const EVALUATION_CRITERIA: Criterion[] = [
    {
        id: 1,
        title: "EVALUACIÓN Y PRESENTACIÓN DE CASOS",
        category: "Mañana",
        levels: [
            { score: 1, label: "Pobre", description: "Información incompleta. Falla en identificar problemas clave." },
            { score: 2, label: "Satisfactorio", description: "Presentación organizada, pero el análisis es superficial." },
            { score: 3, label: "Bueno", description: "Presenta resumen completo, conciso y con razonamiento clínico sólido." },
            { score: 4, label: "Excelente", description: "Presenta el caso con fluidez, anticipa preguntas e integra fisiopatología avanzada." }
        ]
    },
    {
        id: 2,
        title: "INTERACCIÓN Y ACOMPAÑAMIENTO EN VISITA",
        category: "Jefe de Servicio",
        levels: [
            { score: 1, label: "Pobre", description: "Pasividad o interrupciones. Falla en la toma de notas esenciales." },
            { score: 2, label: "Satisfactorio", description: "Participa y responde preguntas directas, pero requiere recordatorios de protocolo." },
            { score: 3, label: "Bueno", description: "Demuestra profesionalismo y contribuye a la discusión de manera oportuna." },
            { score: 4, label: "Excelente", description: "Lidera la discusión con seguridad y demuestra preparación previa de la visita." }
        ]
    },
    {
        id: 3,
        title: "ELABORACIÓN DE NOTAS DE EVOLUCIÓN (WEED/SOAP)",
        category: "Documentación",
        levels: [
            { score: 1, label: "Pobre", description: "Nota incompleta o no sigue la estructura SOAP. Ilegible." },
            { score: 2, label: "Satisfactorio", description: "Sigue la estructura, pero las secciones son superficiales. Análisis ('A') débil." },
            { score: 3, label: "Bueno", description: "Aplica correctamente el método SOAP con un análisis pertinente. Notas oportunas." },
            { score: 4, label: "Excelente", description: "La nota es EJEMPLAR. El análisis justifica el Plan ('P') y refleja pensamiento clínico avanzado." }
        ]
    },
    {
        id: 4,
        title: "LIDERAZGO, ORGANIZACIÓN Y CUMPLIMIENTO DE SOLICITUDES",
        category: "Gestión",
        levels: [
            { score: 1, label: "Pobre", description: "No logra delegar, supervisar o falla en ejecutar la mayoría de las solicitudes." },
            { score: 2, label: "Satisfactorio", description: "Cumple las solicitudes con supervisión. La organización del equipo es inconsistente." },
            { score: 3, label: "Bueno", description: "Organiza claramente al equipo y cumple con todas las solicitudes de manera oportuna y precisa." },
            { score: 4, label: "Excelente", description: "Lidera al equipo de forma ejemplar, optimiza el flujo de trabajo y anticipa las necesidades." }
        ]
    },
    {
        id: 5,
        title: "VISITA VESPERTINA Y REEVALUACIÓN CLÍNICA",
        category: "Vespertino",
        levels: [
            { score: 1, label: "Pobre", description: "Omite la visita o el re-examen es superficial. Desconoce cambios." },
            { score: 2, label: "Satisfactorio", description: "Re-examen es mínimo. Identifica cambios obvios, pero omite detalles." },
            { score: 3, label: "Bueno", description: "Realiza la visita completa, re-examina a los pacientes foco y documenta la evolución." },
            { score: 4, label: "Excelente", description: "Realiza un re-examen minucioso, identifica cambios sutiles y anticipa complicaciones." }
        ]
    },
    {
        id: 6,
        title: "REVISIÓN Y ANÁLISIS DE ESTUDIOS DIAGNÓSTICOS",
        category: "Vespertino",
        levels: [
            { score: 1, label: "Pobre", description: "No revisa los exámenes solicitados o no sabe interpretarlos." },
            { score: 2, label: "Satisfactorio", description: "Revisa los resultados y detecta alteraciones obvias. No los integra en el plan." },
            { score: 3, label: "Bueno", description: "Revisa TODOS los exámenes pendientes, los interpreta y ajusta el Plan ('P') de manera justificada." },
            { score: 4, label: "Excelente", description: "Revisa resultados de forma proactiva, identifica hallazgos sutiles y utiliza la evidencia para sustentar cambios cruciales." }
        ]
    },
    {
        id: 7,
        title: "DOCENCIA A ESTUDIANTES DE PREGRADO",
        category: "Vespertino",
        levels: [
            { score: 1, label: "Pobre", description: "No realiza docencia o la información proporcionada es incorrecta." },
            { score: 2, label: "Satisfactorio", description: "Hace preguntas triviales. La exploración del tema es superficial." },
            { score: 3, label: "Bueno", description: "Realiza docencia efectiva, utilizando preguntas que estimulan el razonamiento y explora temas relevantes." },
            { score: 4, label: "Excelente", description: "Utiliza el método de preguntas de forma magistral y el tema explorado demuestra una revisión profunda y actualizada." }
        ]
    },
    {
        id: 8,
        title: "COMPROMISOS DE ROTACIÓN",
        category: "Niño Sano / Dermatología",
        levels: [
            { score: 1, label: "Pobre", description: "Falla consistentemente en asistir a vacunación o consulta de Dermatología." },
            { score: 2, label: "Satisfactorio", description: "Asiste, pero llega tarde a vacunación (post 8:00 AM)." },
            { score: 3, label: "Bueno", description: "Asiste diariamente a vacunación ANTES DE LAS 8:00 AM. Cumple con el 90% de los compromisos." },
            { score: 4, label: "Excelente", description: "Asiste y LIDERA las actividades de vacunación. Cumple el 100% de los compromisos de forma puntual y proactiva." }
        ]
    },
    {
        id: 9,
        title: "REPORTE DE CONSULTA EXTERNA DE DERMATOLOGÍA",
        category: "Miércoles",
        levels: [
            { score: 1, label: "Pobre", description: "No entrega el listado el día miércoles o la información está incompleta." },
            { score: 2, label: "Satisfactorio", description: "Entrega el listado, pero es desorganizado, o el tratamiento razonado es superficial." },
            { score: 3, label: "Bueno", description: "Entrega el listado MANUSCRITO el día miércoles, incluyendo registro, diagnóstico y un tratamiento razonado y completo." },
            { score: 4, label: "Excelente", description: "Entrega un listado ejemplar y lo utiliza para generar una breve discusión o docencia sobre el manejo." }
        ]
    },
    {
        id: 10,
        title: "PREPARACIÓN PARA AUDITORÍAS FRECUENTES",
        category: "Documentación",
        levels: [
            { score: 1, label: "Pobre", description: "La documentación es incompleta, desordenada o ilegible, dificultando la revisión." },
            { score: 2, label: "Satisfactorio", description: "La documentación es completa, pero con errores menores. Requiere esfuerzo para la revisión." },
            { score: 3, label: "Bueno", description: "Mantiene la documentación (órdenes, notas, resultados) COMPLETA, LEGIBLE Y ORGANIZADA al día." },
            { score: 4, label: "Excelente", description: "Mantiene un archivo clínico IMPECABLE, anticipando preguntas de auditoría." }
        ]
    }
];
