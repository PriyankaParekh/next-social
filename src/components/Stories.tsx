import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <p className="text-sm font-semibold">Your Story</p>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/19/09/17/tree-3092026_1280.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <p className="text-sm font-semibold">Pri</p>
        </div>

        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/19/09/17/tree-3092026_1280.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <p className="text-sm font-semibold">Pri</p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/19/09/17/tree-3092026_1280.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <p className="text-sm font-semibold">Pri</p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/19/09/17/tree-3092026_1280.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <p className="text-sm font-semibold">Pri</p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/19/09/17/tree-3092026_1280.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <p className="text-sm font-semibold">Pri</p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
