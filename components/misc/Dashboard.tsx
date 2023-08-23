import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const Dashboard: React.FC = () => {
    return (
        <Card style={{ marginTop: '20px' }}>
            <CardHeader title="Dashboard"></CardHeader>
            <CardContent>
                Employee and Project Management UI
            </CardContent>
        </Card>
    );
}

export default Dashboard;