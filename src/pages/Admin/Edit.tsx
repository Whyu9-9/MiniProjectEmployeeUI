import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    minLength,
    maxLength
} from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const validateUsername = [
    required("Username is required"),
    minLength(10, "Username must be at least 10 characters"),
    maxLength(255, "Username maximum length is 255 characters")
];

export const AdminEdit = () => (
    <Edit>
        <Card>
            <CardHeader title="Edit Admin"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="username" validate={validateUsername} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Edit>
);