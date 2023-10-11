import { FC, HTMLAttributes } from "react";
import Breadcamp from "./Breadcamp";
import { cn } from "@/lib/utils";

interface DashboardContainerProps extends HTMLAttributes<HTMLDivElement> {
  ttl?: string;
  links?: object[];
}

const DashboardContainer: FC<DashboardContainerProps> = ({
  ttl,
  links,
  className,
  children,
}) => {
  return (
    <div className="p-4 flex-1 w-full">
      <Breadcamp ttl={ttl} links={links} />
      <div className={cn(className, "grid")}>{children}</div>
    </div>
  );
};

export default DashboardContainer;
