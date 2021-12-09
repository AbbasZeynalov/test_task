import { httpService, IHttpService } from "../../../core/services/httpService";
import { IUser } from "./models";

export interface IUserService {
  getList: (page: number) => Promise<IUser[]>;
  deleteUser: (id: string) => Promise<string>;
  updateUser: (user: IUser) => Promise<IUser>;
}

export const UserService = (httpService: IHttpService): IUserService => {
  const baseUrl = "/users";

  return {
    getList: async (page: number) => {
      const res = await httpService.get(baseUrl, { params: { page } });
      return res?.data;
    },
    deleteUser: async (id: string) => {
      const res = await httpService.delete(`${baseUrl}/${id}`);
      return res?.data;
    },
    updateUser: async ({ id, last_name, first_name}: IUser) => {
      const res = await httpService.put(`${baseUrl}/${id}`, { last_name, first_name });
      return res?.data;
    },
  };
};

export const userService = UserService(httpService);
