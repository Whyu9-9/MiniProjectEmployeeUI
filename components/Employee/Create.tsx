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

const validateName = [
    required("Name is required"),
    minLength(10, "Employee Name must be at least 10 characters"),
    maxLength(255, "Employee Name maximum length is 255 characters")
];

const validatePhone = [
    required("Phone is required"),
    maxLength(12, "Phone maximum length is 12 characters"),
    regex(/^\d+$/, "Phone must be a number")
];

const validateAddress = [
    required("Address is required"),
    maxLength(255, "Address maximum length is 255 characters")
];

const validateCompany = [
    required("Company Name is required"),
    maxLength(255, "Company Name maximum length is 255 characters")
];

export const EmployeeCreate = () => (
    <Create>
        <Card>
            <CardHeader title="Create Employee"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="name" validate={validateName} fullWidth />
                    <TextInput source="phone" validate={validatePhone} fullWidth />
                    <TextInput source="address" validate={validateAddress} fullWidth />
                    <TextInput source="company" validate={validateCompany} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Create>
);