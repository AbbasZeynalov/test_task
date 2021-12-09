import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Table, TableContainer, TablePagination, Paper} from '@mui/material';
import UserUpdateModal from "../components/UserUpdateModal";
import UserTableHeader from "../components/UserTableHeader";
import UserTableBody from "../components/UserTableBody";
import {getUserListAction} from "../../store/userAction";
import {userService} from "../../data/userService";
import {IUser} from "../../data/models";

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [updatedUser, setUpdatedUser] = React.useState(null);
    const [openUserUpdateModal, setOpenUserUpdateModal] = React.useState(false);
    const dispatch = useDispatch();
    const userList = useSelector(((state: any) => state.users.userList));

    const handleUserUpdateModal = (user: IUser | null, open: boolean) => {
        setUpdatedUser(user);
        setOpenUserUpdateModal(open);
    };

    const handleRemoveButton = (id: string) => {
        userService.deleteUser(id).then((data: string) => {
            if(data) {
                dispatch(getUserListAction(page));
            }
        })
    }

    const handleChangePage = (event, newPage: number) => {
        setPage(newPage);
    };

    useEffect(() => {
        dispatch(getUserListAction(page));
    }, [page])

    return (
        <>
            <h1>User List</h1>
            <TableContainer sx={{maxHeight: 600, overflow: "y"}} component={Paper}>
                <Table stickyHeader size="small">
                    <UserTableHeader />
                    <UserTableBody
                        userList={userList}
                        page={page}
                        handleUserUpdateModal={handleUserUpdateModal}
                        handleRemoveButton={handleRemoveButton}
                    />
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                rowsPerPageOptions={[]}
                count={userList.userCount}
                rowsPerPage={20}
                page={page}
                onPageChange={handleChangePage}
            />
            {updatedUser && (
                <UserUpdateModal
                    open={openUserUpdateModal}
                    updatedUser={updatedUser}
                    page={page}
                    handleModal={handleUserUpdateModal}
                />
            )}
        </>
    );
}