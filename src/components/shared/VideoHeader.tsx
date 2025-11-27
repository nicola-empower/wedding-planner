"use client";

import { useEffect, useRef } from "react";

export function VideoHeader() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slow down slightly for a dreamy effect
        }
    }, []);

    return (
        <div className="relative w-full h-[60vh] overflow-hidden">
            <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for text readability */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/wedding-header.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center p-4">
                <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg">
                    The Wedding
                </h1>
                <p className="text-lg md:text-2xl font-light drop-shadow-md max-w-2xl">
                    Celebrating Love, Life, and New Beginnings
                </p>
            </div>
        </div>
    );
}
