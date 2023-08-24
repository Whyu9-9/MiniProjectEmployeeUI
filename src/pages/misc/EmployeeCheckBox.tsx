import * as React from 'react';
import {
    CheckboxGroupInput,
    Loading,
    useDataProvider,
} from 'react-admin';

interface Options {
    id: number;
    name: string;
}

const CheckboxGroupInputWithData: React.FC = () => {
    const dataProvider = useDataProvider();
    const [options, setOptions] = React.useState<Options[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await dataProvider.getList('Employee', {
                    pagination: { page: 1, perPage: 100 }, // Adjust perPage as needed
                    sort: { field: 'name', order: 'ASC' },
                    filter: {}
                });

                setOptions(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchOptions();
    }, [dataProvider]);

    if (loading) return <Loading />;

    return (
        <CheckboxGroupInput
            source="Select Employee to add to project"
            choices={options}
            optionValue="id"
            optionText="name"
        />
    );
};

export default CheckboxGroupInputWithData;