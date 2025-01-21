export const FloatingCircles = () => {
    const circles = Array.from({ length: 50 }, () => ({
        size: Math.random() * 20 + 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5
    }));

    return (
        <div className="absolute inset-0 z-0">
            {circles.map((circle, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-gray-100 animate-float"
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
    );
};