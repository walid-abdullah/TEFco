"use client";
import { useState, useEffect } from "react";

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const handleOpenModal = (e) => {
      let url = e.detail.url;
      // Convert standard youtube link to embed link if needed
      if (url && url.includes('youtube.com/watch?v=')) {
        url = url.replace('watch?v=', 'embed/');
      } else if (url && url.includes('youtu.be/')) {
        url = url.replace('youtu.be/', 'youtube.com/embed/');
      }
      setVideoUrl(url);
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    };

    window.addEventListener("open-video-modal", handleOpenModal);
    return () => window.removeEventListener("open-video-modal", handleOpenModal);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
    document.body.style.overflow = ""; // Restore scrolling
  };

  if (!isOpen) return null;

  return (
    <div className="video-modal-backdrop" onClick={closeModal} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.92)',
      backdropFilter: 'blur(16px)',
      zIndex: 9999999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()} style={{
        width: '100%',
        maxWidth: '900px',
        padding: '20px',
        position: 'relative'
      }}>
        <button className="modal-close-btn" onClick={closeModal} style={{
          position: 'absolute',
          top: '-40px',
          right: '20px',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '2rem',
          cursor: 'pointer'
        }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal-video-frame" style={{
          aspectRatio: '16/9',
          width: '100%',
          background: '#000',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          {videoUrl ? (
            <iframe 
              src={videoUrl} 
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          ) : (
            <div style={{color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              Video Unavailable
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
