import React from "react";
import { TableHead, TableRow, TableCell, Typography } from "@mui/material";
import {userTableColumns} from "../../data/data";

const UserTableHeader = () => {

    return (
        <TableHead>
            <TableRow>
                {userTableColumns.map((column) => (
                    <TableCell
                        align="right"
                        size="medium"
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                    >
                        <Typography fontSize={14} fontWeight={700}>{ column.label }</Typography>
                    </TableCell>
                ))}
                <TableCell align="right" style={{ minWidth: 170 }}></TableCell>
            </TableRow>
        </TableHead>
    );
}

export default UserTableHeader