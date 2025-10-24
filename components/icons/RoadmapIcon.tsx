import React from 'react';

interface IconProps {
    className?: string;
}

export const RoadmapIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13v-6m0-6V4l5.553 2.776a1 1 0 01.447.894v10.764a1 1 0 01-1.447.894L15 20m-6-6h.01M15 14h.01"></path>
    </svg>
);
