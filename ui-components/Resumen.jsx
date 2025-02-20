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
                <TextField
                    label="Fecha Tasacion"
                    value={data.form.fechaTasacion || "N/A"}
                    isReadOnly
                />
                <TextField
                    label="Service Desk"
                    value={data.form.serviceDesk || "N/A"}
                    isReadOnly
                />
                <TextField
                    label="Tipo Tasacion"
                    value={data.form.tipoTasacion || "N/A"}
                    isReadOnly
                />
                <TextField
                    label="Ubicacion"
                    value={data.form.ubicacion || "N/A"}
                    isReadOnly
                />

                <Heading level={4}>Aspectos del Solicitante</Heading>
                <TextField
                    label="Propietario"
                    value={data.form.propietario || "N/A"}
                    isReadOnly
                />
                <TextField
                    label="Nombre Solicitante"
                    value={data.form.nombreSolicitante || "N/A"}
                    isReadOnly
                />
                <TextField
                    label="Apellido Solicitante"
                    value={data.form.apellidoSolicitante || "N/A"}
                    isReadOnly
                />

                <Heading level={4}>Aspectos Legales</Heading>
                <TextField
                    label="Número de Certificación de Título"
                    value={data.form.numeroTitulo || "N/A"}
                    isReadOnly
                />
                <TextField
                    label="Constancia Venta"
                    value={data.form.constanciaVenta || "N/A"}
                    isReadOnly
                />

                <Heading level={4}>Características del Sector</Heading>
                <TextField
                    label="Localidad"
                    value={data.form.localidad || "N/A"}
                    isReadOnly
                />
                <TextField
                    label="Desarrollo"
                    value={data.form.desarrollo || "N/A"}
                    isReadOnly
                />

                <Heading level={4}>Valor del Inmueble</Heading>
                <TextField
                    label="Valor Inmueble"
                    value={data.form.valorInmueble || "N/A"}
                    isReadOnly
                />

                <Heading level={4}>Comentario Tasadores</Heading>
                <TextAreaField
                    label="Comentario"
                    value={data.form.comentario || "N/A"}
                    isReadOnly
                />
            </div>
        ) : (
            <Label>No data</Label>
        )
      }
    </Grid>
);
}
