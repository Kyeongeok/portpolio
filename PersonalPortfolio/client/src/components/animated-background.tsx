import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D objects and particles
    const objects: Array<{
      x: number;
      y: number;
      z: number;
      rotationX: number;
      rotationY: number;
      rotationZ: number;
      size: number;
      type: 'cube' | 'sphere' | 'pyramid';
      color: string;
      velocity: { x: number; y: number; z: number };
      rotationSpeed: { x: number; y: number; z: number };
    }> = [];

    // Create objects
    for (let i = 0; i < 12; i++) {
      objects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000 + 500,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        size: Math.random() * 50 + 20,
        type: ['cube', 'sphere', 'pyramid'][Math.floor(Math.random() * 3)] as 'cube' | 'sphere' | 'pyramid',
        color: [
          'rgba(59, 130, 246, 0.1)',
          'rgba(139, 92, 246, 0.1)',
          'rgba(236, 72, 153, 0.1)',
          'rgba(34, 197, 94, 0.1)',
          'rgba(245, 158, 11, 0.1)'
        ][Math.floor(Math.random() * 5)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
          z: (Math.random() - 0.5) * 2
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw objects
      objects.forEach(obj => {
        // Update position
        obj.x += obj.velocity.x;
        obj.y += obj.velocity.y;
        obj.z += obj.velocity.z;

        // Update rotation
        obj.rotationX += obj.rotationSpeed.x;
        obj.rotationY += obj.rotationSpeed.y;
        obj.rotationZ += obj.rotationSpeed.z;

        // Wrap around screen
        if (obj.x < -100) obj.x = canvas.width + 100;
        if (obj.x > canvas.width + 100) obj.x = -100;
        if (obj.y < -100) obj.y = canvas.height + 100;
        if (obj.y > canvas.height + 100) obj.y = -100;
        if (obj.z < -500) obj.z = 1500;
        if (obj.z > 1500) obj.z = -500;

        // Calculate perspective
        const perspective = 800;
        const scale = perspective / (perspective + obj.z);
        const projectedX = obj.x;
        const projectedY = obj.y;
        const projectedSize = obj.size * scale;

        if (projectedSize > 0.5) {
          ctx.save();
          ctx.translate(projectedX, projectedY);
          ctx.scale(scale, scale);
          ctx.rotate(obj.rotationZ);

          // Set style
          ctx.fillStyle = obj.color;
          ctx.strokeStyle = obj.color.replace('0.1', '0.3');
          ctx.lineWidth = 2;

          // Draw shape based on type
          switch (obj.type) {
            case 'cube':
              drawCube(ctx, obj.size, obj.rotationX, obj.rotationY);
              break;
            case 'sphere':
              drawSphere(ctx, obj.size);
              break;
            case 'pyramid':
              drawPyramid(ctx, obj.size, obj.rotationX, obj.rotationY);
              break;
          }

          ctx.restore();
        }
      });

      requestAnimationFrame(animate);
    };

    // Drawing functions
    const drawCube = (ctx: CanvasRenderingContext2D, size: number, rotX: number, rotY: number) => {
      const cos = Math.cos;
      const sin = Math.sin;
      
      // Simple 3D cube projection
      const points = [
        [-size/2, -size/2, -size/2],
        [size/2, -size/2, -size/2],
        [size/2, size/2, -size/2],
        [-size/2, size/2, -size/2],
        [-size/2, -size/2, size/2],
        [size/2, -size/2, size/2],
        [size/2, size/2, size/2],
        [-size/2, size/2, size/2]
      ];

      // Apply rotations
      const rotatedPoints = points.map(([x, y, z]) => {
        // Rotate around Y axis
        const x1 = x * cos(rotY) - z * sin(rotY);
        const z1 = x * sin(rotY) + z * cos(rotY);
        
        // Rotate around X axis
        const y1 = y * cos(rotX) - z1 * sin(rotX);
        const z2 = y * sin(rotX) + z1 * cos(rotX);
        
        return [x1, y1, z2];
      });

      // Draw faces
      const faces = [
        [0, 1, 2, 3], // front
        [4, 5, 6, 7], // back
        [0, 1, 5, 4], // bottom
        [2, 3, 7, 6], // top
        [0, 3, 7, 4], // left
        [1, 2, 6, 5]  // right
      ];

      faces.forEach(face => {
        ctx.beginPath();
        face.forEach((pointIndex, i) => {
          const [x, y] = rotatedPoints[pointIndex];
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    };

    const drawSphere = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    };

    const drawPyramid = (ctx: CanvasRenderingContext2D, size: number, rotX: number, rotY: number) => {
      const points = [
        [0, -size/2, 0],      // top
        [-size/2, size/2, -size/2], // base corners
        [size/2, size/2, -size/2],
        [size/2, size/2, size/2],
        [-size/2, size/2, size/2]
      ];

      // Apply rotations
      const rotatedPoints = points.map(([x, y, z]) => {
        const x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
        const z1 = x * Math.sin(rotY) + z * Math.cos(rotY);
        const y1 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
        return [x1, y1];
      });

      // Draw pyramid faces
      const faces = [
        [0, 1, 2], // front
        [0, 2, 3], // right
        [0, 3, 4], // back
        [0, 4, 1], // left
        [1, 2, 3, 4] // base
      ];

      faces.forEach(face => {
        ctx.beginPath();
        face.forEach((pointIndex, i) => {
          const [x, y] = rotatedPoints[pointIndex];
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}