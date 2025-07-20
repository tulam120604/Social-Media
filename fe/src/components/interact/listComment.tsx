/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useListCommentQuery } from "../../redux/sliceApis/post";

export default function ListComment_component({ idPost }: any) {
  const [limit, setLimit] = useState<number>(5);
  const { data, isLoading, isError } = useListCommentQuery({
    page: 1,
    limit,
    postId: idPost,
  });
  return (
    <>
      {(!isError || !isLoading) &&
        data?.data?.data &&
        data.data?.data?.map((item: any) => (
          <div className="flex gap-x-2 my-2">
            {/* avatar */}
            <img
              src={
                item?.id_account?.picture
                  ? item?.id_account?.picture
                  : "https://picsum.photos/320/180"
              }
              alt=""
              className="w-8 h-8 rounded-full border"
            />
            {/* name & comment */}
            <div
              className="w-full dark:bg-[#252728] bg-[#F0F2F5] 
              flex flex-col gap-y-0.5 rounded-xl px-3 py-2"
            >
              <span>{item?.id_account?.userName}</span>
              <span className="text-sm opacity-80">{item?.content}</span>
            </div>
          </div>
        ))}

      {/* show more */}
      {data?.data?.pagination && data?.data?.pagination?.totalPage > 1 && (
        <div
          className="w-full flex justify-center"
          onClick={() => setLimit((pre) => pre + 5)}
        >
          <button type="button" className="text-sm text-center cursor-pointer">
            Show more
          </button>
        </div>
      )}
    </>
  );
}
