import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Dashboard: React.FC = () => {
    return (
        <Card style={{ marginTop: '20px' }}>
            <CardContent>
                <h1>Dashboard</h1>
                <p>Employee and Project Management UI</p>
            </CardContent>
        </Card>
    );
}

export default Dashboard;