import { useForm } from "react-hook-form"
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";


export const RegisterForm = ({styleName}) => {
    const { register, handleSubmit} = useForm({
        resolver: zodResolver(formData)
    });
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        navigate("/");
    }

    return ( 
        <form className={styleName} onSubmit={handleSubmit(onSubmit)}>
            <Input label = "Nome" type="text" placeholder="Digite aqui seu nome" {...register("Name")}/>
            <Input label = "Email" type="email" placeholder="Digite aqui seu email"{...register("Email")}/>
            <Input label = "Senha" type="password" placeholder="Digite aqui sua senha"{...register("Password")}/>
            <Input label = "ConfirmPassword" type="password" placeholder="Digite novamente sua senha"{...register("ConfirmPassword")}/>
            <Input label = "Bio" type="text" placeholder="Fale sobre você" {...register("Bio")}/>
            <Input label = "Contato" type="text" placeholder="Opção de contato" {...register("Contact")}/>
            <label htmlFor="Selecionar Módulo"></label>
                <select {...register("module")}>
                    <option value="Primeiro Módulo">Primeiro Módulo</option>
                    <option value="Segundo Módulo">Segundo Módulo</option>
                    <option value="Terceiro Módulo">Terceiro Módulo</option>
                </select>
            <button type="submit">Cadastrar</button>    
      </form>
    )


}