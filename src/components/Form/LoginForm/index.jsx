import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../Input";
import { useState } from "react";

export const LoginForm = ({ setUser, styleName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loadingLogin, setLoadingLogin] = useState("Entrar");

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    userLogin(formData);
  };


  const userLogin = async (formData) => {
    try {

      const { data } = await api.post("/sessions", formData);
      setLoadingLogin("Entrando...")
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@Name", data.user.name);
      localStorage.setItem("@CourseModule", data.user.course_module);
      toast.success("Login Efetuado com sucesso!");
      setTimeout(() => { 
        navigate("/Dashboard");
        setLoadingLogin("Entrar");
      }, 2*1000)
     
      
    } catch (error) {
      console.log(error);
      toast.error("Credenciais inválidas!");
    }
  };

  return (
    <form className={styleName} onSubmit={handleSubmit(onSubmit)}>
      <Input label="Email" type="email" placeholder="Digite seu Email" {...register("email")} error={errors.email}/>
      <Input label="Senha" type="password" placeholder="Digite sua Senha" {...register("password")} error={errors.password}/>
      <button type="submit">{loadingLogin}</button>
    </form>
  );
};
