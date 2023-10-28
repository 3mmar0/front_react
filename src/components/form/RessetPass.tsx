import { FC, FormEvent, FormHTMLAttributes, useEffect, useState } from "react";
import { Button } from "../ui/Button";
import FormModel from "@/models/form-model";
import FormInput from "./FormInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ressetPass } from "@/slices/forgotPass/forgetPasswordAction";
import Loader from "../Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface RessetPassProps extends FormHTMLAttributes<HTMLFormElement> {}

const RessetPass: FC<RessetPassProps> = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, success, msg, errors } = useAppSelector(
    (state) => state.ressetPassword
  );

  const [email, setemail] = useState<string>("");
  const [otp, setotp] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [open, setopen] = useState<boolean>(false);

  const handleForgetPass = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (!email) {
      return toast.error("Email is required!!");
    }
    formData.append("email", email);
    formData.append("otp", otp);
    formData.append("password", password);
    dispatch(ressetPass(formData));
  };

  useEffect(() => {
    if (success && msg) {
      toast.success(msg);
      navigate("/login");
    }
    if (!success && msg) {
      toast.error(msg);
    }
  }, [msg, success, navigate]);

  if (loading) {
    return <Loader />;
  }
  return (
    <FormModel
      onSubmit={(e) => handleForgetPass(e)}
      title="Resset Password"
      disc="Enter Your Email and the code that was sent to that email..."
      className={className}
      isOauth={false}
    >
      <FormInput
        label="email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        error={errors?.email}
        required
      />
      <FormInput
        type="number"
        label="otp"
        name="otp"
        placeholder="123456"
        value={otp}
        onChange={(e) => setotp(e.target.value)}
        error={errors?.otp}
        required
      />
      <FormInput
        type={open ? "text" : "password"}
        label="password"
        name="password"
        placeholder="**********"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        error={errors?.password}
        sufixIcon={
          !open ? (
            <FaEye
              className="ml-2 cursor-pointer text-slate-700"
              onClick={() => setopen(!open)}
            />
          ) : (
            <FaEyeSlash
              className="ml-2 cursor-pointer text-slate-700"
              onClick={() => setopen(!open)}
            />
          )
        }
        required
      />

      <Button
        type="submit"
        className="mt-3"
        variant={"outline"}
        text="Submit"
      />
    </FormModel>
  );
};

export default RessetPass;
