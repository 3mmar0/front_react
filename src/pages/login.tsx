import LoginForm from "@/components/form/LoginForm";
import MetaDate from "@/lib/metaDate";
import { FC } from "react";

interface loginProps {}

const login: FC<loginProps> = () => {
  return (
    <div className="flex-1 grid p-4 place-items-center">
      <MetaDate ttl="Login - page" disc="The login page" />
      <LoginForm className="flex-col" />
    </div>
  );
};

export default login;
