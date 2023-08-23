import {
    Create,
    SimpleForm,
    TextInput,
    required,
    minLength,
    maxLength
} from 'react-admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const validateProjectName = [
    required("Project Name is required"),
    minLength(10, "Project Name must be at least 10 characters"),
    maxLength(255, "Project Name maximum length is 255 characters")
];

const validateProjectDesc = [
    required("Project Description is required"),
    minLength(10, "Project Description must be at least 10 characters"),
    maxLength(255, "Project Description maximum length is 255 characters")
];

export const ProjectCreate = () => (
    <Create>
        <Card>
            <CardHeader title="Create Project"></CardHeader>
            <CardContent>
                <SimpleForm>
                    <TextInput source="name" validate={validateProjectName} fullWidth />
                    <TextInput source="description" multiline validate={validateProjectDesc} fullWidth />
                </SimpleForm>
            </CardContent>
        </Card>
    </Create>
);