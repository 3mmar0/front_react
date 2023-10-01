"use client";
import FormModel from "@/models/form-model";
import { FC, useState, useEffect, FormHTMLAttributes, FormEvent } from "react";
import FormInput from "./FormInput";
import { Button } from "../ui/Button";
import Loader from "../Loader";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginUser } from "@/slices/login/loginAction";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginFormProps extends FormHTMLAttributes<HTMLFormElement> {
  //   onSubmit: (email: string, password: string) => void;
}

type err = {
  email?: string;
  password?: string;
};

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { loading, success, msg, errors } = useAppSelector(
    (state) => state.login
  );
  const dispatch = useAppDispatch();

  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [erros, seterros] = useState<err>();

  const fetchData = async (email: string, password: string, e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
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
      onSubmit={(e) => fetchData(email, password, e)}
      title="Sign In"
      disc="Continue to your store"
      className={className}
    >
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
        text="Sign In"
      />
      <Link to={"/register"}>
        <p className="text-sm font-semibold text-blue-800 underline">
          Don't have an account? Sign Up
        </p>
      </Link>
    </FormModel>
  );
};

export default LoginForm;
