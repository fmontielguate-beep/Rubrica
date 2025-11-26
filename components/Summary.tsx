import React from 'react';
import { type EvaluationState, type PerformanceLevel } from '../types';
import { WarningIcon, CheckIcon, StarIcon, RocketIcon } from './icons/Icons';

interface SummaryProps {
    evaluation: EvaluationState;
    onTextChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    totalScore: number;
    performanceLevel: PerformanceLevel;
    isFormComplete: boolean;
}

const PerformanceIndicator: React.FC<{ level: PerformanceLevel; isComplete: boolean }> = ({ level, isComplete }) => {
    if (!isComplete) {
        return (
             <div className="text-center p-6 bg-slate-100 rounded-lg h-full flex flex-col justify-center">
                <p className="text-slate-600 font-medium">Complete todos los criterios para ver el resultado final.</p>
            </div>
        )
    }

    const levels = {
        Insatisfactorio: { icon: <WarningIcon />, text: 'Insatisfactorio', color: 'bg-red-100 text-red-800 border-red-200', range: '10 - 19' },
        Básico: { icon: <CheckIcon />, text: 'Básico', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', range: '20 - 29' },
        Competente: { icon: <StarIcon />, text: 'Competente', color: 'bg-blue-100 text-blue-800 border-blue-200', range: '30 - 36' },
        Destacado: { icon: <RocketIcon />, text: 'Destacado', color: 'bg-green-100 text-green-800 border-green-200', range: '37 - 40' },
    };

    const currentLevel = levels[level];

    return (
        <div className={`text-center p-6 rounded-lg border h-full flex flex-col justify-center items-center ${currentLevel.color}`}>
            <div className="w-12 h-12 mb-2">{currentLevel.icon}</div>
            <p className={`px-4 py-1.5 rounded-full text-lg font-bold ${currentLevel.color}`}>{currentLevel.text}</p>
            <p className="text-sm mt-2 opacity-80">Rango: {currentLevel.range}</p>
        </div>
    );
};

const Summary: React.FC<SummaryProps> = ({ evaluation, onTextChange, totalScore, performanceLevel, isFormComplete }) => {
    return (
        <section className="mt-8 bg-white rounded-xl shadow-md border border-slate-200 printable-content summary-section">
            <div className="p-6 border-b border-slate-200">
                 <h2 className="text-2xl font-bold text-blue-700">Resumen y Plan de Seguimiento</h2>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                         <div>
                            <h3 className="font-semibold text-slate-700 mb-2">Puntuación Global</h3>
                            <div className={`text-5xl font-bold text-center py-8 rounded-lg border ${isFormComplete ? 'bg-blue-600 text-white border-blue-700' : 'bg-slate-200 text-slate-500 border-slate-300'}`}>
                               {isFormComplete ? `${totalScore}` : '-'}
                                <span className="text-3xl opacity-80">/ 40</span>
                            </div>
                        </div>
                         <div>
                            <h3 className="font-semibold text-slate-700 mb-2">Nivel General de Desempeño</h3>
                           <PerformanceIndicator level={performanceLevel} isComplete={isFormComplete} />
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <label htmlFor="evaluatorComments" className="block text-sm font-medium text-slate-700 mb-1">Comentarios del Evaluador (Jefe de Servicio):</label>
                            <textarea id="evaluatorComments" name="evaluatorComments" value={evaluation.evaluatorComments} onChange={onTextChange} rows={3} className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition bg-white"></textarea>
                        </div>
                        <div>
                            <label htmlFor="improvementAreas" className="block text-sm font-medium text-slate-700 mb-1">Áreas de Oportunidad para Enfocarse:</label>
                            <textarea id="improvementAreas" name="improvementAreas" value={evaluation.improvementAreas} onChange={onTextChange} rows={3} className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition bg-white"></textarea>
                        </div>
                        <div>
                            <label htmlFor="residentCommitments" className="block text-sm font-medium text-slate-700 mb-1">Acuerdos y Compromisos del Residente:</label>
                            <textarea id="residentCommitments" name="residentCommitments" value={evaluation.residentCommitments} onChange={onTextChange} rows={3} className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition bg-white"></textarea>
                        </div>
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-8 border-t mt-8 border-slate-200">
                    <div>
                       <label htmlFor="evaluatorName" className="block text-sm font-medium text-slate-700">Evaluador (Jefe de Servicio):</label>
                       <input type="text" id="evaluatorName" name="evaluatorName" value={evaluation.evaluatorName} onChange={onTextChange} placeholder="Nombre completo" className="mt-1 w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition bg-white" />
                    </div>
                    <div>
                        <label htmlFor="residentName" className="block text-sm font-medium text-slate-700">Residente (R1):</label>
                       <input type="text" id="residentName" name="residentName" value={evaluation.residentName} onChange={onTextChange} placeholder="Nombre completo" className="mt-1 w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition bg-white" />
                    </div>
                    <div>
                        <label htmlFor="evaluationDate" className="block text-sm font-medium text-slate-700">Fecha de Evaluación:</label>
                       <input type="date" id="evaluationDate" name="evaluationDate" value={evaluation.evaluationDate} onChange={onTextChange} className="mt-1 w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition bg-white" />
                    </div>
                    <div>
                        <label htmlFor="nextReviewDate" className="block text-sm font-medium text-slate-700">Próxima Revisión:</label>
                       <input type="date" id="nextReviewDate" name="nextReviewDate" value={evaluation.nextReviewDate} onChange={onTextChange} className="mt-1 w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition bg-white" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;