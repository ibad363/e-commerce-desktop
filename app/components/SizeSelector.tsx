"use client"
import { useState } from 'react';

const SizeSelector = ({ size }: { size: string }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div 
            className={`py-2 px-4 flex justify-center items-center
                ${isSelected 
                    ? 'bg-[#f5d97e] text-gray-600 font-semibold shadow-md' 
                    : 'bg-[#FAF4F4] text-gray-600'} 
                rounded cursor-pointer hover:bg-[#FBEBB5] transition-all duration-300`}
            onClick={() => setIsSelected(!isSelected)}
        >
            {size}
        </div>
    );
};

export default SizeSelector;