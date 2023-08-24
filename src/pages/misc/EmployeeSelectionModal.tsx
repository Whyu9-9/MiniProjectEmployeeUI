import * as React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Checkbox,
    Button,
} from '@mui/material';
import {
    useDataProvider,
    useNotify,
    useRedirect
} from 'react-admin';

const EmployeeSelectionModal: React.FC<{
    open: boolean;
    onClose: () => void;
    projectId: number;
}> = ({ open, onClose, projectId }) => {
    const redirect = useRedirect();
    const dataProvider = useDataProvider();
    const [selectedEmployees, setSelectedEmployees] = React.useState<number[]>([]);
    const notify = useNotify();

    const handleCheckboxChange = (employeeId: number) => {
        setSelectedEmployees((prevSelected) =>
            prevSelected.includes(employeeId)
                ? prevSelected.filter((id) => id !== employeeId)
                : [...prevSelected, employeeId]
        );
    };

    const handleAddEmployees = async () => {
        try {
            await dataProvider.create('Project/project-employee', {
                data: {
                    projectId: projectId,
                    employeeId: selectedEmployees,
                },
            });

            setSelectedEmployees([]);
            onClose();

            redirect(`/Project`);
        } catch (error) {
            notify('Employee Already Added');
            console.error('Error adding employees:', error);
        }
    };

    // Fetch the list of employees from the API
    const fetchEmployees = async (projectId: number) => {
        try {
            // Fetch the existing employees for the given projectId
            const projectResponse = await dataProvider.getOne('Project', { id: projectId });
            const existingEmployeeIds = projectResponse.data.employees.map((employee: { id: any; }) => employee.id);

            // Fetch employees not yet added to the project
            const response = await dataProvider.getList('Employee', {
                pagination: { page: 1, perPage: 100 }, // Adjust perPage as needed
                sort: { field: 'name', order: 'ASC' },
                filter: {},
            });

            const filteredResponse = response.data.filter((employee) => !existingEmployeeIds.includes(employee.id));

            return filteredResponse;
        } catch (error) {
            console.error('Error fetching employees:', error);
            return [];
        }
    };

    const [employeeData, setEmployeeData] = React.useState([]);

    React.useEffect(() => {
        fetchEmployees(projectId).then((data: any) => setEmployeeData(data));
    });

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Select Employees to Add to Project</DialogTitle>
            <DialogContent>
                {employeeData.length === 0 ? (
                    <p>No employee data available.</p>
                ) : (
                    employeeData.map((employee: any) => (
                        <div key={employee.id}>
                            <Checkbox
                                checked={selectedEmployees.includes(employee.id)}
                                onChange={() => handleCheckboxChange(employee.id)}
                            />
                            {employee.name}
                        </div>
                    ))
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleAddEmployees} color="primary">
                    Add Employee
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EmployeeSelectionModal;