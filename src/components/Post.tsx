import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
        <Image
          src="https://media.istockphoto.com/id/1351763219/photo/crystal-cove-state-park-sky-fire.webp?b=1&s=170667a&w=0&k=20&c=mJEFZ68eUauueOHxlGRbBQZ-F0J-FwMXLWGqs5a0LAk="
          alt=""
          width={40}
          height={40}
          className="w-8 h-8 rounded-full"
        />
          <span className="font-medium">pri</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#686868" d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {/* {post.img && ( */}
        <div className="w-full min-h-96 relative">
          <Image
            src="https://media.istockphoto.com/id/175633219/photo/bangalore-or-bengalurucity-scape-with-green-trees-on-foreground.jpg?s=612x612&w=0&k=20&c=XoRqItFjHC4UxbiQ-Pa6EkQ7_Tkm-THhhBL7SX8GtfE="
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        {/* )} */}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum
          assumenda velit porro molestiae alias nobis incidunt eveniet hic, sed
          quidem voluptatum labore quaerat molestias quia fugit voluptatibus!
          Deleniti molestiae et ducimus, ipsa sint assumenda tenetur quasi,
          veritatis nisi saepe maiores laborum ex illo doloremque odit eius
          obcaecati dolorum mollitia.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <form action="">
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#115E59" fill-rule="evenodd" d="M12.438 2.778a.596.596 0 0 0-.438.03a.515.515 0 0 0-.28.33l-.476 1.834a8.378 8.378 0 0 1-.72 1.844c-.485.907-1.218 1.604-1.898 2.19l-1.438 1.24a.918.918 0 0 0-.315.774l.812 9.393a.916.916 0 0 0 .911.837h4.649c3.136 0 5.779-2.182 6.286-5.113l.705-4.08a.916.916 0 0 0-.901-1.073h-5.181c-.977 0-1.72-.876-1.562-1.84l.663-4.044a4.03 4.03 0 0 0-.076-1.664a.885.885 0 0 0-.596-.611zl.23-.714zm-1.09-1.321a2.096 2.096 0 0 1 1.549-.107l.145.047l-.23.714l.23-.714c.777.25 1.383.87 1.589 1.662c.193.746.229 1.524.104 2.284l-.663 4.044a.083.083 0 0 0 .082.097h5.18c1.5 0 2.636 1.352 2.38 2.829l-.705 4.08c-.638 3.688-3.938 6.357-7.764 6.357H8.596a2.416 2.416 0 0 1-2.405-2.208l-.813-9.393a2.418 2.418 0 0 1 .83-2.04l1.44-1.24c.655-.564 1.206-1.111 1.552-1.76a6.83 6.83 0 0 0 .592-1.514l.476-1.833a2.014 2.014 0 0 1 1.08-1.305m-8.38 8.028a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.75" clip-rule="evenodd"/></svg>
              </button>
            </form>
            <span className="text-gray-300">|</span>
            <span className="text-teal-800">
              100
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#115E59" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zm16 14l-4-4H4q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4zM4 16h14.85L20 17.125V4H4zm0 0V4z"/></svg>
            <span className="text-gray-300">|</span>
            <span className="text-teal-800">
              5<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#115E59" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"/></svg>
            <span className="text-gray-300">|</span>
            <span className="text-teal-800">
              <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
          <Comments />
          <hr />

    </div>
  );
};

export default Post;
