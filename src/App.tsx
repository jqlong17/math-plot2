import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FunctionPlotter from './components/FunctionPlotter';
import FunctionSelector from './components/FunctionSelector';
import LanguageToggle from './components/LanguageToggle';
import { FunctionType } from './types';

function App() {
  const { t } = useTranslation();
  const [selectedFunction, setSelectedFunction] = useState<FunctionType>('square');
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-100 p-2 flex flex-col">
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold">{t('functionPlotter')}</h1>
        <LanguageToggle />
      </header>
      <div className="flex flex-col sm:flex-row gap-2 flex-grow">
        <div className="w-full sm:w-1/3 bg-white p-2 rounded shadow">
          <FunctionSelector
            selectedFunction={selectedFunction}
            setSelectedFunction={setSelectedFunction}
            a={a}
            b={b}
            setA={setA}
            setB={setB}
          />
        </div>
        <div className="w-full sm:w-2/3 bg-white p-2 rounded shadow flex-grow">
          <FunctionPlotter
            functionType={selectedFunction}
            a={a}
            b={b}
          />
        </div>
      </div>
    </div>
  );
}

export default App;