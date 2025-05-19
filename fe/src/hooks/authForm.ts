/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaFormAuth } from "../validate/auth";
import { useHandleAuthMutation } from "../redux/sliceApis/auth";

export function useAuthForm(action: string) {
  const [dispath, { isLoading }] = useHandleAuthMutation();
  const form = useForm<z.infer<typeof schemaFormAuth>>({
    resolver: zodResolver(schemaFormAuth),
  });

  const onSubmit = async (value: any) => {
    try {
      const request = {
        dataForm: value,
        action,
      };
      const result = await dispath(request).unwrap();
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isLoading,
    form,
    onSubmit,
  };
}
