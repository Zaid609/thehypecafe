"use client";

import { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  overlayOpacity?: number;
  children: React.ReactNode;
}

/**
 * HeroBackgroundVideo - Netflix-style hero with video background
 * 
 * Features:
 * - Autoplay, muted, loop video background
 * - Dark overlay for text readability
 * - Fallback poster image if video fails
 * - Responsive heights
 */
const HeroBackgroundVideo = ({
  videoSrc = "/media/videos/hero/hypecave-bg.mp4",
  posterSrc = "/img/bn/banner-two-bg.jpg",
  overlayOpacity = 0.55,
  children,
}: HeroBackgroundVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Attempt to play video (handles autoplay restrictions)
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked - fallback to poster
        setVideoError(true);
      });
    }
  }, []);

  return (
    <div className="hero-video-container">
      {/* Video Background */}
      {!videoError && (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Fallback Image (shows if video fails) */}
      {videoError && (
        <div
          className="hero-video-fallback"
          style={{ backgroundImage: `url(${posterSrc})` }}
        />
      )}

      {/* Dark Overlay */}
      <div
        className="hero-video-overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />

      {/* Content Layer */}
      <div className="hero-video-content">
        {children}
      </div>
    </div>
  );
};

export default HeroBackgroundVideo;
