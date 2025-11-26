import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import EvaluationForm from './components/EvaluationForm';
import Summary from './components/Summary';
import PrintButton from './components/PrintButton';
import { type EvaluationState, type PerformanceLevel } from './types';
import { EVALUATION_CRITERIA } from './constants';

const App: React.FC = () => {
    const [evaluation, setEvaluation] = useState<EvaluationState>({
        residentName: '',
        evaluatorName: '',
        evaluationDate: new Date().toISOString().split('T')[0],
        nextReviewDate: '',
        scores: {},
        evaluatorComments: '',
        improvementAreas: '',
        residentCommitments: '',
    });

    const handleScoreChange = (criterionId: number, score: number) => {
        setEvaluation(prev => ({
            ...prev,
            scores: {
                ...prev.scores,
                [criterionId]: score,
            },
        }));
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEvaluation(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const totalScore = useMemo(() => {
        // FIX: Explicitly type the 'sum' accumulator as a number to resolve TypeScript inference issue.
        return Object.values(evaluation.scores).reduce((sum: number, score) => sum + (typeof score === 'number' ? score : 0), 0);
    }, [evaluation.scores]);

    const performanceLevel: PerformanceLevel = useMemo(() => {
        if (totalScore >= 37) return 'Destacado';
        if (totalScore >= 30) return 'Competente';
        if (totalScore >= 20) return 'Básico';
        return 'Insatisfactorio';
    }, [totalScore]);
    
    const isFormComplete = useMemo(() => {
        const filledScores = Object.values(evaluation.scores).filter(score => score !== null).length;
        return filledScores === EVALUATION_CRITERIA.length;
    }, [evaluation.scores]);

    return (
        <div className="min-h-screen text-slate-800">
            <div className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
                <Header />
                <main className="space-y-8">
                    <Instructions />
                    
                    <div id="evaluation-content" className="space-y-8">
                        <EvaluationForm 
                            scores={evaluation.scores}
                            onScoreChange={handleScoreChange}
                        />
                        <Summary 
                            evaluation={evaluation}
                            onTextChange={handleTextChange}
                            totalScore={totalScore}
                            performanceLevel={performanceLevel}
                            isFormComplete={isFormComplete}
                        />
                    </div>
                    
                    <PrintButton />
                </main>
                 <footer className="text-center text-sm text-slate-600 mt-12 pb-4 no-print">
                    <p>Desarrollado para la evaluación de residentes de Pediatría del Hospital Roosevelt.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;