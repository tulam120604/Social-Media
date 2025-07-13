import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import { Loading_overlay } from "../components/loading";

// private router
export function PrivateRouter() {
  const { data, isLoading, isFetching } = useViewProfileQuery(undefined, {
    refetchOnReconnect: true,
  });
  // block render component lại
  if (isLoading || isFetching) {
    return <Loading_overlay />;
  }
  //  }, [data])
  return data?.status === 200 ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

// public
export function PublicRouter() {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up";
  const { data, isLoading, isFetching } = useViewProfileQuery(undefined, {
    skip: isAuthPage,
    refetchOnReconnect: true,
  });
  // block render component lại
  if (isLoading || isFetching) {
    return <Loading_overlay />;
  }
  return data?.status === 200 && isAuthPage ? (
    <Navigate to="/" replace />
  ) : (
    <Outlet />
  );
}
