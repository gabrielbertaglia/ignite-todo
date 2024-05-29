import { PlusCircle } from "@phosphor-icons/react";

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button>
      {children}&ensp;
      <PlusCircle weight="bold" size={16} />
    </button>
  );
}
