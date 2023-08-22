import { List, Datagrid, TextField, EditButton, DeleteButton, ShowButton } from "react-admin";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const ProjectList = () => (
    <List >
        <Card>
            <CardHeader title="Project List"></CardHeader>
            <CardContent>
                <Datagrid>
                    <TextField label="ID" source="id" />
                    <TextField source="name" />
                    <TextField source="description" />
                    <span label="Action">
                        <EditButton onClick="edit" />
                        <DeleteButton onClick="delete" />
                        <ShowButton onClick="show" />
                    </span>
                </Datagrid>
            </CardContent>
        </Card>
    </List>
);