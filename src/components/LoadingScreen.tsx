import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface LoadingScreenProps {
  children: React.ReactNode;
}

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setLoading(true);
    setExiting(false);
    setDisplayChildren(children);

    const exitTimer = setTimeout(() => setExiting(true), 1100);
    const doneTimer = setTimeout(() => setLoading(false), 1800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div className={`fixed inset-0 z-[9998] bg-nearblack flex items-center justify-center ${exiting ? 'loading-overlay-exit' : ''}`}>
          <span className="font-bolsgi text-offwhite text-2xl md:text-3xl tracking-widest loading-wordmark">
            Coffee Concept Store
          </span>
        </div>
      )}
      {displayChildren}
    </>
  );
}
