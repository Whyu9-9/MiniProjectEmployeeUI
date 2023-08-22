import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const AdminList = () => (
    <List>
        <Card>
            <CardHeader title="Admin List"></CardHeader>
            <CardContent>
                <Datagrid>
                    <TextField label="ID" source="id" />
                    <TextField source="username" />
                    <span label="Action">
                        <EditButton onClick="edit" />
                        <DeleteButton onClick="delete" />
                    </span>
                </Datagrid>
            </CardContent>
        </Card>
    </List>
);