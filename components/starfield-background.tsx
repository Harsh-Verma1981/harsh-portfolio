'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  vx: number;
  vy: number;
  twinkleSpeed: number;
  twinkleDir: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  age: number;
  lifetime: number;
  width: number;
  trail: { x: number; y: number }[];
  sparks: Spark[];
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  radius: number;
  age: number;
  lifetime: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<Meteor[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastMeteorTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Canvas sizing ──────────────────────────────────────────────────────────
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // ── Stars ──────────────────────────────────────────────────────────────────
    const stars: Star[] = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.6 + 0.2,
      opacity: Math.random() * 0.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }));

    // ── Meteor factory ─────────────────────────────────────────────────────────
    const createMeteor = (): Meteor => {
      const x = Math.random() * canvas.width * 0.6;
      const y = -60;
      const speed = Math.random() * 5 + 7;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.25;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 120 + 100,
        opacity: 1,
        age: 0,
        lifetime: Math.random() * 40 + 60,
        width: Math.random() * 1.5 + 1,
        trail: [],
        sparks: [],
      };
    };

    // ── Spawn sparks at meteor head ────────────────────────────────────────────
    const spawnSparks = (meteor: Meteor) => {
      const count = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < count; i++) {
        const spread = 0.8;
        meteor.sparks.push({
          x: meteor.x,
          y: meteor.y,
          vx: -meteor.vx * 0.1 + (Math.random() - 0.5) * spread,
          vy: -meteor.vy * 0.1 + (Math.random() - 0.5) * spread,
          opacity: Math.random() * 0.7 + 0.3,
          radius: Math.random() * 1.2 + 0.3,
          age: 0,
          lifetime: Math.random() * 20 + 10,
        });
      }
    };

    // ── Main animation loop ────────────────────────────────────────────────────
    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const bgColor   = isDark ? '#0a0a14' : '#f8f8fa';
      const starColor = isDark ? '#ffffff'  : '#1a1a2e';
      const meteorCore = isDark ? '#ffffff' : '#1a1a2e';
      const meteorGlow = isDark ? 'rgba(180,180,255,' : 'rgba(80,80,120,';

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── Stars ─────────────────────────────────────────────────────────────
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        star.opacity += star.twinkleSpeed * star.twinkleDir;
        if (star.opacity >= 0.9) star.twinkleDir = -1;
        if (star.opacity <= 0.2) star.twinkleDir = 1;

        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Spawn meteors every 2.5–3.5s ──────────────────────────────────────
      const now = Date.now();
      const interval = Math.random() * 1000 + 2500;
      if (now - lastMeteorTimeRef.current > interval) {
        const batch = Math.random() < 0.35 ? 2 : 1;
        for (let b = 0; b < batch; b++) meteorsRef.current.push(createMeteor());
        lastMeteorTimeRef.current = now;
      }

      // ── Meteors ────────────────────────────────────────────────────────────
      meteorsRef.current = meteorsRef.current.filter((meteor) => {
        meteor.age++;
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;

        meteor.trail.push({ x: meteor.x, y: meteor.y });
        if (meteor.trail.length > 30) meteor.trail.shift();

        const fadeStart = meteor.lifetime * 0.7;
        meteor.opacity = meteor.age > fadeStart
          ? Math.max(0, 1 - (meteor.age - fadeStart) / (meteor.lifetime - fadeStart))
          : 1;

        if (Math.random() < 0.4) spawnSparks(meteor);

        // Outer glow
        if (meteor.trail.length > 1) {
          const tail = meteor.trail[0];
          const glowGrad = ctx.createLinearGradient(tail.x, tail.y, meteor.x, meteor.y);
          glowGrad.addColorStop(0, meteorGlow + '0)');
          glowGrad.addColorStop(1, meteorGlow + (meteor.opacity * 0.15) + ')');
          ctx.strokeStyle = glowGrad;
          ctx.lineWidth = meteor.width * 6;
          ctx.lineCap = 'round';
          ctx.globalAlpha = meteor.opacity * 0.3;
          ctx.beginPath();
          ctx.moveTo(tail.x, tail.y);
          meteor.trail.forEach((p) => ctx.lineTo(p.x, p.y));
          ctx.stroke();
        }

        // Core trail
        if (meteor.trail.length > 1) {
          const tail = meteor.trail[0];
          const coreGrad = ctx.createLinearGradient(tail.x, tail.y, meteor.x, meteor.y);
          coreGrad.addColorStop(0,   meteorCore + '00');
          coreGrad.addColorStop(0.3, meteorCore + '44');
          coreGrad.addColorStop(0.7, meteorCore + 'bb');
          coreGrad.addColorStop(1,   meteorCore + 'ff');
          ctx.strokeStyle = coreGrad;
          ctx.lineWidth = meteor.width;
          ctx.lineCap = 'round';
          ctx.globalAlpha = meteor.opacity;
          ctx.beginPath();
          ctx.moveTo(tail.x, tail.y);
          meteor.trail.forEach((p) => ctx.lineTo(p.x, p.y));
          ctx.stroke();
        }

        // Head glow
        const headGlow = ctx.createRadialGradient(
          meteor.x, meteor.y, 0,
          meteor.x, meteor.y, meteor.width * 5,
        );
        headGlow.addColorStop(0,   meteorGlow + (meteor.opacity * 0.8) + ')');
        headGlow.addColorStop(0.4, meteorGlow + (meteor.opacity * 0.3) + ')');
        headGlow.addColorStop(1,   meteorGlow + '0)');
        ctx.fillStyle = headGlow;
        ctx.globalAlpha = meteor.opacity;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.width * 5, 0, Math.PI * 2);
        ctx.fill();

        // Bright head dot
        ctx.fillStyle = meteorCore;
        ctx.globalAlpha = meteor.opacity;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.width * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Sparks
        meteor.sparks = meteor.sparks.filter((spark) => {
          spark.age++;
          spark.x  += spark.vx;
          spark.y  += spark.vy;
          spark.vy += 0.03;
          spark.opacity *= 0.92;
          ctx.globalAlpha = spark.opacity * meteor.opacity;
          ctx.fillStyle = meteorCore;
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
          ctx.fill();
          return spark.age < spark.lifetime && spark.opacity > 0.05;
        });

        return (
          meteor.age < meteor.lifetime &&
          meteor.x < canvas.width  + 100 &&
          meteor.y < canvas.height + 100
        );
      });

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
