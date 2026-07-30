export interface UseScrollResult {
  scrollY: number;
  scrollProgress: number;
  direction: 'up' | 'down' | 'idle';
  isScrolling: boolean;
}

export const useScroll = (): UseScrollResult => {
  // Placeholder hook returning default scroll state
  return {
    scrollY: 0,
    scrollProgress: 0,
    direction: 'idle',
    isScrolling: false,
  };
};

export default useScroll;
