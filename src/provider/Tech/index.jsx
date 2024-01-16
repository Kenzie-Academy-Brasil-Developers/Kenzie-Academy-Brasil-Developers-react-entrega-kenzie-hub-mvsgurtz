import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { userContext } from "../User";

export const TechContext = createContext({});

export const TechProvider = ({children}) =>{

    const {setUser, user} = useContext(userContext);

    const [techList, setTechList] = useState([]);

    useEffect(() =>{
        const getUser = async () =>{
            try {
                const {data} = await api.get(`/users`)
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, [])

    const registerTech =  async (taskData) => {
        try {
            const {data} = await api.post(`/users/techs`, taskData);
            setTechList(taskData)
            console.log(data);
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