export type BusinessButtonType = {
  image: string;
  name: 'market' | 'store' | 'food';
  active: 'market' | 'store' | 'food';
  setActive: (active: 'market' | 'store' | 'food') => void;
}