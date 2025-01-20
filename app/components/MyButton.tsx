import React from 'react'

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    width?: string;
    className?: string;
}

function MyButton({ 
    onClick, 
    children, 
    width = "auto", 
    className = "", 
}: ButtonProps) {
    return (
        <button 
            className={`
                border-[1px] border-black px-12 py-4 rounded-[10px] flex 
                items-center 
                justify-center 
                hover:text-white 
                hover:bg-black 
                transition-all 
                duration-300
                ${className}
            `}
            style={{ width }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default MyButton