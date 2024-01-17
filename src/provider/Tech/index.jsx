import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { userContext } from "../User";

export const TechContext = createContext({});

export const TechProvider = ({children}) =>{

    const {techList, setTechList} = useContext(userContext);

    const registerTech =  async (taskData) => {
        try {

            const token =  localStorage.getItem("@TOKEN")
            const {data} = await api.post(`/users/techs`, taskData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTechList([...techList, taskData])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TechContext.Provider
        value={{registerTech ,techList}}>
        {children}
        </TechContext.Provider>
    )

}