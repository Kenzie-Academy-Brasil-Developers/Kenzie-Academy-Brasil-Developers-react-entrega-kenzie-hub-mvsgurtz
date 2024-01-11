import { createContext} from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {

  const [loadingLogin, setLoadingLogin] = useState("Entrar");

  const [loadingRegister, setLoadingRegister] = useState("Cadastrar");

  const [user, setUser] = useState(null);
  const navigate = useNavigate();



  const userLogout = () => {
    setUser(null)
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@Name");
    localStorage.removeItem("@CourseModule");
  }

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
      localStorage.setItem("@Name", data.user.name);
      localStorage.setItem("@CourseModule", data.user.course_module);
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
      value={{ userLogin, userRegister, loadingLogin, loadingRegister, userLogout }}
    >
      {children}
    </userContext.Provider>
  );
};
