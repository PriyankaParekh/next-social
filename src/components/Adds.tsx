import Image from "next/image";

const Adds = ({size}:{size: "sm" | "md" | "lg"}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm ">
          {/* TOP */}
          <div className="flex items-center justify-between text-gray-500 font-medium">
            <span>Sponsored Ads</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#686868" d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>
     
          </div>
          {/* BOTTOM */}
          <div
            className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
          >
            <div
              className={`relative w-full ${
                size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
              }`}
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1722111091429-dd3dc55979d3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1722111091429-dd3dc55979d3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={24}
                height={24}
                className="rounded-full w-6 h-6 object-cover"
              />
              <span className="text-teal-800 font-medium">BigChef Lounge</span>
            </div>
            <p className={size === "sm" ? "text-xs" : "text-sm"}>
              {size === "sm"
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                : size === "md"
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
            <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
              Learn more
            </button>
          </div>
        </div>
      );
  }
  
  export default Adds
  