import Form_auth_component from "../../components/form_auth";
import { Loading_overlay } from "../../components/loading";
import { useHandleAuthMutation } from "../../redux/sliceApis/auth";

export default function Signin_page() {
  const [, { isLoading }] = useHandleAuthMutation();

  return (
    <>
      {isLoading && <Loading_overlay />}
      <Form_auth_component type="signin" />
    </>
  );
}
