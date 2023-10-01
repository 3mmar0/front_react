"use client";
import FormModel from "@/models/form-model";
import { FC, useState, useEffect, FormHTMLAttributes, FormEvent } from "react";
import FormInput from "./FormInput";
import { Button } from "../ui/Button";
import Loader from "../Loader";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import toast from "react-hot-toast";
import { UserData } from "@/lib/types";
import { registerUser } from "@/slices/reg/registerAction";

interface RegFormProps extends FormHTMLAttributes<HTMLFormElement> {
  //   onSubmit: (email: string, password: string) => void;
}

type err = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
};

const RegForm: FC<RegFormProps> = ({ className }) => {
  const { loading, success, msg, errors } = useAppSelector(
    (state) => state.register
  );
  const dispatch = useAppDispatch();

  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [first_name, setfirst_name] = useState<string>("");
  const [last_name, setlast_name] = useState<string>("");
  const [erros, seterros] = useState<err>();

  const fetchData = async (data: UserData, e: FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (success === true && msg) {
      toast.success(msg);
      window.location = "/";
    }
    if (success === false && msg) {
      toast.error(msg);
    }
    if (errors) {
      seterros(errors);
    }
  }, [success, msg, errors]);

  if (loading) {
    return <Loader />;
  }

  return (
    <FormModel
      onSubmit={(e) => fetchData({ email, password, first_name, last_name }, e)}
      title="Register Page"
      disc="Create new account"
      className={className}
    >
      <FormInput
        label="first_name"
        name="first_name"
        type="text"
        placeholder=""
        value={first_name}
        onChange={(e) => setfirst_name(e.target.value)}
        error={erros?.first_name}
        // required
      />
      <FormInput
        label="last_name"
        name="last_name"
        type="text"
        placeholder=""
        value={last_name}
        onChange={(e) => setlast_name(e.target.value)}
        error={erros?.last_name}
        // required
      />
      <FormInput
        label="email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        error={erros?.email}
        // required
      />
      <FormInput
        label="password"
        name="password"
        type="password"
        placeholder="*******"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        error={erros?.password}
        // required
      />

      <Button
        type="submit"
        className="mt-3"
        variant={"outline"}
        text="Sign Up"
      />
    </FormModel>
  );
};

export default RegForm;
