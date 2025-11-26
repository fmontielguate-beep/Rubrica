import React from 'react';
import { EVALUATION_CRITERIA } from '../constants';
import CriterionItem from './CriterionItem';

interface EvaluationFormProps {
    scores: { [key: number]: number | null };
    onScoreChange: (criterionId: number, score: number) => void;
}

const EvaluationForm: React.FC<EvaluationFormProps> = ({ scores, onScoreChange }) => {
    return (
        <section className="bg-white rounded-xl shadow-md border border-slate-200 printable-content">
             <div className="p-6 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-blue-700">Rúbrica de Evaluación del Desempeño (R1)</h2>
                <p className="text-sm text-slate-500 mt-1">Puntuación: (1) Pobre - (2) Satisfactorio - (3) Bueno - (4) Excelente</p>
            </div>
            <div className="divide-y divide-slate-200">
                {EVALUATION_CRITERIA.map((criterion) => (
                    <CriterionItem
                        key={criterion.id}
                        criterion={criterion}
                        selectedScore={scores[criterion.id] ?? null}
                        onScoreChange={onScoreChange}
                    />
                ))}
            </div>
        </section>
    );
};

export default EvaluationForm;