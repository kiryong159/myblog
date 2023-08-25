export default function HomeBox({ name }) {
  return (
    <div className="flex flex-col bg-red-300 rounded-md p-3 w-1/2 h-full space-y-2">
      <div className="flex bg-white w-full h-[100px] p-1 ">
        <div className="flex h-full ">IMG</div>
      </div>
      <span className="p-1 text-center font-bold">{name}</span>
    </div>
  );
}

//디자인중
