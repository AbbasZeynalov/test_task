import {GET_USERS} from "./constant";

const initState = {
    userList: {
        userCount: 0,
        users: []
    }
};

const userReducer = (state = initState, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                userList: payload,
            };
        default:
            return state;
    }
};

export default userReducer;