import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Dashboard: React.FC = () => {
    return (
        <Card style={{ marginTop: '20px' }}>
            <CardContent>
                <h1>Welcome to the administration</h1>
                <p>Lorem ipsum sic dolor amet...</p>
            </CardContent>
        </Card>
    );
}

export default Dashboard;