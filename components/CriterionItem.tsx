import React from 'react';
import { type Criterion, type CriterionLevel } from '../types';

interface CriterionItemProps {
    criterion: Criterion;
    selectedScore: number | null;
    onScoreChange: (criterionId: number, score: number) => void;
}

const scoreStyles: { [key: number]: { base: string, selected: string } } = {
    1: { base: 'border-red-300 hover:border-red-500 hover:bg-red-50 text-red-700', selected: 'bg-red-500 border-red-500 text-white' },
    2: { base: 'border-yellow-400 hover:border-yellow-500 hover:bg-yellow-50 text-yellow-800', selected: 'bg-yellow-500 border-yellow-500 text-white' },
    3: { base: 'border-blue-400 hover:border-blue-500 hover:bg-blue-50 text-blue-700', selected: 'bg-blue-600 border-blue-600 text-white' },
    4: { base: 'border-green-400 hover:border-green-500 hover:bg-green-50 text-green-700', selected: 'bg-green-600 border-green-600 text-white' },
};


const ScoreOption: React.FC<{
    level: CriterionLevel;
    criterionId: number;
    isSelected: boolean;
    onChange: (id: number, score: number) => void;
}> = ({ level, criterionId, isSelected, onChange }) => {
    const style = scoreStyles[level.score] || { base: '', selected: '' };
    
    return (
        <div className={`
            rounded-lg p-3 border-2 transition-all duration-200 ease-in-out transform
            ${isSelected ? `${style.selected} shadow-lg scale-105` : `${style.base} bg-white`}
            print:border-2 print:p-2
            ${isSelected ? `print:${style.selected.replace('text-white', 'print:text-black print:bg-gray-300')}` : 'print:bg-white'}
        `}>
            <label className="flex items-start cursor-pointer h-full">
                <input
                    type="radio"
                    name={`criterion-${criterionId}`}
                    value={level.score}
                    checked={isSelected}
                    onChange={() => onChange(criterionId, level.score)}
                    className="sr-only"
                />
                <div className="flex flex-col">
                    <p className="font-bold text-sm leading-tight">({level.score}) {level.label}</p>
                    <p className="text-sm mt-1 flex-grow">{level.description}</p>
                </div>
            </label>
        </div>
    );
};


const CriterionItem: React.FC<CriterionItemProps> = ({ criterion, selectedScore, onScoreChange }) => {
    return (
        <div className="p-6 criterion-item">
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-800">
                    {criterion.id}. {criterion.title}
                </h3>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{criterion.category}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {criterion.levels.map(level => (
                    <ScoreOption
                        key={level.score}
                        level={level}
                        criterionId={criterion.id}
                        isSelected={selectedScore === level.score}
                        onChange={onScoreChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default CriterionItem;