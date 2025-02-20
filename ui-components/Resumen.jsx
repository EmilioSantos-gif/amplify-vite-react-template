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
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Fecha Tasación</Heading>
                    <Label>{data.form?.fechaTasacion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Service Desk</Heading>
                    <Label>{data.form?.serviceDesk || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Tipo Tasación</Heading>
                    <Label>{data.form?.tipoTasacion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Ubicación</Heading>
                    <Label>{data.form?.ubicacion || "N/A"}</Label>
                </Grid>

                <Heading level={3}>Aspectos del Solicitante</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Propietario</Heading>
                    <Label>{data.form?.propietario || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Nombre Solicitante</Heading>
                    <Label>{data.form?.nombreSolicitante || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Apellido Solicitante</Heading>
                    <Label>{data.form?.apellidoSolicitante || "N/A"}</Label>
                </Grid>

                <Heading level={3}>Aspectos Legales</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Número de Certificación de Título</Heading>
                    <Label>{data.form?.numeroTitulo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Constancia Venta</Heading>
                    <Label>{data.form?.constanciaVenta || "N/A"}</Label>
                </Grid>

                <Heading level={3}>Características del Sector</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Localidad</Heading>
                    <Label>{data.form?.localidad || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Desarrollo</Heading>
                    <Label>{data.form?.desarrollo || "N/A"}</Label>
                </Grid>

                <Heading level={3}>Valor del Inmueble</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Valor Inmueble</Heading>
                    <Label>{data.form?.valorInmueble || "N/A"}</Label>
                </Grid>

                <Heading level={3}>Comentario Tasadores</Heading>
                <Grid templateColumns="1fr" rowGap="0.5rem">
                    <Label>{data.form?.comentario || "N/A"}</Label>
                </Grid>
            </div>
        ) : (
            <Label>No data</Label>
        )
      }
    </Grid>
);
}
