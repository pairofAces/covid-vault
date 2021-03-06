import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, total, ...props }) {
    return (
        <Card className={`infoBox ${active && 'infoBox--selected'}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className="infoBox_cases">{cases}</h2>
                <Typography className="infoBox_total" color="textSecondary">
                    Total Cases: {total}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default InfoBox;
