import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: number;
}

function SidebarButton({ title, icon, ...props }: ButtonProps) {
  return (
    <button {...props} className="Sidebar__button">
      <span data-icon={String.fromCharCode(icon)} />
      <p>{title}</p>
    </button>
  );
}

export default SidebarButton;
