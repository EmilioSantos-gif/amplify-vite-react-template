"use client";
import * as React from "react";
import {
    Button,
    Flex,
    Grid,
    SwitchField,
    TextField,
    TextAreaField,
    Heading,
    SelectField,
    Label
  } from "@aws-amplify/ui-react";

  import { useLocation } from "react-router-dom";


export default function Resumen(props) {
  const location = useLocation();
  const data = location.state;


return (
    <Grid
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        marginLeft="100px" >
      <Heading level={3}>Resumen de la Tasación</Heading>
      {
        data? (
            <div>
                
            </div>
        ) : (
            <Label>No data</Label>
        )
      }
    </Grid>
);
}