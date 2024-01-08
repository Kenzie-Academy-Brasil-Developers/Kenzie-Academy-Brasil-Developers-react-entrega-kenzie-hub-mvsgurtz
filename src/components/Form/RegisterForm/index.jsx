import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { registerFormSchema } from "./RegisterForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const RegisterForm = ({ styleName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  const navigate = useNavigate();

  const [loadingRegister, setLoadingRegister] = useState("Cadastrar");

  const userRegister = async (formData) => {
    try {
      setLoadingRegister("Cadastrando...");
      const { data } = await api.post("/users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/");
        setLoadingRegister("Cadastrar");
      }, 2*1000)
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (formData) => {
    userRegister(formData);
    
  };

  return (
    <form className={styleName} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
      />
      <Input
        label="Confirme sua Senha"
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("confirmPassword")}
        error={errors.confirmpassword}
      />
      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio}
      />
      <Input
        label="Contato"
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
        error={errors.contact}
      />
      <label>Selecionar Módulo</label>
      <select {...register("course_module")} error={errors.course_module}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro Módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Terceiro Módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      <button type="submit">{loadingRegister}</button>
    </form>
  );
};
