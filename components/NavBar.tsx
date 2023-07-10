import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className="bg-white p-6 font-semibold text-3xl text-gray-500 flex space-x-5">
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Index</a>
        </Link>
        <Link href="/practice/test">
          <a className={router.pathname === "/test" ? "active" : ""}>Test</a>
        </Link>
        <Link href="/practice/form">
          <a className={router.pathname === "/form" ? "active" : ""}>Form</a>
        </Link>
        <Link href="/practice/selectors">
          <a className={router.pathname === "/selectors" ? "active" : ""}>
            Selectors
          </a>
        </Link>
      </div>
    </nav>
  );
}
