import { Edit, SimpleForm, TextInput, required } from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const AdminEdit = () => (
    <Edit>
        <Card>
            <CardHeader title="Edit Admin"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="username" validate={[required()]} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Edit>
);