import type { NextPage } from "next";

const Selectors: NextPage = () => {
  return (
    <>
      <div className="block space-y-2 p-5">
        <details>
          <summary className="cursor-pointer">What's your fav food?</summary>
          <span className="bg-purple-300 selection:bg-indigo-300 selection:text-white">
            냠
          </span>
        </details>
        <details className="select-none open:text-pink-300 open:bg-slate-300">
          <summary className="cursor-pointer">What's your fav food?</summary>
          <span className="selection:bg-indigo-300 selection:text-white">
            냠
          </span>
        </details>
      </div>

      <div className="flex flex-col space-y-2 p-5">
        <ul className="list-disc marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
        <ul className="list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-2 p-5">
        <input
          type="file"
          className="file:cursor-pointer file:hover:text-purple-400 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-300"
        ></input>
      </div>

      <div className="flex flex-col space-y-2 p-5">
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
          Hello everyone!
        </p>
      </div>
    </>
  );
};

export default Selectors;
