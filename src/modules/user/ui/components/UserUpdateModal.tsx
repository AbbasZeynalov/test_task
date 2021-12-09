import React from "react";
import {useForm, Controller} from "react-hook-form";
import {useDispatch} from "react-redux";
import {TextField, Modal, Button, Box, Grid} from "@mui/material";
import {IUser} from "../../data/models";
import {userService} from "../../data/userService";
import {getUserListAction} from "../../store/userAction";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    pt: 1
};

interface IProps {
    open: boolean;
    page: number;
    updatedUser: IUser;
    handleModal: (user: IUser | null, open: boolean) => void;
}

const UserUpdateModal: React.FC<IProps> = ({ open, handleModal, updatedUser, page }) => {
    const dispatch = useDispatch();

    const { handleSubmit, control } = useForm({
        defaultValues: {
            first_name: updatedUser?.first_name,
            last_name: updatedUser?.last_name
        }
    });

    const onSubmit = (data) => {
        const { first_name, last_name } = data;
        userService.updateUser({
            id: updatedUser.id,
            first_name,
            last_name
        }).then((res) => {
            dispatch(getUserListAction(page));
            handleModal(null, false)
        })
    };

    return (
        <div>
            <Modal keepMounted open={open}>
                <Box sx={style}>
                    <h3>Update user detail</h3>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{mt: 4}}>
                                <Controller
                                    name={"first_name"}
                                    control={control}
                                    rules={{ required: true }}
                                    render={({
                                         field: { onChange, value },
                                         fieldState: {  error },
                                     }) => (
                                        <TextField
                                            error={!!error}
                                            onChange={onChange}
                                            value={value}
                                            sx={{ width: "100%" }}
                                            label={"First Name"}
                                        />
                                    )}
                                />
                            </Box>

                            <Box sx={{mt: 4}}>
                                <Controller
                                    name={"last_name"}
                                    control={control}
                                    rules={{ required: true }}
                                    render={({
                                         field: { onChange, value },
                                         fieldState: {  error },
                                    }) => (
                                        <TextField
                                            error={!!error}
                                            onChange={onChange}
                                            sx={{ width: "100%" }}
                                            value={value}
                                            label={"Last Name"}
                                        />
                                    )}
                                />
                            </Box>

                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                sx={{ mt: 3 }}
                            >
                                <Grid item>
                                    <Button type="submit">
                                        Update
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="error" onClick={() => handleModal(null, false)}>
                                        cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default UserUpdateModal;