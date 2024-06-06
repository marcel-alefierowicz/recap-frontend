import { AxiosResponse } from "axios";
import authInstance from "../axios/authInstance.tsx";

const useAuth = () => {
  const register = async (
    username: string,
    password: string,
  ): Promise<string> => {
    try {
      const res: AxiosResponse = await authInstance.post("/create-account", {
        username,
        password,
      });

      return res.data.message;

    } catch (err: unknown) {
      if (err instanceof Error)
        return err.message;
      return "Unknown error"
    }
  };
  return { register };
};
export default useAuth;
