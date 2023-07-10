import type { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <>
      <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
        <input
          type="text"
          required
          placeholder="Username"
          className="required:bg-yellow-500 invalid:bg-red-500 valid:bg-teal-500"
        />
        <input type="password" required placeholder="Password" />
        <input type="submit" value="Login" className="bg-white" />
      </form>

      <form className="flex flex-col space-y-2 p-5">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer border-gray-400 rounded-md"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
          {/* block: 혼자 한 줄 차지 */}
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
    </>
  );
};

export default Form;
