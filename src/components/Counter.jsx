import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const step = Math.ceil(target / (duration / 16));
            const timer = setInterval(() => {
                start += step;
                setCount((prev) => (start >= target ? target : prev + step));
                if (start >= target) clearInterval(timer);
            }, 16);
        }
    }, [inView, target, duration]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl font-bold text-[#2A4747]">{count}</div>
            <div className="text-sm mt-2 text-gray-600 uppercase">{label}</div>
        </div>
    );
};

export default Counter;
