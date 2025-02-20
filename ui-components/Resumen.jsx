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

  const sectionsHeadingSize = 3;
  const attributesHeadingSize = 6;


return (
    <Grid
        rowGap="15px"
        columnGap="15px"
        padding="20px"
        marginLeft="20px"
        width="800px" >
      <Heading level={3}>Resumen de la Tasación</Heading>
      {
        data? (
            <Grid width="800px" rowGap="1rem">
                <Heading level={sectionsHeadingSize}>Generalidades</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Fecha Tasación</Heading>
                    <Label>{data.form?.fechaTasacion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Service Desk</Heading>
                    <Label>{data.form?.serviceDesk || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Tipo Tasación</Heading>
                    <Label>{data.form?.tipoTasacion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Ubicación</Heading>
                    <Label>{data.form?.ubicacion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Pisos</Heading>
                    <Label>{data.form?.pisos || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Tipo</Heading>
                    <Label>{data.form?.tipo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Entidad Bancaria</Heading>
                    <Label>{data.form?.entidadBancaria || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Ubicación Terreno</Heading>
                    <Label>{data.form?.ubicacionTerreno || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Detalles del Inmueble</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Condominio</Heading>
                    <Label>{data.form?.condominio || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Dirección Inmueble</Heading>
                    <Label>{data.form?.direccionInmueble || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Bloque</Heading>
                    <Label>{data.form?.bloque || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Etapa</Heading>
                    <Label>{data.form?.etapa || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Manzana</Heading>
                    <Label>{data.form?.manzana || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Edificio No</Heading>
                    <Label>{data.form?.edificioNo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Tipo Edificio</Heading>
                    <Label>{data.form?.tipoEdificio || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Aspectos Legales</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Designación Catastral</Heading>
                    <Label>{data.form?.designacionCatastral || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Libro No</Heading>
                    <Label>{data.form?.libroNo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Folio No</Heading>
                    <Label>{data.form?.folioNo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Parcela</Heading>
                    <Label>{data.form?.parcela || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Solar</Heading>
                    <Label>{data.form?.solar || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Manzana Legal</Heading>
                    <Label>{data.form?.manzanaLegal || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>DC</Heading>
                    <Label>{data.form?.dc || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Características del Sector</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Tipología Vecindario</Heading>
                    <Label>{data.form?.tipologiaVecindario || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Clase Social</Heading>
                    <Label>{data.form?.claseSocial || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Infraestructura</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Aceras</Heading>
                    <Label>{data.form?.aceras ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Contenes</Heading>
                    <Label>{data.form?.contenes ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Calles Asfaltadas</Heading>
                    <Label>{data.form?.callesAsfaltadas ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Alcantarillado</Heading>
                    <Label>{data.form?.alcantarillado ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Agua Potable</Heading>
                    <Label>{data.form?.aguaPotable ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Alumbrado Eléctrico</Heading>
                    <Label>{data.form?.alumbradoElectrico ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Telecomunicaciones</Heading>
                    <Label>{data.form?.telecomunicaciones ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Transporte Público</Heading>
                    <Label>{data.form?.transportePublico ? "Sí" : "No"}</Label>
                    <Heading level={attributesHeadingSize}>Otros Infraestructura</Heading>
                    <Label>{data.form?.otrosInfraestructura ? "Sí" : "No"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Características del Terreno y Mejoras</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Área</Heading>
                    <Label>{data.form?.area || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Forma</Heading>
                    <Label>{data.form?.forma || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Topografía</Heading>
                    <Label>{data.form?.topografia || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Edad</Heading>
                    <Label>{data.form?.edad || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Nivel Edificación</Heading>
                    <Label>{data.form?.nivelEdificacion || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Distribución Interior</Heading>
                <Grid templateColumns="1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Descripción Interior</Heading>
                    <Label>{data.form?.descripcionInterior || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Terminaciones</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Pisos Interiores</Heading>
                    <Label>{data.form?.terminacionPisosInteriores || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Pisos Exteriores</Heading>
                    <Label>{data.form?.terminacionPisosExteriores || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Huellas</Heading>
                    <Label>{data.form?.terminacionHuellas || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Muros</Heading>
                    <Label>{data.form?.terminacionMuros || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Revestimiento</Heading>
                    <Label>{data.form?.terminacionRevestimiento || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Puerta Principal</Heading>
                    <Label>{data.form?.terminacionPuertaPrincipal || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Puertas Interiores</Heading>
                    <Label>{data.form?.terminacionPuertasInteriores || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Puertas Closet</Heading>
                    <Label>{data.form?.terminacionPuertasCloset || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Gabinetes</Heading>
                    <Label>{data.form?.terminacionGabinetes || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Tope Cocina</Heading>
                    <Label>{data.form?.terminacionTopeCocina || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Techo</Heading>
                    <Label>{data.form?.terminacionTecho || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Cornisa</Heading>
                    <Label>{data.form?.terminacionCornisa || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Plafones</Heading>
                    <Label>{data.form?.terminacionPlafones || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Ventanas</Heading>
                    <Label>{data.form?.terminacionVentanas || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Pasamanos</Heading>
                    <Label>{data.form?.terminacionPasamanos || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Valor del Inmueble</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Área Básico Terreno</Heading>
                    <Label>{data.form?.areaBasicoTerreno || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Costo Metro Básico Terreno</Heading>
                    <Label>{data.form?.costoMetroBasicoTerreno || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Área Básico Construcción</Heading>
                    <Label>{data.form?.areaBasicoConstruccion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Costo Metro Básico Construcción</Heading>
                    <Label>{data.form?.costoMetroBasicoConstruccion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Monto Depreciación</Heading>
                    <Label>{data.form?.montoDepreciacion || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Monto Mejoras</Heading>
                    <Label>{data.form?.montoMejoras || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Depreciación Mejoras</Heading>
                    <Label>{data.form?.depreciacionMejoras || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Área Parqueo</Heading>
                    <Label>{data.form?.areaParqueo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Costo Metro Parqueo</Heading>
                    <Label>{data.form?.costoMetroParqueo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Área Apartamento</Heading>
                    <Label>{data.form?.areaApartamento || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Costo Metro Apartamento</Heading>
                    <Label>{data.form?.costoMetroApartamento || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Área Terraza</Heading>
                    <Label>{data.form?.areaTerraza || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Costo Metro Terraza</Heading>
                    <Label>{data.form?.costoMetroTerraza || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Tasa Dólar</Heading>
                    <Label>{data.form?.tasaDolar || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Tiene Terraza</Heading>
                    <Label>{data.form?.tieneTerraza ? "Sí" : "No"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Comentario Tasadores</Heading>
                <Grid templateColumns="1fr" rowGap="0.5rem">
                    <Label>{data.form?.comentario || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Aspectos del Solicitante</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Propietario</Heading>
                    <Label>{data.form?.propietario || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Nombre Solicitante</Heading>
                    <Label>{data.form?.nombreSolicitante || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Apellido Solicitante</Heading>
                    <Label>{data.form?.apellidoSolicitante || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Aspectos Legales</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Número de Certificación de Título</Heading>
                    <Label>{data.form?.numeroTitulo || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Constancia Venta</Heading>
                    <Label>{data.form?.constanciaVenta || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Características del Sector</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Localidad</Heading>
                    <Label>{data.form?.localidad || "N/A"}</Label>
                    <Heading level={attributesHeadingSize}>Desarrollo</Heading>
                    <Label>{data.form?.desarrollo || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Valor del Inmueble</Heading>
                <Grid templateColumns="1fr 1fr" rowGap="0.5rem">
                    <Heading level={attributesHeadingSize}>Valor Inmueble</Heading>
                    <Label>{data.form?.valorInmueble || "N/A"}</Label>
                </Grid>

                <Heading level={sectionsHeadingSize}>Comentario Tasadores</Heading>
                <Grid templateColumns="1fr" rowGap="0.5rem">
                    <Label>{data.form?.comentario || "N/A"}</Label>
                </Grid>
            </Grid>
        ) : (
            <Label>No data</Label>
        )
      }
    </Grid>
);
}
