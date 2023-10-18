import ForgotPass from "@/components/form/ForgotPass";
import MetaDate from "@/lib/metaDate";
import { FC } from "react";

interface fotgetPasswordProps {}

const FotgetPassword: FC<fotgetPasswordProps> = () => {
  return (
    <div className="contain">
      <MetaDate ttl="Forget Password - page" disc="The forget password page" />
      <ForgotPass className="flex-col" />
    </div>
  );
};

export default FotgetPassword;
