/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaFormAuth } from "../validate/auth";
import { useHandleAuthMutation } from "../redux/sliceApis/auth";
import { useNavigate } from "react-router-dom";

export function Hook_authForm(action: string) {
  const navigate = useNavigate();
  const [dispath, { isLoading }] = useHandleAuthMutation();
  const form = useForm<z.infer<typeof schemaFormAuth>>({
    resolver: zodResolver(schemaFormAuth),
  });

  const onSubmit = async (value: any) => {
    const request = {
      dataForm: value,
      action,
    };
    const result = await dispath(request);
    console.log(result);
  };
  return {
    form,
    onSubmit,
    isLoading,
  };
}
