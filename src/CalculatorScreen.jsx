import React, { useState } from 'react';

const CalculatorScreen = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const handleClear = () => {
        setInput('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <input
                type="text"
                value={input}
                readOnly
                className="text-2xl w-3/4 p-2 border rounded mb-4"
            />
            <div className="grid grid-cols-4 gap-4 w-3/4">
                {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'C', 0, '=', '/'].map((value) => (
                    <button
                        key={value}
                        className="bg-gray-300 p-4 rounded"
                        onClick={() => {
                            if (value === '=') {
                                handleCalculate();
                            } else if (value === 'C') {
                                handleClear();
                            } else {
                                handleButtonClick(value);
                            }
                        }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CalculatorScreen;