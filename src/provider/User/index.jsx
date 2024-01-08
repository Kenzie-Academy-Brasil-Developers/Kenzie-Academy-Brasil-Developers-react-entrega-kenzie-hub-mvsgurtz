import { api } from "../../services/api";

export const userRegister = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  