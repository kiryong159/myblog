import Image from "next/image";
import Link from "next/link";

export default function HomeBox({
  name1,
  name2,
  src1,
  src2,
  link1,
  link2,
  isDark,
}) {
  return (
    <div className="flex items-center justify-center space-x-3 w-full max-h-[160px] h-full  ">
      <div
        className={`flex flex-col items-center  rounded-md shadow-md p-3 w-1/2 max-h-[160px] h-full  space-y-2 ${
          isDark ? "bg-purple-300" : "bg-purple-200"
        }`}
      >
        <Link
          className={`flex  p-1 justify-center items-center h-[100px]  max-h-[100px] rounded-md shadow-md ${
            isDark ? "bg-gray-100" : "bg-white"
          }`}
          href={`${link1}`}
          prefetch={false}
          target="_blank"
        >
          <Image
            className="p-2 h-full max-h-[100px]  "
            src={`${src1}`}
            alt={`${name1}`}
            width={400}
            height={90}
          />
        </Link>
        <span className="flex h-1/4 p-1 items-center justify-center font-bold text-lg">
          {name1}
        </span>
      </div>
      <div
        className={`flex flex-col items-center  rounded-md shadow-md p-3 w-1/2 max-h-[160px] h-full  space-y-2 ${
          isDark ? "bg-purple-300" : "bg-purple-200"
        }`}
      >
        <Link
          className={`flex  p-1 justify-center items-center h-[100px]  max-h-[100px] rounded-md shadow-md ${
            isDark ? "bg-gray-100" : "bg-white"
          }`}
          href={`${link2}`}
          prefetch={false}
          target="_blank"
        >
          <Image
            className="p-2 h-full max-h-[100px]"
            src={`${src2}`}
            alt={`${name2}`}
            width={400}
            height={90}
          />
        </Link>
        <span className="flex h-1/4 p-1 items-center justify-center font-bold text-lg ">
          {name2}
        </span>
      </div>
    </div>
  );
}

//디자인중
