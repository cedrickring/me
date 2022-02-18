import { Email, GitHub, LinkedIn, Xing } from "./Icons";

export default function Header() {
  return (
    <div className="flex flex-row items-center h-14 px-6 select-none justify-between">
      <div className="flex flex-row">
        <h1 className="text-l font-bold text-gray-200">Cedric Kring</h1>
        <div className="h-6 border-r-2 border-solid border-gray-200 ml-6" />
        <a
          target="_blank"
          href="https://github.com/cedrickring"
          className="flex flex-row items-center ml-6 text-gray-200 font-semibold no-underline hover:text-gray-100 hover:border-gray-100 border-b border-dotted border-transparent"
        >
          <GitHub className="inline mr-2 h-4 w-4" />
          GitHub
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/cedric-kring/"
          className="flex flex-row items-center ml-6 text-gray-200 font-semibold no-underline hover:text-gray-100 hover:border-gray-100 border-b border-dotted border-transparent"
        >
          <LinkedIn className="inline mr-2 h-4 w-4" />
          LinkedIn
        </a>
        <a
          target="_blank"
          href="https://www.xing.com/profile/Cedric_Kring"
          className="flex flex-row items-center ml-6 text-gray-200 font-semibold no-underline hover:text-gray-100 hover:border-gray-100 border-b border-dotted border-transparent"
        >
          <Xing className="inline mr-2 h-4 w-4" />
          Xing
        </a>
      </div>
      <a
        target="_blank"
        href="mailto:cedric.kring@gmail.com"
        className="flex flex-row items-center text-indigo-900 font-semibold bg-gray-100 hover:bg-white hover:text-indigo-800 rounded px-2 py-1.5"
      >
        <Email className="inline mr-2 h-5 w-5" />
        Contact me
      </a>
    </div>
  );
}
