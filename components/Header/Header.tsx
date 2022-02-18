import { Email, GitHub, LinkedIn, Xing } from "./Icons";
import { ComponentPropsWithRef, forwardRef, JSXElementConstructor } from "react";

const Link = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<"a"> & { icon: JSXElementConstructor<{ className: string }> }>(
  function Link({ children, className, icon: Icon, ...props }, ref) {
    className ??=
      "flex flex-row items-center ml-6 text-gray-200 font-semibold no-underline hover:text-gray-100 hover:border-gray-100 border-b border-dotted border-transparent";
    return (
      <a ref={ref} rel="noreferrer" target="_blank" {...props} className={className}>
        <Icon className="inline mr-2 h-4 w-4" />
        {children}
      </a>
    );
  }
);

export default function Header() {
  return (
    <div className="flex flex-row items-center h-14 px-6 select-none justify-between">
      <div className="flex flex-row">
        <h1 className="text-l font-bold text-gray-200">Cedric Kring</h1>
        <div className="h-6 border-r-2 border-solid border-gray-200 ml-6" />
        <Link href="https://github.com/cedrickring" icon={GitHub}>
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/cedric-kring/" icon={LinkedIn}>
          LinkedIn
        </Link>
        <Link icon={Xing} href="https://www.xing.com/profile/Cedric_Kring">
          Xing
        </Link>
      </div>
      <Link
        icon={Email}
        href="mailto:cedric.kring@gmail.com"
        className="flex flex-row items-center text-indigo-900 font-semibold bg-gray-100 hover:bg-white hover:text-indigo-800 rounded px-2 py-1.5"
      >
        Contact me
      </Link>
    </div>
  );
}
