import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }
    setVisible(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, input, textarea, select, [data-cursor-hover]')) setHovering(true);
    };
    const handleOut = () => setHovering(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  if (isTouch || !visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full"
      style={{
        left: pos.x - 5,
        top: pos.y - 5,
        width: 10,
        height: 10,
        border: hovering ? 'none' : '1.5px solid #8C7355',
        backgroundColor: hovering ? 'rgba(140, 115, 85, 0.2)' : 'transparent',
        transform: `scale(${hovering ? 2.5 : 1})`,
        transition: 'transform 200ms cubic-bezier(0.25, 0.1, 0.25, 1), background-color 200ms cubic-bezier(0.25, 0.1, 0.25, 1), border 200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
    />
  );
}
