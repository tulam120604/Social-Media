import { useNavigate } from "react-router-dom";
import Loading_overlay from "../components/loading_overlay";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import { useEffect } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading } = useViewProfileQuery();
  const router = useNavigate();
  //  useEffect(() => {

  useEffect(() => {
    if (!isLoading && (data?.data?.error || data?.status !== 200)) {
      router("/sign-in");
    }
  }, [isLoading, data, router]);
  //  }, [data])
  return <>{isLoading ? <Loading_overlay /> : children}</>;
}
