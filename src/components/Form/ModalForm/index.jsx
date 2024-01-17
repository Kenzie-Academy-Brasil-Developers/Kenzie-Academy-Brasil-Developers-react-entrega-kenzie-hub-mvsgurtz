import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../../provider/Tech";
import { userContext } from "../../../provider/User";

export const ModalForm = ({styleName, Information}) => {
    const {editingTech, uptadeTech, registerTech} =  useContext(TechContext);
    const [isInputDisabled, setIsInputDisabled] = useState(false);

    const {register, handleSubmit, setValue} = useForm();

    useEffect(() => {
        if (editingTech) {
          setValue('title', editingTech.title);
          setValue('status', editingTech.status);
          setIsInputDisabled(true);
        }
      }, [editingTech, setValue]);

    const onSubmit = (taskData) => {
        if(editingTech === null){
            registerTech(taskData);
        } else {
            uptadeTech(taskData)
        }
    }

    return (
        <form className={styleName} onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" placeholder="Tecnologia" type ="text" {...register("title")}  disabled={isInputDisabled} />
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