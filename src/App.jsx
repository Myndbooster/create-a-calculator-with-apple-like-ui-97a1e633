import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import CalculatorScreen from './CalculatorScreen';

function App() {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    const handleOpenCalculator = () => {
        setIsCalculatorOpen(true);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {isCalculatorOpen ? (
                <CalculatorScreen />
            ) : (
                <HomeScreen onOpenCalculator={handleOpenCalculator} />
            )}
        </div>
    );
}

export default App;