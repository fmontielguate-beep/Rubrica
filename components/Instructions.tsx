import React from 'react';

const Instructions: React.FC = () => (
    <details className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden no-print">
        <summary className="p-5 cursor-pointer font-semibold text-lg text-slate-700 hover:bg-slate-50 flex justify-between items-center transition-colors">
            Protocolo e Instrucciones para el Jefe de Servicio
            <svg className="w-5 h-5 transform transition-transform duration-300 [&_path]:stroke-slate-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </summary>
        <div className="p-6 border-t border-slate-200 bg-slate-50">
            <p className="mb-4 text-slate-600">Este protocolo establece la frecuencia y los criterios para la evaluación formativa de los Residentes de Primer Año (R1) de Pediatría.</p>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="px-4 py-3 rounded-l-lg">Área</th>
                            <th scope="col" className="px-4 py-3 rounded-r-lg">Instrucción y Frecuencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b border-slate-200"><td className="px-4 py-4 font-medium text-slate-800">Frecuencia de Evaluación</td><td className="px-4 py-4">La auditoría y calificación deben realizarse de forma <span className="font-bold">FRECUENTE</span> (mínimo 2 veces por semana) para proporcionar retroalimentación oportuna.</td></tr>
                        <tr className="bg-slate-50 border-b border-slate-200"><td className="px-4 py-4 font-medium text-slate-800">Enfoque de la Auditoría</td><td className="px-4 py-4">La revisión debe enfocarse estrictamente en la calidad y oportunidad de la <span className="font-bold">DOCUMENTACIÓN CLÍNICA</span> (Notas SOAP/Weed) y la <span className="font-bold">EJECUCIÓN DE ÓRDENES</span>.</td></tr>
                        <tr className="bg-white border-b border-slate-200"><td className="px-4 py-4 font-medium text-slate-800">Compromisos Matutinos</td><td className="px-4 py-4">Evaluar la presentación de casos (criterio 1) y el cumplimiento de solicitudes (criterio 4) durante la visita. La nota de evolución (criterio 3) debe completarse antes del mediodía.</td></tr>
                        <tr className="bg-slate-50 border-b border-slate-200"><td className="px-4 py-4 font-medium text-slate-800">Compromisos Vespertinos</td><td className="px-4 py-4">Evaluar la reevaluación clínica (criterio 5), la revisión de exámenes (criterio 6) y la calidad de la docencia a pregrado (criterio 7) durante la visita vespertina.</td></tr>
                        <tr className="bg-white border-b border-slate-200"><td className="px-4 py-4 font-medium text-slate-800">Rotación Específica</td><td className="px-4 py-4">Auditar la asistencia estricta a vacunación (antes de las 8:00 AM) y la entrega del listado manuscrito de Dermatología (registro, diagnóstico y tratamiento razonado) cada miércoles.</td></tr>
                        <tr className="bg-slate-50"><td className="px-4 py-4 font-medium text-slate-800">Retroalimentación</td><td className="px-4 py-4">Utilizar el Plan de Seguimiento para documentar fortalezas, áreas de oportunidad y acuerdos claros para la siguiente evaluación.</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </details>
);

export default Instructions;