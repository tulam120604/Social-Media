/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useParams } from "react-router-dom";
import { Loading_overlay } from "../../../components/loading";
import ReloadPage from "../../../components/reloadPage";
import {
  useCountFriendQuery,
  useViewUserByIdQuery,
} from "../../../redux/sliceApis/auth";

function Profile_desktop({
  data,
  countFriend,
}: {
  data: any;
  countFriend: any;
}) {
  const matchEmail = (text: string | undefined) => {
    const match = text?.match(/(@[^.]+)\./);
    if (match) {
      const result = match[1];
      return result;
    }
    return undefined;
  };
  return (
    <div
      className={`hidden lg:flex w-full items-center space-x-10 px-10 py-5 border-b`}
    >
      {/* avatar */}
      <img
        src={
          data?.data?.data?.picture
            ? data?.data?.data?.picture
            : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        }
        alt=""
        className="rounded-full w-[150px] h-[150px] object-cover border border-transparent"
      />
      {/* infor */}
      <div className="flex flex-col">
        <span className="text-xl">{data?.data?.data?.userName}</span>
        <span className="opacity-80">
          {matchEmail(data?.data?.data?.email)}
        </span>
        <button
          className={`rounded bg-[#0866FF] text-gray-100 px-4 py-1.5 cursor-pointer 
            opacity-90 hover:opacity-100 duration-200 text-sm my-2`}
          type="button"
          //   onClick={() =>
          //     handleFriendRequest({
          //       senderId: item?.senderId?._id,
          //       status: "accepted",
          //     })
          //   }
        >
          Edit profile
        </button>
        {/* follow */}
        <span className="opacity-80">{countFriend?.data?.data} followers</span>
      </div>
    </div>
  );
}

// mobile
function Profile_mobile({
  data,
  countFriend,
}: {
  data: any;
  countFriend: any;
}) {
  const matchEmail = (text: string | undefined) => {
    const match = text?.match(/(@[^.]+)\./);
    if (match) {
      const result = match[1];
      return result;
    }
    return undefined;
  };
  return (
    <div
      className={`grid place-content-center lg:hidden w-full px-10 py-5 border-b`}
    >
      {/* avatar */}
      <img
        src={
          data?.data?.data?.picture
            ? data?.data?.data?.picture
            : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        }
        alt=""
        className="rounded-full w-[150px] h-[150px] object-cover border border-transparent"
      />
      {/* infor */}
      <div className="w-full flex flex-col text-center">
        <span className="text-xl">{data?.data?.data?.userName}</span>
        <span className="opacity-80">
          {matchEmail(data?.data?.data?.email)}
        </span>
        <button
          className={`rounded bg-[#0866FF] text-gray-100 px-4 py-1.5 cursor-pointer 
            opacity-90 hover:opacity-100 duration-200 text-sm my-2`}
          type="button"
          //   onClick={() =>
          //     handleFriendRequest({
          //       senderId: item?.senderId?._id,
          //       status: "accepted",
          //     })
          //   }
        >
          Edit profile
        </button>
        {/* follow */}
        <span className="opacity-80">{countFriend?.data?.data} followers</span>
      </div>
    </div>
  );
}

export default function Infor_profile() {
  const {id} = useParams();
  const { data, isLoading, isError } = useViewUserByIdQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const { data: countFriend, isLoading: loading_countFriend } =
    useCountFriendQuery(undefined, {
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });
  return (
    <div className="w-full relative">
      {/* desktop */}
      {isLoading || (loading_countFriend && <Loading_overlay />)}
      {!isLoading && !isError && (
        <Profile_desktop data={data} countFriend={countFriend} />
      )}
      {!isLoading && !isError && (
        <Profile_mobile data={data} countFriend={countFriend} />
      )}
      {isError && (
        <div className="flex gap-x-1">
          <span>Lỗi!</span>
          <ReloadPage />
        </div>
      )}
    </div>
  );
}
