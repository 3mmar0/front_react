import { cn } from "@/lib/utils";
import { FC, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input: FC<InputProps> = ({ className, type, icon, ...props }) => {
  return (
    <div className="relative flex items-center w-full">
      <input
        className={cn(
          "flex h-9 w-full rounded-md border border-border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        type={type}
        {...props}
      />
      {icon ? (
        <div className="absolute text-slate-700 cursor-pointer shadow text-xl active:scale-95 top-1 right-[6px] bg-slate-200 flex items-center justify-center rounded-md w-[33px] h-[28px] ">
          {icon}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
