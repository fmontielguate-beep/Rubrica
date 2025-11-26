import React from 'react';
import { HospitalIcon } from './icons/Icons';

const Header: React.FC = () => (
    <header className="mb-8 p-6 bg-white rounded-xl shadow-md border border-slate-200 print:shadow-none print:border-none print:p-0 print:mb-4 print:bg-transparent">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
            <HospitalIcon />
            <div className="mt-4 sm:mt-0 sm:ml-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                    Rúbrica de Evaluación para Residentes R1 de Pediatría
                </h1>
                <h2 className="text-lg sm:text-xl text-slate-500 mt-1">
                    Hospital Roosevelt
                </h2>
            </div>
        </div>
    </header>
);

export default Header;