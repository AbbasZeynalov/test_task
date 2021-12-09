import React from "react";
import {TableRow, TableCell, Box, TableBody, IconButton} from "@mui/material";
import { MdDelete, MdModeEdit } from "react-icons/md";
import {IUser, IUserResponse, IUserTableColumn} from "../../data/models";
import {userTableColumns} from "../../data/data";

interface IProps {
    page: number;
    userList: IUserResponse;
    handleRemoveButton: (id: string) => void;
    handleUserUpdateModal: (user: IUser | null, open: boolean) => void;
}

const UserTableBody: React.FC<IProps> = ({ userList, handleUserUpdateModal, page, handleRemoveButton }) =>  (
    <TableBody>
        {userList?.users?.map((user) => {
            return (
                <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                    {userTableColumns.map((column: IUserTableColumn) =>  (
                        <TableCell key={column.id} align="right">
                            { user[column.id] }
                        </TableCell>
                    ))}
                    <TableCell align="right">
                        <Box>
                            <IconButton onClick={() => handleUserUpdateModal(user, true)}>
                                <MdModeEdit />
                            </IconButton>
                            <IconButton onClick={() => handleRemoveButton(user.id)}>
                                <MdDelete />
                            </IconButton>
                        </Box>
                    </TableCell>
                </TableRow>
            );
        })}
    </TableBody>
);

export default UserTableBody;