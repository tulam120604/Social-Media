import { useLocation, useNavigate } from "react-router-dom";
import Form_auth_component from "../../components/form_auth";
import { useState, useEffect } from "react";
import { useSignUpMutation } from "../../redux/sliceApis/auth";
import Loading_overlay from "../../components/loading_overlay";

export default function Signup_page() {
  const [animation, setAnimation] = useState<boolean>(false);
  const [, { isLoading }] = useSignUpMutation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const time = setTimeout(() => {
      if (pathname === "/sign-up") {
        setAnimation(true);
      }
    }, 10);
    return () => {
      clearTimeout(time);
    };
  }, [pathname]);
  const closeForm = () => {
    navigate("/");
  };
  return (
    <div className="grid place-content-center h-screen w-screen fixed top-0 left-0 z-[10]">
      {isLoading && <Loading_overlay />}
      <div
        className={`${animation ? "translate-y-0" : "-translate-y-[500%]"} 
      bg-white rounded-lg p-4 lg:w-[350px] w-[90vw] login-overlay duration-200`}
      >
        <Form_auth_component type="signup" />
      </div>

      {/* overlay */}
      <div
        className="bg-[#33333366] w-screen h-screen fixed z-[-1]"
        onClick={closeForm}
      />
    </div>
  );
}
