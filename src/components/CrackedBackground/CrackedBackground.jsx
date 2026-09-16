import React from 'react';
import './CrackedBackground.css';

export const CrackedBackground = () => {
    return (
        <div className="cracked-container" aria-hidden="true">
            <div className="crack-layer layer-0"></div>
            <div className="crack-layer layer-1"></div>
            <div className="crack-layer layer-2"></div>
            <div className="crack-layer layer-3"></div>
        </div>
    );
};


export default CrackedBackground;