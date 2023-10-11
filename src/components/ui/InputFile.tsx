import { FC, InputHTMLAttributes } from "react";
import Label from "./Label";
import { cn } from "@/lib/utils";

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  error?: string;
}

const InputFile: FC<InputFileProps> = ({ name, label, error, ...props }) => {
  const onErr = error ? "block" : "hidden";
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <input
        className="p-4 cursor-pointer border-2 border-slate-400 border-dashed w-full"
        type="file"
        name={name}
        id={name}
        {...props}
      />
      <span className={cn(onErr, "text-red-700 text-[13px] font-semibold")}>
        *{error}
      </span>
    </div>
  );
};

export default InputFile;
