import Link from "next/link";

// 네비 왼쪽위 부분
export default function Info({ isDark }) {
  return (
    <div
      className={`grid  md:grid-cols-1 xl:grid-cols-2 sm:h-60 xl:h-40 h-72 rounded-md p-3 text-center items-center `}
    >
      <Link
        className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all"
        href="/profile"
      >
        프로필
      </Link>
      <Link
        className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all"
        href="/create"
      >
        제작 도움
      </Link>
      <Link
        className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all"
        href="/create"
      >
        제작 도움
      </Link>
      <Link
        className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all"
        href="/create"
      >
        제작 도움
      </Link>
      <Link
        className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all"
        href="/create"
      >
        제작 도움
      </Link>
      <Link
        className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all"
        href="/create"
      >
        제작 도움
      </Link>
    </div>
  );
}
