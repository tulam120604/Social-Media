import { GoogleLogin } from "@react-oauth/google";

export default function Btn_auth_with_google() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
