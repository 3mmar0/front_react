import LoginForm from "@/components/form/LoginForm";
import MetaDate from "@/lib/metaDate";

const login = () => {
  return (
    <div className="flex-1 mt-[70px] grid p-4 place-items-center">
      <MetaDate ttl="Login - page" disc="The login page" />
      <LoginForm className="flex-col" />
    </div>
  );
};

export default login;
