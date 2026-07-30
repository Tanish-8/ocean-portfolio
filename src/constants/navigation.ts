export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  targetDepth: number;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home', targetDepth: 0 },
  { id: 'about', label: 'About', href: '#about', targetDepth: 25 },
  { id: 'skills', label: 'Skills', href: '#skills', targetDepth: 80 },
  { id: 'projects', label: 'Projects', href: '#projects', targetDepth: 180 },
  { id: 'experience', label: 'Experience', href: '#experience', targetDepth: 350 },
  { id: 'achievements', label: 'Achievements', href: '#achievements', targetDepth: 600 },
  { id: 'contact', label: 'Contact', href: '#contact', targetDepth: 900 },
];
