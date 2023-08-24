import {
    Create,
    SimpleForm,
    TextInput,
    required,
    minLength,
    maxLength,
    regex
} from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const validateUsername = [
    required("Username is required"),
    minLength(10, "Username must be at least 10 characters"),
    maxLength(255, "Username maximum length is 255 characters")
];

const validatePassword = [
    required("Password is required"),
    minLength(10, "Password must be at least 8 characters"),
    regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, "Password must be contain uppercase letter, number, and special character")
];

export const AdminCreate = () => (
    <Create>
        <Card>
            <CardHeader title="Create Admin"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="username" validate={validateUsername} fullWidth />
                    <TextInput source="password" type="password" validate={validatePassword} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Create>
);