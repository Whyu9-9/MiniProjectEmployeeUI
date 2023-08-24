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
    useShowController
} from 'react-admin';
import EmployeeSelectionModal from '../misc/EmployeeSelectionModal';

const ProjectShow: React.FC = (props) => {
    const { record } = useShowController(props);
    const projectId = record?.id;

    const [open, setOpen] = React.useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };
    return (
        <Show>
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
                    <Button onClick={handleOpenModal} label='Add Employee to Project'></Button>
                </Tab>
            </TabbedShowLayout>
            <EmployeeSelectionModal open={open} onClose={handleCloseModal} projectId={projectId} />
        </Show>
    );
};

export default ProjectShow;