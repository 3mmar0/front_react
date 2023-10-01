import { cn } from "@/lib/utils";
import { FC, LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<LabelProps> = ({ className, htmlFor, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm capitalize font-semibold leading-none", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
