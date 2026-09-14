/* ═══════════════════════════════════════════════════════════════════════════
   KRONOS VAULT PROTOCOL · ANIMATED BACKGROUND
   CC-BY-4.0 · v0.1.0
   Option E: subtle particle network + breathing gradient (via CSS)
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  // Respect reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const ctx = canvas.getContext("2d");
  let width, height, dpr;
  let particles = [];
  let animationId;

  const PALETTE = ["#00ff41", "#00ffff", "#ff00ff"];
  const LINK_DISTANCE = 120;
  const BASE_SPEED = 0.15;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function initParticles() {
    const density = window.innerWidth < 720 ? 14000 : 10000;
    const count = Math.min(80, Math.floor((width * height) / density));

    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * BASE_SPEED * 2,
        vy: (Math.random() - 0.5) * BASE_SPEED * 2,
        r: Math.random() * 1.2 + 0.4,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)]
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.55;
      ctx.fill();
    }

    // Draw links
    ctx.globalAlpha = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < LINK_DISTANCE) {
          const alpha = (1 - dist / LINK_DISTANCE) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = a.color;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(draw);
  }

  // Pause when tab is hidden — saves battery on mobile
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      draw();
    }
  });

  window.addEventListener("resize", resize, { passive: true });

  resize();
  draw();
})();
