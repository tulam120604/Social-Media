import { Link } from "react-router-dom";
import { useViewProfileQuery } from "../../../redux/sliceApis/auth";
import { LoaderCircle } from "lucide-react";
import { matchEmail } from "../../../utils/mathEmail";

export default function Suggest_for_you() {
  const { data, isLoading, isError } = useViewProfileQuery(undefined, {});

  return (
    <div>
      {/* profile */}
      <>
        {isLoading && (
          <div className="grid place-content-center gap-x-3 my-4 p-2 w-full h-full">
            <LoaderCircle className=" animate-spin" />
          </div>
        )}
        {!isLoading && !isError && (
          <Link
            className="flex gap-x-3 items-center whitespace-nowrap opacity-95 py-3 duration-150 rounded-md mb-1"
            to={`/profile/${data?.data?.data?._id}`}
          >
            <img
              src={
                data?.data?.data?.picture
                  ? data?.data?.data?.picture
                  : "https://picsum.photos/320/180"
              }
              alt=""
              className="rounded-full w-12 h-12 object-cover border-none"
            />
            <div className="flex flex-col">
              <span>{data?.data?.data?.userName}</span>
              <span className="opacity-85 text-sm">{matchEmail(data?.data?.data?.email)}</span>
            </div>
          </Link>
        )}
      </>

      {/* suggest friends */}
      <div className=" text-sm flex justify-between items-center my-2">
      <span className="opacity-80">Suggested for you</span>
      <Link to={''}>See all</Link>
      </div>
    </div>
  );
}
