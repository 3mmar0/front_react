import { FC, InputHTMLAttributes } from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput: FC<FormInputProps> = ({
  name,
  type,
  label,
  error,
  ...props
}) => {
  const onErr = error ? "block" : "hidden";
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        className={error ? "ring-red-500 border-red-500 ring-1" : ""}
        name={name}
        type={type}
        id={name}
        {...props}
      />
      <span className={cn(onErr, "text-red-700 text-[13px] font-semibold")}>
        *{error}
      </span>
    </div>
  );
};

export default FormInput;
