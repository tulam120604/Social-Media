/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoaderCircle } from "lucide-react";
import ReloadPage from "../../../components/reloadPage";
import BoxSocialPost_component from "../../../components/socialPost/boxSocialPost";
import { useListPostQuery } from "../../../redux/sliceApis/post";

export default function ListPost_component() {
  const { data, isLoading, isError } = useListPostQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  return (
    <div className="w-full h-full !bg-transparent !p-0">
      {isLoading && (
        <div className="grid place-content-center p-2 w-full">
          <LoaderCircle className="animate-spin" />
        </div>
      )}
      <div className="space-y-4 *:rounded">
        {!isLoading &&
          data?.data?.data?.map((item: any) => (
            <BoxSocialPost_component props={item} />
          ))}
      </div>
      {isError && (
        <div className="flex gap-x-1">
          <span>Lỗi!</span>
          <ReloadPage />
        </div>
      )}
    </div>
  );
}
