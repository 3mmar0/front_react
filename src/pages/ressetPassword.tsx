import RessetPass from "@/components/form/RessetPass";
import MetaDate from "@/lib/metaDate";
import { FC } from "react";

interface ressetPasswordProps {}

const RessetPassword: FC<ressetPasswordProps> = () => {
  return (
    <div className="contain">
      <MetaDate ttl="Resset Password - page" disc="The resset password page" />
      <RessetPass className="flex-col" />
    </div>
  );
};

export default RessetPassword;
