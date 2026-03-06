import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

const InfinityBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    // Draw infinity symbol using lemniscate of Bernoulli
    const drawInfinity = (cx: number, cy: number, scale: number, t: number) => {
      const points = 200;
      
      // Draw the path
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const denom = 1 + Math.sin(angle) * Math.sin(angle);
        const px = cx + (scale * Math.cos(angle)) / denom;
        const py = cy + (scale * Math.sin(angle) * Math.cos(angle)) / denom;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = `hsla(142, 70%, 45%, 0.08)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw a glowing dot moving along the infinity path
      for (let d = 0; d < 3; d++) {
        const dotAngle = t * 0.5 + (d * Math.PI * 2) / 3;
        const denom = 1 + Math.sin(dotAngle) * Math.sin(dotAngle);
        const dx = cx + (scale * Math.cos(dotAngle)) / denom;
        const dy = cy + (scale * Math.sin(dotAngle) * Math.cos(dotAngle)) / denom;

        const gradient = ctx.createRadialGradient(dx, dy, 0, dx, dy, 20);
        gradient.addColorStop(0, `hsla(142, 70%, 55%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(142, 70%, 45%, 0.2)`);
        gradient.addColorStop(1, `hsla(142, 70%, 45%, 0)`);
        ctx.beginPath();
        ctx.arc(dx, dy, 20, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(dx, dy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(142, 70%, 65%, 0.9)`;
        ctx.fill();
      }

      // Draw second larger, slower infinity
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const denom = 1 + Math.sin(angle) * Math.sin(angle);
        const px = cx + (scale * 1.3 * Math.cos(angle)) / denom;
        const py = cy + (scale * 1.3 * Math.sin(angle) * Math.cos(angle)) / denom;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = `hsla(142, 70%, 45%, 0.04)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Connection lines between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(142, 70%, 45%, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // Draw infinity symbols
      const cx = canvas.width / 2;
      const cy = canvas.height * 0.45;
      const scale = Math.min(canvas.width * 0.25, 300);
      drawInfinity(cx, cy, scale, time);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(142, 70%, 55%, ${currentOpacity})`;
        ctx.fill();
      });

      drawConnections();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default InfinityBackground;
