import { ReactNode, FC, useState } from "react";

interface UnderlinedProps {
  children: ReactNode;
  className?: string;
}

const Underlined: FC<UnderlinedProps> = ({ children, className }) => {
  let [underlined, setUnderlined] = useState(false);

  return (
    <div
      className={`relative w-fit ${className}`}
      onMouseEnter={() => setUnderlined(true)}
      onMouseLeave={() => setUnderlined(false)}
    >
      {children}
      <span
        style={{
          transform: underlined ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute h-0.5 w-full -bottom-1 left-0 rounded-md bg-slate-800 origin-left transition-transform duration-300 ease-out"
      ></span>
    </div>
  );
};

export default Underlined;
