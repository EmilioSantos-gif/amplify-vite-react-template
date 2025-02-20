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
                <Heading level={4}>Generalidades</Heading>
                <Label>Fecha Tasacion: {data.form.fechaTasacion || "N/A"}</Label>
                <Label>Service Desk: {data.form.serviceDesk || "N/A"}</Label>
                <Label>Tipo Tasacion: {data.form.tipoTasacion || "N/A"}</Label>
                <Label>Ubicacion: {data.form.ubicacion || "N/A"}</Label>

                <Heading level={4}>Aspectos del Solicitante</Heading>
                <Label>Propietario: {data.form.propietario || "N/A"}</Label>
                <Label>Nombre Solicitante: {data.form.nombreSolicitante || "N/A"}</Label>
                <Label>Apellido Solicitante: {data.form.apellidoSolicitante || "N/A"}</Label>

                <Heading level={4}>Aspectos Legales</Heading>
                <Label>Número de Certificación de Título: {data.form.numeroTitulo || "N/A"}</Label>
                <Label>Constancia Venta: {data.form.constanciaVenta || "N/A"}</Label>

                <Heading level={4}>Características del Sector</Heading>
                <Label>Localidad: {data.form.localidad || "N/A"}</Label>
                <Label>Desarrollo: {data.form.desarrollo || "N/A"}</Label>

                <Heading level={4}>Valor del Inmueble</Heading>
                <Label>Valor Inmueble: {data.form.valorInmueble || "N/A"}</Label>

                <Heading level={4}>Comentario Tasadores</Heading>
                <Label>Comentario: {data.form.comentario || "N/A"}</Label>
            </div>
        ) : (
            <Label>No data</Label>
        )
      }
    </Grid>
);
}
