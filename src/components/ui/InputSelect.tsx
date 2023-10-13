import { FC, SelectHTMLAttributes } from "react";
import Label from "./Label";
import { cn } from "@/lib/utils";

interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name?: string;
  label?: string;
  options?: {
    name: string;
    val: string;
  }[];
  error?: string;
}

const InputSelect: FC<InputSelectProps> = ({
  name,
  label,
  options,
  error,
  ...props
}) => {
  const onErr = error ? "block" : "hidden";
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <select
        className="px-2 py-2 border border-border/50 rounded-md flex items-center w-full"
        name={name}
        id={name}
        {...props}
      >
        <option hidden>Select {label}</option>
        {options?.map((e) => (
          <option value={e.val}>{e.name}</option>
        ))}
      </select>
      <span className={cn(onErr, "text-red-700 text-[13px] font-semibold")}>
        *{error}
      </span>
    </div>
  );
};

export default InputSelect;