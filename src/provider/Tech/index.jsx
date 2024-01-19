import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { userContext } from "../User";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { techList, setTechList, setIsVisibleRegister } = useContext(userContext);
  const [editingTech, setEditingTech] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getTechs = async () => {
      try {
        const { data } = await api.get(
          `/users/${localStorage.getItem("@USERID")}`
        );
        setTechList(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    getTechs();
  }, []);

  const registerTech = async (taskData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post(`/users/techs`, taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList([...techList, data]);
      setIsVisibleRegister(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (DeletingtechID) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${DeletingtechID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = techList.filter((tech) => tech.id !== DeletingtechID);
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  const uptadeTech = async (taskData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        taskData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      setEditingTech(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        uptadeTech,
        editingTech,
        setEditingTech,
        registerTech,
        techList,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
