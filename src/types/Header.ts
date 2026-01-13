import type { ReactNode } from "react";

export type BusinessButtonType = {
  image: string;
  name: 'market' | 'store' | 'food';
  active: 'market' | 'store' | 'food';
  setActive: (active: 'market' | 'store' | 'food') => void;
}

export type PopupProps = {
  open:boolean;
  title:string;
  setOpen:(open:boolean)=>void;
  children:ReactNode;
}

export type InputProp = {
  label:string;
  type:string;
  defaultValue?:string;
  name:string;
  onChange:()=>void;
}