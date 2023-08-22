import { Create, SimpleForm, TextInput, required } from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const ProjectCreate = () => (
    <Create>
        <Card>
            <CardHeader title="Create Project"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="name" validate={[required()]} fullWidth />
                    <TextInput source="description" multiline validate={[required()]} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Create>
);