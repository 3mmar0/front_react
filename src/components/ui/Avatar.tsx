import {
  ClassAttributes,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import ProfileImg from "./ProfileImg";
import Cookies from "universal-cookie";
import UserCard from "./UserCard";
import { userCartLinks } from "@/lib/data";
const cookies = new Cookies();
const user = cookies.get("user");

interface AvatarProps
  extends ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement> {}

const Avatar: FC<AvatarProps> = () => {
  const [open, setopen] = useState<boolean>(false);

  const userCard = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    cookies.remove("user");
    cookies.remove("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const closeCard = (e: MouseEvent) => {
      console.log(e);
      if (!userCard?.current?.contains(e.target)) {
        setopen(false);
      }
    };

    document.body.addEventListener("mousedown", closeCard);
    return () => {
      document.body.removeEventListener("mousedown", closeCard);
    };
  }, []);
  return (
    <div ref={userCard}>
      <ProfileImg
        onClick={() => setopen(!open)}
        img={user?.image}
        text={user?.first_name}
        link={user?.id ? null : "/login"}
      />
      {open && user?.id ? (
        <UserCard data={userCartLinks} onclick={handleLogout} user={user} />
      ) : null}
    </div>
  );
};

export default Avatar;
