import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../Input";

export const LoginForm = ({ setUser, styleName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    userLogin(formData);
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      console.log(data);
      setUser(data.user);
      
      navigate("/Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styleName} onSubmit={handleSubmit(onSubmit)}>
      <Input label="Email" type="email" placeholder="Digite seu Email" {...register("email")}/>
      <Input label="Senha" type="password" placeholder="Digite sua Senha" {...register("password")} />
      <button type="submit">Entrar</button>
    </form>
  );
};
