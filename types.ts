
export interface CriterionLevel {
    score: number;
    label: string;
    description: string;
}

export interface Criterion {
    id: number;
    title: string;
    category: string;
    levels: CriterionLevel[];
}

export interface EvaluationState {
    residentName: string;
    evaluatorName: string;
    evaluationDate: string;
    nextReviewDate: string;
    scores: { [key: number]: number | null };
    evaluatorComments: string;
    improvementAreas: string;
    residentCommitments: string;
}

export type PerformanceLevel = 'Insatisfactorio' | 'Básico' | 'Competente' | 'Destacado';
