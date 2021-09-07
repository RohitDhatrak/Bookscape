import axios from "axios";

export function setupAuthExceptionHandler(logoutUser, navigate) {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error?.response?.status === UNAUTHORIZED) {
                logoutUser();
                navigate("login", { state: { previousPath: "/" } });
            }
            return Promise.reject(error);
        }
    );
}
