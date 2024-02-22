import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createUserRequest = {
  auth0Id : String;
  email : String;
};

export const useCreateMyUser = () =>{
  const createMyUserRequest = async (user: createUserRequest) =>{
    const Response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method : "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body :JSON.stringify(user),
    });
    if (!Response.ok){
      throw new Error("Failed to create user");
    }
  };

  const {mutateAsync: createUser, isLoading, isError, isSuccess} = useMutation(createMyUserRequest);
  return {createUser, isLoading, isError, isSuccess};
};
