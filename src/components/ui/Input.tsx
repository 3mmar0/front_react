import { cn } from "@/lib/utils";
import { FC, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: ReactNode;
  sufixIcon?: ReactNode;
}

const Input: FC<InputProps> = ({
  className,
  type,
  prefixIcon,
  sufixIcon,
  ...props
}) => {
  return (
    <div className="px-3 border border-border/50 rounded-md flex items-center w-full">
      {prefixIcon ? prefixIcon : ""}
      <input
        className={cn(
          "flex w-full outline-none bg-transparent px-3 py-1 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        type={type}
        {...props}
      />
      {sufixIcon ? sufixIcon : ""}
    </div>
  );
};

export default Input;
