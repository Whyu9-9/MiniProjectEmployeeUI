import { Create, SimpleForm, TextInput, required } from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const AdminCreate = () => (
    <Create>
        <Card>
            <CardHeader title="Create Admin"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="username" validate={[required()]} fullWidth />
                    <TextInput source="password" type="password" validate={[required()]} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Create>
);