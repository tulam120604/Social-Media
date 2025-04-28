import { useNavigate } from "react-router-dom";
import Loading_overlay from "../components/loading_overlay";
import { useViewProfileQuery } from "../redux/sliceApis/auth";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading } = useViewProfileQuery();
  const router = useNavigate();
//  useEffect(() => {
    if (!isLoading && (data?.data?.error || data?.status !== 200)) {
        router("/sign-in");
        return
      }
//  }, [data])
  return <>{isLoading ? <Loading_overlay /> : children}</>;
}
