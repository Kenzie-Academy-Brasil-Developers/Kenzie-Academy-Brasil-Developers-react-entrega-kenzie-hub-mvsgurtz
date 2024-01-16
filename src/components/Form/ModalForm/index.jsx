import { useForm } from "react-hook-form"
import { Input } from "../Input"

export const ModalForm = ({styleName, Information}) => {
    // const [register, handleSubmit] = useForm();

    return (
        <form className={styleName}>
        <Input label="Nome" placeholder="Tecnologia" type ="text"/>
        <label>Selecionar status</label>
        <select>
           <option value="Iniciante">Iniciante</option>
           <option value="Intermediário">Intermediário</option>
           <option value="Avançado">Avançado</option>
        </select>
        <button>
            {Information}
        </button>
    </form>
    )
}