/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../lib/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../lib/ui/form";
import { useAuthForm } from "../hooks/authForm";
import { Input } from "../lib/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Btn_auth_with_google from "./btn_auth_with_google";
import useDarkMode from "../utils/getTheme";
import { useViewProfileQuery } from "../redux/sliceApis/auth";
import { useEffect, useState } from "react";
import { Loading_Spinner } from "./loading";

export default function Form_auth_component({ type }: { type: string }) {
  const isDarkMode = useDarkMode();
  const [message, setMessage] = useState<string | number | null>(null);
  const { data, isLoading, isFetching } = useViewProfileQuery(undefined);
  const router = useNavigate();
  // check : user tồn tại => redirect path home
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isLoading && !isFetching) {
      if (
        data?.status === 200 &&
        (pathname === "/sign-in" || pathname === "/sign-up")
      ) {
        router("/", { replace: true });
      }
    }
  }, [data, isLoading, isFetching, pathname, router]);

  const { form, onSubmit } = useAuthForm(type);
  const handleSubmitForm = async (data: any) => {
    const result = await onSubmit(data);
    if (result?.status === 404) {
      setMessage("Thông tin tài khoản không chính xác!");
    }
    console.log(result);
  };
  return (
    <div
      className="grid place-content-center w-screen h-screen bg-[url(/public/Images/bg_login.jpg)] 
    bg-no-repeat bg-cover bg-fixed"
    >
      {/* overlay */}
      <div className="w-screen h-screen fixed bg-[#34343488]" />
      <div />

      {/* form */}
      <div
        className={`${
          isDarkMode
            ? "bg-[#1C1C1D] text-gray-100"
            : "bg-[#F1F5F9] text-gray-900 "
        } text-center z-[1000] rounded p-6 max-w-sm min-w-xs border shadow`}
      >
        {isLoading && <Loading_Spinner />}
        <div className="mb-10">
          <span className="font-semibold lg:text-lg">
            {type === "signup" ? "Sign up" : "Sign in"}
          </span>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="space-y-6 flex flex-col"
          >
            {/* user name */}
            {type === "signup" && (
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        {...field}
                        className="!border-b font-light"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {/* pass */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="!border-b font-light"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="!border-b font-light"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {<span className="text-red-500 text-sm">{message}</span>}
            {type === "signin" && (
              <>
                <div className="flex flex-col gap-y-0">
                  <Button
                    className="bg-[#533AAF] hover:opacity-80 text-gray-100 cursor-pointer rounded 
                  hover:bg-[#533AAF] font-normal"
                    type="submit"
                  >
                    Sign in
                  </Button>
                  <span className="opacity-60 font-light">or</span>
                  <Btn_auth_with_google action={"signin"} />
                </div>
                <div className="text-sm opacity-80">
                  Don't have account?{" "}
                  <Link to={"/sign-up"} className="text-[#533AAF]">
                    Signup
                  </Link>
                </div>
              </>
            )}
            {type === "signup" && (
              <>
                <div className="flex flex-col gap-y-0">
                  <Button
                    className="bg-[#533AAF] hover:opacity-80 text-gray-100 cursor-pointer rounded 
                  hover:bg-[#533AAF] font-normal"
                    type="submit"
                  >
                    Sign up
                  </Button>
                  <span className="opacity-60 font-light">or</span>
                  <Btn_auth_with_google action={"signup"} />
                </div>
                <div className="text-sm opacity-80">
                  Already have account?{" "}
                  <Link to={"/sign-in"} className="text-[#533AAF]">
                    Signin
                  </Link>
                </div>
              </>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
