import {
    List,
    Datagrid,
    TextField
} from "react-admin";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Action from '../misc/Action';

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
                    <Action label="Action" />
                </Datagrid>
            </CardContent>
        </Card>
    </List>
);