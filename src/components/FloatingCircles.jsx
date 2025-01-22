import React, { useMemo } from 'react';

export const FloatingCircles = () => {
    // Génération des cercles avec useMemo pour éviter les recalculs inutiles
    const circles = useMemo(() => {
        const generateCircles = (count) => {
            return Array.from({ length: count }, () => {
                const size = Math.floor(Math.random() * 16) + 8;

                const left = Math.floor(Math.random() * 90) + 5;
                const top = Math.floor(Math.random() * 90) + 5;

                const duration = Math.random() * 2 + 3;

                const delay = Math.random() * 3;

                return {
                    size,
                    left,
                    top,
                    duration: Number(duration.toFixed(2)),
                    delay: Number(delay.toFixed(2))
                };
            });
        };

        return generateCircles(50);
    }, []);

    return (
        <>
            <style>
                {`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0) translateX(0);
                            opacity: 0.1;
                        }
                        50% {
                            transform: translateY(-20px) translateX(5px);
                            opacity: 0.1;
                        }
                    }

                    .floating-circle {
                        animation: float var(--duration) ease-in-out infinite;
                        animation-delay: var(--delay);
                    }
                `}
            </style>
            <div className="absolute inset-0 z-0 overflow-hidden">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-gray-100 floating-circle"
                        style={{
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            left: `${circle.left}%`,
                            top: `${circle.top}%`,
                            ['--duration']: `${circle.duration}s`,
                            ['--delay']: `${circle.delay}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};