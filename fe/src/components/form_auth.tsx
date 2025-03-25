import { Button } from "../lib/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../lib/ui/form";
import { Hook_authForm } from "../hooks/authForm";
import { Input } from "../lib/ui/input";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Form_auth_component({ type }: { type: string }) {
  const navigate = useNavigate();
  console.log(type);
  const { form, onSubmit } = Hook_authForm();
  return (
    <div className="text-center">
      <div className="mb-10 relative">
        <span className="font-semibold lg:text-lg">
          {type === "signup" ? "Sign up" : "Sign in"}
        </span>
        <button
          onClick={() => (type === "signin" ? navigate(-1) : navigate("/"))}
          className="absolute -right-2 -top-2 cursor-pointer rounded-full p-0.5 border border-transparent 
        hover:border-gray-600 duration-200 opacity-75"
        >
          <X width={20} height={20} />
        </button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col"
        >
          {/* user name */}
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
          {/* pass */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    className="!border-b font-light"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
          {type === "signup" && (
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
          )}
          {type === "signin" && (
            <>
             <div className="flex flex-col gap-y-0">
             <Button
                className="bg-[#533AAF] hover:opacity-80 text-gray-100 cursor-pointer"
                type="submit"
              >
                Sign in
              </Button>
              <span>or</span>
              <Button
                className="bg-[#e4e4e4] hover:opacity-80 hover:bg-[#e4e4e4] text-gray-700 cursor-pointer"
                type="submit"
              >
                Sign in with Google
              </Button>
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
                className="bg-[#533AAF] hover:opacity-80 text-gray-100 cursor-pointer"
                type="submit"
              >
                Sign up
              </Button>
              <span>or</span>
              <Button
                className="bg-[#e4e4e4] hover:opacity-80 hover:bg-[#e4e4e4] text-gray-700 cursor-pointer"
                type="submit"
              >
                Sign up with Google
              </Button>
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
  );
}
