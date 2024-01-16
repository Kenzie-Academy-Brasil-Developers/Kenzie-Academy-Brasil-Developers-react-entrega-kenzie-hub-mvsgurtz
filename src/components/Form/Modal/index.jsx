
import { ModalForm } from "../ModalForm"
import style from "./style.module.scss"


export const Modal = ({h2, Information, register} ) => {
    

    return (
        <div role="dialog" className={style.main__container}>
        <div className={style.container__info}>
          <div className={style.header__content}>
            <h2> {h2} </h2>
            <button onClick={() => register(false)}>X</button>
          </div>
          <ModalForm styleName={style.form} Information={Information} />
        </div>
      </div>
    )
}