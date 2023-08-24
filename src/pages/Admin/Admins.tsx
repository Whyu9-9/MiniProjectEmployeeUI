import {
    List,
    Datagrid,
    TextField
} from "react-admin";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Action from '../misc/Action';

export const AdminList = () => (
    <List>
        <Card>
            <CardHeader title="Admin List"></CardHeader>
            <CardContent>
                <Datagrid>
                    <TextField label="ID" source="id" />
                    <TextField source="username" />
                    <Action label="Action" />
                </Datagrid>
            </CardContent>
        </Card>
    </List>
);