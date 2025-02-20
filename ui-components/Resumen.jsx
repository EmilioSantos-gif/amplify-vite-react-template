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

  const attributesHeadingSize = 6;


return (
    <Grid
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        marginLeft="100px"
        width="800px" >
      <Heading level={3}>Resumen de la Tasación</Heading>
      {
        data? (
            <div>
                <Heading level={3}>Generalidades</Heading>
                <Grid templateColumns="1fr 1fr"  rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Tipo Tasación</Heading>
                    <Label>{data.form?.tipoTasacion || "N/A"}</Label>
                </Grid>
            </div>
        ) : (
            <Label>No data</Label>
        )
      }
    </Grid>
);
}
