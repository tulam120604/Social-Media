import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaFormAuth } from "../validate/auth";

export function Hook_authForm() {
  const form = useForm<z.infer<typeof schemaFormAuth>>({
    resolver: zodResolver(schemaFormAuth),
  });

  const onSubmit = (value: z.infer<typeof schemaFormAuth>) => {
    console.log(value, form);
  };
  return {
    form,
    onSubmit
  }
}
