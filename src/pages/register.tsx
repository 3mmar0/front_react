import RegForm from "@/components/form/RegForm";
import MetaDate from "@/lib/metaDate";
import { FC } from "react";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  return (
    <div className="flex-1 grid p-4 place-items-center">
      <MetaDate ttl="Register - page" disc="The Register page" />
      <RegForm className="flex-col" />
    </div>
  );
};

export default Register;
