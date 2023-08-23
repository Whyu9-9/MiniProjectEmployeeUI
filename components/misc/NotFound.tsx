import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';

const NotFound: React.FC = () => (
    <Card style={{ marginTop: '20px' }}>
        <Title title="Not Found" />
        <CardContent>
            <h1 style={{ margin: '0 auto', textAlign: 'center' }}>
                404: Page not found
            </h1>
        </CardContent>
    </Card>
);

export default NotFound;