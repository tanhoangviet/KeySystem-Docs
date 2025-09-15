import React, { ReactNode } from 'react';

interface TagProps {
    color?: string;
    textColor?: string;
    children: ReactNode;
    className?: string;
}

const Tag = ({
    children,
    className = ''
}: TagProps) => {
    return (
        <span
            className={`
                flex items-center justify-center gap-1.5
                px-3 py-2 rounded-full 
                text-sm font-semibold leading-none
                transition-all duration-200
                ${className}
              `}
            >
            {children}
        </span>
    );
};

export default Tag;