import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonSkiing } from '@fortawesome/free-solid-svg-icons';
import './SlalomScroll.css';

const FREQUENCY = 7; // sayfa boyunca kaç tam zikzak dönüşü yapılacak
const AMPLITUDE = 15; // yatay sallanma genişliği (px)
const POLE_COUNT = FREQUENCY * 2;
const PATH_WIDTH = 40; // slalom-track ile aynı genişlik (px)
const PATH_HEIGHT = 1000; // viewBox birimi, preserveAspectRatio="none" ile konteyner boyuna geriliyor
const PATH_SAMPLES = 90; // eğrinin pürüzsüzlüğü için örnek nokta sayısı

// Catmull-Rom noktalarını yumuşak bir kübik bezier path'ine çevirir (gerilim 1/6).
const smoothPath = (points: { x: number; y: number }[]) => {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
};

const getScrollPct = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return { pct: 0, max: 0 };
  const pct = Math.min(Math.max(window.scrollY / max, 0), 1);
  return { pct, max };
};

const SlalomScroll = () => {
  const [progress, setProgress] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const { pct, max } = getScrollPct();
      setProgress(pct);
      setCanScroll(max > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToPct = useCallback((pct: number, smooth: boolean) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: pct * max, behavior: smooth ? 'smooth' : 'auto' });
  }, []);

  const pctFromPointer = useCallback((clientY: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    return Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1);
  }, []);

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (draggingRef.current) return;
    scrollToPct(pctFromPointer(event.clientY), true);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    scrollToPct(pctFromPointer(event.clientY), false);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  const { xOffset, facingRight, tilt } = useMemo(() => {
    const angle = progress * FREQUENCY * 2 * Math.PI;
    const velocity = Math.cos(angle);
    return {
      xOffset: AMPLITUDE * Math.sin(angle),
      facingRight: velocity >= 0,
      tilt: Math.min(Math.abs(velocity) * 18, 18),
    };
  }, [progress]);

  const pathD = useMemo(() => {
    const centerX = PATH_WIDTH / 2;
    const points = Array.from({ length: PATH_SAMPLES + 1 }, (_, i) => {
      const t = i / PATH_SAMPLES;
      return {
        x: centerX + AMPLITUDE * Math.sin(t * FREQUENCY * 2 * Math.PI),
        y: t * PATH_HEIGHT,
      };
    });
    return smoothPath(points);
  }, []);

  const poles = useMemo(
    () =>
      Array.from({ length: POLE_COUNT }, (_, i) => ({
        top: ((i + 0.5) / POLE_COUNT) * 100,
        side: i % 2 === 0 ? 1 : -1,
      })),
    []
  );

  if (!canScroll) return null;

  return (
    <div
      className="slalom-track"
      ref={trackRef}
      onClick={handleTrackClick}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      role="scrollbar"
      aria-label="Sayfa kaydırma göstergesi"
      aria-orientation="vertical"
      aria-controls="root"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg
        className="slalom-track__svg"
        viewBox={`0 0 ${PATH_WIDTH} ${PATH_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="slalom-track__path" d={pathD} />
      </svg>
      {poles.map((pole, index) => (
        <span
          key={index}
          className={`slalom-track__pole ${pole.side > 0 ? 'is-right' : 'is-left'}`}
          style={{ top: `${pole.top}%` }}
        />
      ))}
      <div
        className="slalom-track__skier"
        style={{
          top: `${progress * 100}%`,
          transform: `translate(calc(-50% + ${xOffset}px), -50%) scaleX(${facingRight ? 1 : -1}) rotate(${facingRight ? tilt : -tilt}deg)`,
        }}
        onPointerDown={handlePointerDown}
      >
        <FontAwesomeIcon icon={faPersonSkiing} />
      </div>
    </div>
  );
};

export default SlalomScroll;
