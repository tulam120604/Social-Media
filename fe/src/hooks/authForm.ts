import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaFormAuth } from "../validate/auth";
import { useSignUpMutation } from "../redux/sliceApis/auth";

export function Hook_authForm() {
  const [dispath, { isLoading }] = useSignUpMutation();
  const form = useForm<z.infer<typeof schemaFormAuth>>({
    resolver: zodResolver(schemaFormAuth),
  });

  const onSubmit = async (value: z.infer<typeof schemaFormAuth>) => {
    const request = {
      dataForm: value,
      action: "sign-up",
    };
    await dispath(request);
  };
  return {
    form,
    onSubmit,
    isLoading,
  };
}
