import Form_auth_component from "../../components/form_auth";
import { useHandleAuthMutation } from "../../redux/sliceApis/auth";
import { Loading_overlay } from "../../components/loading";

export default function Signup_page() {
  const [, { isLoading }] = useHandleAuthMutation();
  return (
    <>
      {isLoading && <Loading_overlay />}
      <Form_auth_component type="signup" />
    </>
  );
}
