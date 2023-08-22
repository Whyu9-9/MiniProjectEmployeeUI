import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const EmployeeList = () => (
    <List>
        <Card>
            <CardHeader title="Employee List"></CardHeader>
            <CardContent>
                <Datagrid>
                    <TextField label="ID" source="id" />
                    <TextField source="name" />
                    <TextField source="phone" />
                    <TextField source="address" />
                    <TextField source="company" />
                    <span label="Action">
                        <EditButton onClick="edit" />
                        <DeleteButton onClick="delete" />
                    </span>
                </Datagrid>
            </CardContent>
        </Card>
    </List>
);