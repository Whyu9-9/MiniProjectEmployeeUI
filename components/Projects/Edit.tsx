import { Edit, SimpleForm, TextInput, required } from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const ProjectEdit = () => (
    <Edit>
        <Card>
            <CardHeader title="Edit Project"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="name" validate={[required()]} fullWidth />
                    <TextInput source="description" multiline validate={[required()]} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Edit>
);