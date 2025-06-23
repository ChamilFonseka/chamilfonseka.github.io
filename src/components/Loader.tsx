import { useEffect, useState } from "react";

interface LoaderProps {
    onLoadComplete: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animation time in milliseconds (2 seconds total)
        const animationDuration = 2000;
        // Update interval in milliseconds
        const updateInterval = 20;
        // Number of steps to reach 100
        const steps = animationDuration / updateInterval;
        // Increment per step
        const increment = 100 / steps;

        let currentProgress = 0;

        // Create the animation loop
        const interval = setInterval(async () => {
            currentProgress += increment;
            console.log(currentProgress);
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Ensure we don't exceed 100 due to floating point
            if (currentProgress >= 100) {
                currentProgress = 100;
                setProgress(100);
                clearInterval(interval);

                // Give a small delay before signaling completion
                setTimeout(() => {
                    onLoadComplete();
                }, 500);
            } else {
                setProgress(Math.floor(currentProgress));
            }
        }, updateInterval);

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, [onLoadComplete]);

    return (
        <section>
            <span>{progress}%</span>
        </section>
    );
};

export default Loader;