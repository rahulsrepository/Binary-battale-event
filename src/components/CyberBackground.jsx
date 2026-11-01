import React, { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Binary / Tech particles
    const chars = ['0', '1', '{', '}', '<', '>', '/', '#', '*', '0', '1', '1', '0'];
    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        char: chars[Math.floor(Math.random() * chars.length)],
        speed: 0.3 + Math.random() * 0.7,
        opacity: 0.08 + Math.random() * 0.18,
        size: 11 + Math.random() * 5,
        color: Math.random() > 0.5 ? '6, 182, 212' : '124, 58, 237'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > height) {
          p.y = -20;
          p.x = Math.random() * width;
          p.char = chars[Math.floor(Math.random() * chars.length)];
        }

        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="ambient-glow ambient-glow-3" />
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.7
        }}
      />
    </>
  );
}
