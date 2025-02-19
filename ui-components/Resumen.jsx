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
    SelectField
  } from "@aws-amplify/ui-react";

  import { useLocation } from "react-router-dom";


export default function Resumen(props) {

    const location = useLocation();
  const data = location.state;

return (
    <Grid
        rowGap="15px"
        columnGap="15px"
        padding="200px">
      <Heading level={5}>Datos de la Tasación</Heading>
      {
        data? (
            <p>{data.form?.tipoTasacion}</p>
        ) : (
            <p>No data</p>
        )
      }
    </Grid>
);

}
