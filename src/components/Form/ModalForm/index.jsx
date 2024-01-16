import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext } from "react";
import { TechContext } from "../../../provider/Tech";

export const ModalForm = ({styleName, Information}) => {
    const {register, handleSubmit} = useForm();
    const {registerTech} = useContext(TechContext);

    const onSubmit = (taskData) => {
        registerTech(taskData);
    }

    return (
        <form className={styleName} onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" placeholder="Tecnologia" type ="text" {...register("title")} />
        <label>Selecionar status</label>
        <select {...register("status")}>
           <option value="Iniciante">Iniciante</option>
           <option value="Intermediário">Intermediário</option>
           <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">
            {Information}
        </button>
    </form>
    )
}