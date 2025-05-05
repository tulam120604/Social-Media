import { useGoogleLogin } from "@react-oauth/google";
import { useHandleAuthWithGoogleMutation } from "../redux/sliceApis/auth";
import { Button } from "../lib/ui/button";
import { useNavigate } from "react-router-dom";

export default function Btn_auth_with_google({ action }: { action: string }) {
  const navigate = useNavigate();
  const [dispathAuthGoogle] = useHandleAuthWithGoogleMutation();
  const submit = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const result = await dispathAuthGoogle({
          access_token: tokenResponse,
        }).unwrap(); // unwrap dùng để truy cập vào dữ liệu error hoặc success sau khi action trigger
        // cái này nó như kiểu destructuring cái dữ liệu ra, thay vì result.data.status
        if (result?.status === 200) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  return (
    <>
      <Button
        className="bg-transparent hover:opacity-80 cursor-pointer rounded 
                  hover:bg-transparent font-normal border shadow-none"
        type="button"
        onClick={() => submit()}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="google logo"
          style={{ width: "20px", height: "20px" }}
        />
        {action === "signup" && "Sign up with google"}
        {action === "signin" && "Sign in with google"}
      </Button>
    </>
  );
}
