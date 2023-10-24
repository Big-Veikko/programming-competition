import { api } from "..";

interface IResponse {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    done: boolean;
}

export const getTodos = async () => {
    const response = await api.get<IResponse[]>("/todos");
    return response.data;
}

