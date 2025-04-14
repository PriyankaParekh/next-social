import Image from "next/image";
import Link from "next/link";

const UserInfo = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {/* {currentUserId === user.id ? (
            <UpdateUser user={user}/>
          ) : ( */}
        <Link href="/" className="text-teal-700 text-xs">
          See all
        </Link>
        {/* )} */}
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {" "}
            {/* {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username} */}
            pri
          </span>
          <span className="text-sm">@pri</span>
        </div>
        {/* {user.description && <p>{user.description}</p>}
          {user.city && ( */}
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>ahmedabad</b>
          </span>
        </div>
        {/* )} */}
        {/* {user.school && ( */}
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>K.R.Raval</b>
          </span>
        </div>
        {/* )} */}
        {/* {user.work && ( */}
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>india</b>
          </span>
        </div>
        {/* )} */}
        <div className="flex items-center justify-between">
          {/* {user.website && ( */}
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="#" className="text-teal-600 font-medium">
              {/* {user.website} */}test
            </Link>
          </div>
          {/* )} */}
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined Dec 27</span>
          </div>
        </div>

        <>
          <form>
            <button className="w-full bg-teal-700 text-white text-sm rounded-md p-2">
              Follow
            </button>
          </form>
          <form className="self-end ">
            <button>
              <span className="text-red-400 text-xs cursor-pointer">
                Block User
              </span>
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default UserInfo;
