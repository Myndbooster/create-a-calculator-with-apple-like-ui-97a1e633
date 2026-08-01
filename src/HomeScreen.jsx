import React from 'react';

const HomeScreen = ({ onOpenCalculator }) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to Calculator</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={onOpenCalculator}
            >
                Open Calculator
            </button>
        </div>
    );
};

export default HomeScreen;