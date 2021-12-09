import {Dispatch} from "redux";
import {userService} from "../data/userService";
import {IUser} from "../data/models";
import {GET_USERS} from "./constant";

export const getUserListAction = (page: number) => {

    return async (dispatch: Dispatch): Promise<void> => {
        return await userService.getList(page).then((users: IUser[]) => {
            dispatch({
                type: GET_USERS,
                payload: users,
            });
        })
    }
};

