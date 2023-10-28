import { FC, FormEvent, FormHTMLAttributes, useEffect, useState } from "react";
import { Button } from "../ui/Button";
import FormModel from "@/models/form-model";
import FormInput from "./FormInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { forgetPass } from "@/slices/forgotPass/forgetPasswordAction";
import Loader from "../Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface ForgotPassProps extends FormHTMLAttributes<HTMLFormElement> {}

const ForgotPass: FC<ForgotPassProps> = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, success, msg } = useAppSelector(
    (state) => state.forgetPassword
  );

  const [email, setemail] = useState<string>("");

  const handleForgetPass = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (!email) {
      return toast.error("Email is required!!");
    }
    formData.append("email", email);
    dispatch(forgetPass(formData));
  };

  useEffect(() => {
    if (success && msg) {
      toast.success(msg);
      navigate("/resset-password");
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
      title="Forgot Password"
      disc="There will be a code sent to your email..."
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
        // error={erros?.email}
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

export default ForgotPass;
