"use client";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/icons";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  title: string;
  disc: string;
  isOauth?: boolean;
}

const FormModel: FC<FormProps> = ({
  className,
  title,
  disc,
  children,
  isOauth,
  ...props
}) => {
  return (
    <form
      className={cn(
        "flex flex-col gap-4 p-4 border-md shadow-md max-w-[600px] w-full min-w-[300px]",
        className
      )}
      {...props}
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="-mt-4 text-slate-600 font-medium">{disc}</p>
      <div>
        {isOauth ? (
          <>
            <div>
              <Button size={"lg"} text="Google" className="w-full ">
                <Icons.google className="mr-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative flex justify-center items-center bg-border h-[1px] w-full my-5">
              {/* <span className="bg-slate-800 "></span> */}
              <span className="absolute font-bold bg-white py-1 px-2 mb-px">
                Or continue with
              </span>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </form>
  );
};

export default FormModel;
