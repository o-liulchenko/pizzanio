import { FC, ReactNode, useState } from "react";

interface DropdownComponentProps {
  children: ReactNode[];
}

const DropdownComponent: FC<DropdownComponentProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative cursor-pointer"
    >
      <div>{children[0]}</div>
      <div
        className="absolute origin-top"
        style={{
          transform: open ? "scaleY(1)" : "scaleY(-5%)",
          opacity: open ? "1" : "0",
          transition: "transform 200ms ease-in-out, opacity 150ms ease-in-out",
        }}
      >
        {children.slice(1)}
      </div>
    </div>
  );
};

export default DropdownComponent;
