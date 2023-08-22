import { List, Datagrid, TextField } from "react-admin";

export const AdminList = () => (
    <List >
        <Datagrid>
            <TextField label="ID" source="id" />
            <TextField source="username" />
        </Datagrid>
    </List>
);