import type { ReactNode } from "react";

type ButtonType = {
  children:ReactNode;
  title:string;
  action?:()=>void
}

function Button({children,title,action}:ButtonType) {
  return (
    <div>
      <button onClick={action} className="flex items-center w-max py-2 px-3 rounded-md hover:bg-custom-gray transition-all">
        {children}
        <span>{title}</span>
      </button>
    </div>
  )
}

export default Button