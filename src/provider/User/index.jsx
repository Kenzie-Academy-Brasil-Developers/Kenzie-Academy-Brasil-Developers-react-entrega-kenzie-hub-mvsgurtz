import { createContext, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loadingLogin, setLoadingLogin] = useState("Entrar");

  const [loadingRegister, setLoadingRegister] = useState("Cadastrar");

  const [isVisibleRegister, setIsVisibleRegister] = useState(false);
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);

  const [user, setUser] = useState(null);
  const [techList, setTechList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const { data } = await api.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate("/Dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        }
      }
    };
    loadUser();
  }, []);

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  const userRegister = async (formData) => {
    try {
      setLoadingRegister("Cadastrando...");
      const { data } = await api.post("/users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/");
        setLoadingRegister("Cadastrar");
      }, 2 * 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setLoadingLogin("Entrando...");
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      toast.success("Login Efetuado com sucesso!");
      setTimeout(() => {
        navigate("/Dashboard");
        setLoadingLogin("Entrar");
      }, 2 * 1000);
    } catch (error) {
      console.log(error);
      toast.error("Credenciais inválidas!");
    }
  };

  return (
    <userContext.Provider
      value={{
        techList,
        setTechList,
        isVisibleEdit,
        setIsVisibleEdit,
        isVisibleRegister,
        setIsVisibleRegister,
        userLogin,
        userRegister,
        loadingLogin,
        loadingRegister,
        userLogout,
        user,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
