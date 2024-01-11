import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { Input } from "../Input";
import { useContext } from "react";
import { userContext } from "../../../provider/User";

export const LoginForm = ({ styleName }) => {

  const {userLogin, loadingLogin} = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (formData) => {
    userLogin(formData);
  };
 

  return (
    <form className={styleName} onSubmit={handleSubmit(onSubmit)}>
      <Input label="Email" type="email" placeholder="Digite seu Email" {...register("email")} error={errors.email}/>
      <Input label="Senha" type="password" placeholder="Digite sua Senha" {...register("password")} error={errors.password}/>
      <button type="submit">{loadingLogin}</button>
    </form>
  );
};
