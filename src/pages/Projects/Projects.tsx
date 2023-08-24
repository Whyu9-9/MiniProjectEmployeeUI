import {
    List,
    Datagrid,
    TextField,
    ShowButton
} from "react-admin";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Action from '../misc/Action';

export const ProjectList = () => (
    <List >
        <Card>
            <CardHeader title="Project List"></CardHeader>
            <CardContent>
                <Datagrid>
                    <TextField label="ID" source="id" />
                    <TextField source="name" />
                    <TextField source="description" />
                    <ShowButton label="Detail" />
                    <Action label="Action" />
                </Datagrid>
            </CardContent>
        </Card>
    </List>
);