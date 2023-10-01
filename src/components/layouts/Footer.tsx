import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="p-4 bg-slate-900 text-slate-50 flex items-center justify-center font-semibold text-xl">
      Footer
    </div>
  );
};

export default Footer;
