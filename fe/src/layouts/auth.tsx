import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import { useEffect } from "react";
import { Loading_overlay } from "../components/loading";

// private router
export function PrivateRouter() {
  const { data, isLoading, isFetching } = useViewProfileQuery(undefined, {
    refetchOnReconnect: true,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: false,
  });
  const router = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isLoading && !isFetching) {
      if (
        data?.status !== 200 &&
        pathname !== "/sign-in" &&
        pathname !== "/sign-up"
      ) {
        router("/sign-in", { replace: true });
      }
    }
  }, [data, isLoading, isFetching, pathname, router]);

  // block render component lại
  if (isLoading || isFetching) {
    return <Loading_overlay />;
  }
  //  }, [data])
  return <Outlet />;
}

// public
export function PublicRouter() {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up";
  const { data, isLoading, isFetching } = useViewProfileQuery(undefined, {
    skip: isAuthPage,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: false,
  });
  const router = useNavigate();

  useEffect(() => {
    if (!isLoading && !isFetching) {
      if ((data?.status === 200 || data?.status === 20) && isAuthPage) {
        router("/", { replace: true });
      }
    }
  }, [data, isLoading, isFetching, router, isAuthPage]);

  // block render component lại
  if (isLoading || isFetching) {
    return <Loading_overlay />;
  }
  return <Outlet />;
}
