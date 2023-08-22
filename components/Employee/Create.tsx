import { Create, SimpleForm, TextInput, required } from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const EmployeeCreate = () => (
    <Create>
        <Card>
            <CardHeader title="Create Employee"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="name" validate={[required()]} fullWidth />
                    <TextInput source="phone" type="phone" validate={[required()]} fullWidth />
                    <TextInput source="address" validate={[required()]} fullWidth />
                    <TextInput source="company" validate={[required()]} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Create>
);