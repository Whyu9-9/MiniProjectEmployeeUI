import { Edit, SimpleForm, TextInput, required } from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const EmployeeEdit = () => (
    <Edit>
        <Card>
            <CardHeader title="Edit Employee"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="name" validate={[required()]} fullWidth />
                    <TextInput source="phone" type="phone" validate={[required()]} fullWidth />
                    <TextInput source="address" validate={[required()]} fullWidth />
                    <TextInput source="company" validate={[required()]} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Edit>
);