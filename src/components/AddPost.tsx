import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="#ccc" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form className="flex gap-4 items-end">
          <textarea
            placeholder="Add Your New Post Here..."
            className="flex-1 bg-slate-100 rounded-lg p-2 text-teal-800"
            name="desc"
            rows={4}
            cols={10}
            // onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            {/* <AddPostButton /> */}
          </div>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div
            className="flex items-center gap-2 cursor-pointer"
            // onClick={() => open()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#115E59"
                d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86l-3 3.87L9 13.14L6 17h12z"
              />
            </svg>
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#115E59"
                  d="M20 3a2 2 0 0 1 1.995 1.85L22 5v14a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zm0 2H4v14h16zm-9.66 2.638l.518.23l.338.16l.387.19l.43.218l.47.25l.507.28l.266.152l.518.305l.474.292l.43.273l.38.253l.48.33l.364.263l.095.07a1.234 1.234 0 0 1 0 1.98l-.323.235l-.44.308l-.356.239l-.405.263l-.453.283l-.499.3l-.534.309l-.509.282l-.471.25l-.43.22l-.386.188l-.622.288l-.23.1a1.234 1.234 0 0 1-1.714-.99l-.058-.565l-.032-.374l-.042-.664l-.023-.508l-.015-.555l-.004-.294l-.002-.305q0-.31.006-.6l.015-.555l.023-.507l.027-.457l.03-.401l.075-.744a1.235 1.235 0 0 1 1.715-.992m.611 2.501l-.436-.218l-.029.487l-.022.551l-.013.61l-.002.325l.002.325l.013.609l.01.283l.026.52l.015.235l.434-.218l.487-.256l.535-.294l.284-.162l.551-.326l.494-.306l.436-.28l.196-.13l-.407-.27l-.466-.294a30 30 0 0 0-.803-.48l-.283-.161l-.534-.294z"
                />
              </g>
            </svg>{" "}
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#115E59" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#115E59"
                d="M14.5 18q-1.05 0-1.775-.725T12 15.5t.725-1.775T14.5 13t1.775.725T17 15.5t-.725 1.775T14.5 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z"
              />
            </svg>
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
