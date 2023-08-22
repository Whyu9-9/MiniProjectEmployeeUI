import * as React from 'react';
import {
    Show,
    TabbedShowLayout,
    Tab,
    SimpleShowLayout,
    TextField,
    ArrayField,
    Datagrid,
    Button,
    useNotify,
    useRedirect,
} from 'react-admin';

const ProjectShow: React.FC = (props) => {
    const notify = useNotify();
    const redirect = useRedirect();

    const handleAddEmployeeClick = () => {
        // Implement your logic to open a modal or form to add employees
        // This is just a placeholder
        notify('Add Employee clicked');
        // You can use redirect to navigate to a specific page after adding employee
        redirect('/custom-path');
    };

    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label="Project Details">
                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <TextField source="name" label="Name" />
                        <TextField source="description" label="Description" />
                    </SimpleShowLayout>
                </Tab>
                <Tab label="Employees">
                    <ArrayField source="employees" label="Employees">
                        <Datagrid>
                            <TextField source="id" label="ID" />
                            <TextField source="name" label="Name" />
                            <TextField source="company" label="Company" />
                            <TextField source="phone" label="Phone" />
                            <TextField source="address" label="Address" />
                        </Datagrid>
                    </ArrayField>
                    <Button label="Add Employee" onClick={handleAddEmployeeClick} />
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default ProjectShow;