import { useEffect } from 'react';

export default function useOnClickOutside(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void
): void {
  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget as Node;
    if (ref.current && !ref.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
