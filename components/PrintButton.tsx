
import React from 'react';

const PrintButton: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="mt-10 text-center no-print">
            <button
                onClick={handlePrint}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v3a2 2 0 002 2h6a2 2 0 002-2v-3h1a2 2 0 002-2v-3a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v3h6v-3z" clipRule="evenodd" />
                    <path d="M9 11a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" />
                </svg>
                Imprimir o Guardar como PDF
            </button>
        </div>
    );
};

export default PrintButton;