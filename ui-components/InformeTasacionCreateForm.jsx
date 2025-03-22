/* eslint-disable */
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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInformeTasacion, updateInformeTasacion } from "./graphql/mutations";
import CurrencyInput from "react-currency-input-field";
import { useNavigate, Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { downloadInforme, downloadPresentacion } from "./utils/downloads";


const currencyOptions = [
  { code: "DOP", symbol: "RD$", desc: "Peso dominicano"},
  { code: "USD", symbol: "USD$", desc: "Dólar estadounidense" },
];

const tiposTasacion = [
  "Apartamento",
  "Casa",
  "Solar",
  "Villa",
  "Town house",
  "Promesa de venta"
]

const client = generateClient();

const initialValues = {
  fechaTasacion: "",
  serviceDesk: "",
  tipoTasacion: "",
  pisos: "",
  tipo: "",
  entidadBancaria: "",
  tipoTopologia: "",
  ubicacion: "",
  ubicacionTerreno: "",
  propietario: "",
  solicitantes: [{ nombre: "", apellido: "" }],
  condominio: "",
  direccionInmueble: "",
  bloque: "",
  etapa: "",
  manzana: "",
  edificioNo: "",
  tipoEdificio: "",
  numeroTitulo: "",
  constanciaVenta: "",
  designacionCatastral: "",
  libroNo: "",
  folioNo: "",
  parcela: "",
  solar: "",
  manzanaLegal: "",
  dc: "",
  localidad: "",
  desarrollo: "",
  tipologiaVecindario: "",
  claseSocial: "",
  aceras: false,
  contenes: false,
  callesAsfaltadas: false,
  alcantarillado: false,
  aguaPotable: false,
  alumbradoElectrico: false,
  telecomunicaciones: false,
  transportePublico: false,
  otrosInfraestructura: false,
  area: "",
  forma: "",
  topografia: "",
  edad: "",
  nivelEdificacion: "",
  descripcionInterior: "",
  terminacionPisosInteriores: "",
  terminacionPisosExteriores: "",
  terminacionHuellas: "",
  terminacionMuros: "",
  terminacionRevestimiento: "",
  terminacionPuertaPrincipal: "",
  terminacionPuertasInteriores: "",
  terminacionPuertasCloset: "",
  terminacionGabinetes: "",
  terminacionTopeCocina: "",
  terminacionTecho: "",
  terminacionCornisa: "",
  terminacionPlafones: "",
  terminacionVentanas: "",
  terminacionPasamanos: "",
  areaBasicoTerreno: "",
  costoMetroBasicoTerreno: "",
  areaBasicoConstruccion: "",
  costoMetroBasicoConstruccion: "",
  montoDepreciacion: "",
  montoMejoras: "",
  depreciacionMejoras: "",
  valorInmueble: "",
  comentario: "",
  areaParqueo: "",
  costoMetroParqueo: "",
  areaApartamento: "",
  costoMetroApartamento: "",
  areaTerraza: "",
  costoMetroTerraza: "",
  tasaDolar: "",
  tieneTerraza: false
};

const CurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "DOP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const NumericFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: false,
});


export default function InformeTasacionCreateForm(props) {

  const titleHeadingLevel = 3;
  const sectionsHeadingLevel = titleHeadingLevel + 1;
  const subSectionsHeadingLevel = sectionsHeadingLevel + 1;

  const {
    clearOnSuccess = false,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;

  const { id } = useParams();
  const [formData, setFormData] = React.useState({
    ...initialValues,
    solicitantes: initialValues.solicitantes || [{ nombre: "", apellido: "" }],
  });

  useEffect(() => {
    if (id) {
      fetchInforme(id);
    }
  }, [id]);

  const fetchInforme = async (id) => {
    const { data } = await client.models.InformeTasacion.get({ id });

    let arregloSolicitantes = data.solicitantes.map(solicitante => JSON.parse(solicitante));
  
    setFormData(data);
    setSolicitantes(arregloSolicitantes);
  };

  const [solicitantes, setSolicitantes] = React.useState([{nombre: "", apellido: ""}]);

  const [errors, setErrors] = React.useState({});

  const [currency, setCurrency] = React.useState("DOP");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleSnackbarClose = (event, reason) => {
    /*
    if (reason === 'clickaway') {
      return;
    }
    */
    setSnackbarOpen(false);
  };

  const totalTerreno = formData.areaBasicoTerreno * formData.costoMetroBasicoTerreno;
  const totalConstruccion = formData.areaBasicoConstruccion * formData.costoMetroBasicoConstruccion;

  const totalParqueo = formData.areaParqueo * formData.costoMetroParqueo;
  const totalApartamento = formData.areaApartamento * formData.costoMetroApartamento;
  const totalTerraza = formData.areaTerraza * formData.costoMetroTerraza;
  formData.valorInmueble = formData.areaParqueo * formData.costoMetroParqueo
  + formData.areaApartamento * formData.costoMetroApartamento
  + formData.areaTerraza * formData.costoMetroTerraza;

  const totalInmuebleApartamento = formData.areaParqueo * formData.costoMetroParqueo
  + formData.areaApartamento * formData.costoMetroApartamento
  + formData.areaTerraza * formData.costoMetroTerraza;

  const resetStateValues = () => {
    setFormData(initialValues);
    setErrors({});
  };

  const validations = {
    fechaTasacion: [],
    serviceDesk: [],
    tipoTasacion: [],
    pisos: [],
    tipo: [],
    entidadBancaria: [],
    tipoTopologia: [],
    ubicacion: [],
    ubicacionTerreno: [],
    propietario: [],
    solicitantes: [],
    condominio: [],
    direccionInmueble: [],
    bloque: [],
    etapa: [],
    manzana: [],
    edificioNo: [],
    tipoEdificio: [],
    numeroTitulo: [],
    constanciaVenta: [],
    designacionCatastral: [],
    libroNo: [],
    folioNo: [],
    parcela: [],
    solar: [],
    manzanaLegal: [],
    dc: [],
    localidad: [],
    desarrollo: [],
    tipologiaVecindario: [],
    claseSocial: [],
    aceras: [],
    contenes: [],
    callesAsfaltadas: [],
    alcantarillado: [],
    aguaPotable: [],
    alumbradoElectrico: [],
    telecomunicaciones: [],
    transportePublico: [],
    otrosInfraestructura: [],
    area: [],
    forma: [],
    topografia: [],
    edad: [],
    nivelEdificacion: [],
    descripcionInterior: [],
    terminacionPisosInteriores: [],
    terminacionPisosExteriores: [],
    terminacionHuellas: [],
    terminacionMuros: [],
    terminacionRevestimiento: [],
    terminacionPuertaPrincipal: [],
    terminacionPuertasInteriores: [],
    terminacionPuertasCloset: [],
    terminacionGabinetes: [],
    terminacionTopeCocina: [],
    terminacionTecho: [],
    terminacionCornisa: [],
    terminacionPlafones: [],
    terminacionVentanas: [],
    terminacionPasamanos: [],
    areaBasicoTerreno: [],
    costoMetroBasicoTerreno: [],
    areaBasicoConstruccion: [],
    costoMetroBasicoConstruccion: [],
    montoDepreciacion: [],
    montoMejoras: [],
    depreciacionMejoras: [],
    valorInmueble: [],
    comentario: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  const handleSolicitanteChange = (index, field, value) => {
    const updatedSolicitantes = solicitantes.map((solicitante, i) =>
      i === index ? { ...solicitante, [field]: value } : solicitante
    );

    setSolicitantes(updatedSolicitantes);
    //setFormData({ ...formData, solicitantes: updatedSolicitantes });
  };

  const addSolicitante = () => {
    const nuevoSolicitante  = { nombre: "", apellido: "" };
    setSolicitantes(solicitantes => [...solicitantes, nuevoSolicitante])
  };

  const removeSolicitante = (index) => {
    const updatedSolicitantes = solicitantes.filter(
      (_, i) => i !== index
    );

    setSolicitantes(updatedSolicitantes);
    //setFormData({ ...formData, solicitantes: updatedSolicitantes });

    // if (onChange) {
    //   const result = onChange(updatedFields);
    //   updatedFields = result ?? updatedFields;
    // }

    // if (errors?.[name]?.hasError) {
    //   runValidationTasks(name, value);
    // }

    //setFormData(updatedFields);
  };

  const handleFieldChange = (e) => {                                                                                                                                    
    const { attributes, value, type, checked } = e.target;                                                                                                              
                                                                                                                                                                        
    let updatedFields = {                                                                                                                                               
      ...formData,                                                                                                                                                      
      [attributes.id.value]: type === "checkbox" ? checked : value,                                                                                                     
    };

    setFormData(updatedFields);
  }

  const handleDecimalInputChange = (e) => {
    const { attributes, value, type, checked } = e.target;

    const parsedValue = value.replace(/[^\d.]/g, '');
    
    let updatedFields = {
      ...formData,
      [attributes.id.value]: parsedValue,
    };

    setFormData(updatedFields);
  };

  const handleValueChange = (val) => {
    setFormData((prev) => ({
      ...prev,
      costoMetroBasicoTerreno: val || "", // Ensure it doesn't set `null`
    }));
  };
  

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      maxWidth="800px"
      onSubmit={async (event) => {
        event.preventDefault();

        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(formData[fieldName])) {
              promises.push(
                ...formData[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(runValidationTasks(fieldName, formData[fieldName]));
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          setFormData(onSubmit(formData));
        }
        try {
          Object.entries(formData).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              formData[key] = null;
            }
          });

          let solicitantesFormateados = [];
          solicitantesFormateados = solicitantes.map((solicitante) => JSON.stringify(solicitante));
      
          
          if (id) {
            const {createdAt, updatedAt, owner, ...filteredFormData} = formData;
            await client.graphql({
              query: updateInformeTasacion.replaceAll("__typename", ""),
              variables: {
                input: {
                  id,
                  ...filteredFormData,
                  solicitantes: solicitantesFormateados
                },
              },
            });
          } else {
            
            await client.graphql({
              query: createInformeTasacion.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...formData,
                  solicitantes: solicitantesFormateados
                },
              },
            });
          }
          setSnackbarOpen(true);
          if (onSuccess) {
            onSuccess(formData);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          console.log(err);
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(formData, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InformeTasacionCreateForm")}
      {...rest}
    >

      <Link hidden={true} to="/resumen" state={ {form: formData} }>
        Go to Resumen
      </Link>

      <Heading level={titleHeadingLevel}>Datos de la Tasación</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap="1rem">
        <SelectField
          label="Tipo tasacion"
          id="tipoTasacion"
          isRequired={true}
          isReadOnly={false}
          value={formData.tipoTasacion}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("tipoTasacion", formData.tipoTasacion)}
          errorMessage={errors.tipoTasacion?.errorMessage}
          hasError={errors.tipoTasacion?.hasError}
          {...getOverrideProps(overrides, "tipoTasacion")}
        >
          <option key={""} value={""}>
            {"---- Seleccione una opción ----"}
          </option>
          {tiposTasacion.map((tipo) => (
            <option key={tipo} value={tipo}>
            {tipo}
            </option>
          ))}
        </SelectField>

        <TextField
          id="condominio"
          label="Condominio"
          isRequired={false}
          isReadOnly={false}
          value={formData.condominio}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("condominio", formData.condominio)}
          errorMessage={errors.condominio?.errorMessage}
          hasError={errors.condominio?.hasError}
          {...getOverrideProps(overrides, "condominio")}
        ></TextField>
        <TextField
          id="bloque"
          label="Bloque"
          isRequired={false}
          isReadOnly={false}
          value={formData.bloque}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("bloque", formData.bloque)}
          errorMessage={errors.bloque?.errorMessage}
          hasError={errors.bloque?.hasError}
          {...getOverrideProps(overrides, "bloque")}
        ></TextField>

        <TextField
          id="pisos"
          label="Pisos"
          isRequired={false}
          isReadOnly={false}
          value={formData.pisos}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("pisos", formData.pisos)}
          errorMessage={errors.pisos?.errorMessage}
          hasError={errors.pisos?.hasError}
          {...getOverrideProps(overrides, "pisos")}
        ></TextField>

      </Grid>


      <TextField
        id="entidadBancaria"
        label="Entidad bancaria"
        isRequired={false}
        isReadOnly={false}
        value={formData.entidadBancaria}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks("entidadBancaria", formData.entidadBancaria)
        }
        errorMessage={errors.entidadBancaria?.errorMessage}
        hasError={errors.entidadBancaria?.hasError}
        {...getOverrideProps(overrides, "entidadBancaria")}
      ></TextField>
      <Heading level={sectionsHeadingLevel}>Generalidades</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap="1rem">

      <TextField
        id="fechaTasacion"
        label="Fecha tasacion"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={formData.fechaTasacion}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks("fechaTasacion", formData.fechaTasacion)
        }
        errorMessage={errors.fechaTasacion?.errorMessage}
        hasError={errors.fechaTasacion?.hasError}
        {...getOverrideProps(overrides, "fechaTasacion")}
      ></TextField>

      <TextField
        id="serviceDesk"
        label="Service desk"
        isRequired={false}
        isReadOnly={false}
        value={formData.serviceDesk}
        // onChange={handleFieldChange}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("serviceDesk", formData.serviceDesk)}
        errorMessage={errors.serviceDesk?.errorMessage}
        hasError={errors.serviceDesk?.hasError}
        {...getOverrideProps(overrides, "serviceDesk")}
      ></TextField>

      <TextField
        id="tipo"
        label="Tipo"
        isRequired={false}
        isReadOnly={false}
        value={formData.tipo}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("tipo", formData.tipo)}
        errorMessage={errors.tipo?.errorMessage}
        hasError={errors.tipo?.hasError}
        {...getOverrideProps(overrides, "tipo")}
      ></TextField>


      <TextField
        id="ubicacion"
        label="Ubicacion"
        isRequired={false}
        isReadOnly={false}
        value={formData.ubicacion}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("ubicacion", formData.ubicacion)}
        errorMessage={errors.ubicacion?.errorMessage}
        hasError={errors.ubicacion?.hasError}
        {...getOverrideProps(overrides, "ubicacion")}
      ></TextField>

      </Grid>

      <Heading level={sectionsHeadingLevel}>Aspectos del Solicitante</Heading>

      <TextField
        id="propietario"
        label="Propietario"
        isRequired={false}
        isReadOnly={false}
        value={formData.propietario}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("propietario", formData.propietario)}
        errorMessage={errors.propietario?.errorMessage}
        hasError={errors.propietario?.hasError}
        {...getOverrideProps(overrides, "propietario")}
      ></TextField>

        {(solicitantes || []).map((solicitante, index) => (
          <Grid key={index} templateColumns="3fr 3fr 0.5fr" gap="1rem">
            <TextField
              label={`Nombre solicitante ${index + 1}`}
              value={solicitante.nombre}
              onChange={(e) =>
                handleSolicitanteChange(index, "nombre", e.target.value)
              }
              onBlur={() =>
                runValidationTasks(`solicitantes`, solicitante.nombre)
              }
              errorMessage={errors.solicitantes?.[index]?.nombre?.errorMessage}
              hasError={errors.solicitantes?.[index]?.nombre?.hasError}
            />
            <TextField
              label={`Apellido solicitante ${index + 1}`}
              value={solicitante.apellido}
              onChange={(e) =>
                handleSolicitanteChange(index, "apellido", e.target.value)
              }
              onBlur={() =>
                runValidationTasks(`solicitantes`, solicitante.apellido)
              }
              errorMessage={errors.solicitantes?.[index]?.apellido?.errorMessage}
              hasError={errors.solicitantes?.[index]?.apellido?.hasError}
            />
            <div className="amplify-flex amplify-field amplify-textfield">
              <Label htmlFor="" >&#8203;</Label>
              <Button
                colorTheme="error"
                onClick={() => removeSolicitante(index)}
                disabled={solicitantes.length === 1}
              >
                Borrar
              </Button>
            </div>
          </Grid>
        ))}
      <Button variation="primary" colorTheme="info" onClick={addSolicitante}>Agregar solicitante</Button>
      
      <TextAreaField
        id="direccionInmueble"
        label="Dirección inmueble"
        isRequired={false}
        isReadOnly={false}
        value={formData.direccionInmueble}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks("direccionInmueble", formData.direccionInmueble)
        }
        errorMessage={errors.direccionInmueble?.errorMessage}
        hasError={errors.direccionInmueble?.hasError}
        {...getOverrideProps(overrides, "direccionInmueble")}
      />

      <Flex
        direction="row">
          <TextField
            id="etapa"
            label="Etapa"
            isRequired={false}
            isReadOnly={false}
            value={formData.etapa}
            onChange={handleFieldChange}
            onBlur={() => runValidationTasks("etapa", formData.etapa)}
            errorMessage={errors.etapa?.errorMessage}
            hasError={errors.etapa?.hasError}
            {...getOverrideProps(overrides, "etapa")}
          ></TextField>

        <TextField
          id="manzana"
          label="Manzana"
          isRequired={false}
          isReadOnly={false}
          value={formData.manzana}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("manzana", formData.manzana)}
          errorMessage={errors.manzana?.errorMessage}
          hasError={errors.manzana?.hasError}
          {...getOverrideProps(overrides, "manzana")}
        ></TextField>

  
        <TextField
          id="edificioNo"
          label="Edificio No."
          isRequired={false}
          isReadOnly={false}
          value={formData.edificioNo}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("edificioNo", formData.edificioNo)}
          errorMessage={errors.edificioNo?.errorMessage}
          hasError={errors.edificioNo?.hasError}
          {...getOverrideProps(overrides, "edificioNo")}
        ></TextField>
        <TextField
          id="tipoEdificio"
          label="Tipo edificio"
          isRequired={false}
          isReadOnly={false}
          value={formData.tipoEdificio}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("tipoEdificio", formData.tipoEdificio)}
          errorMessage={errors.tipoEdificio?.errorMessage}
          hasError={errors.tipoEdificio?.hasError}
          {...getOverrideProps(overrides, "tipoEdificio")}
        ></TextField>
        
      </Flex>
      <Heading level={4}>Aspectos Legales</Heading>

      <Grid templateColumns="2fr 1fr" gap="1rem">
        <TextField
          id="numeroTitulo"
          label="Número de certificación de título"
          isRequired={false}
          isReadOnly={false}
          value={formData.numeroTitulo}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("numeroTitulo", formData.numeroTitulo)
          }
          errorMessage={errors.numeroTitulo?.errorMessage}
          hasError={errors.numeroTitulo?.hasError}
          {...getOverrideProps(overrides, "numeroTitulo")}
        ></TextField>
        <TextField
          id="constanciaVenta"
          label="Constancia venta"
          isRequired={false}
          isReadOnly={false}
          value={formData.constanciaVenta}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("constanciaVenta", formData.constanciaVenta)
          }
          errorMessage={errors.constanciaVenta?.errorMessage}
          hasError={errors.constanciaVenta?.hasError}
          {...getOverrideProps(overrides, "constanciaVenta")}
        ></TextField>

      </Grid>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap="1rem"
      >
        <TextField
          id="designacionCatastral"
          label="Designacion catastral"
          isRequired={false}
          isReadOnly={false}
          value={formData.designacionCatastral}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks(
              "designacionCatastral",
              formData.designacionCatastral
            )
          }
          errorMessage={errors.designacionCatastral?.errorMessage}
          hasError={errors.designacionCatastral?.hasError}
          {...getOverrideProps(overrides, "designacionCatastral")}
        ></TextField>
        <TextField
          id="libroNo"
          label="Libro no"
          isRequired={false}
          isReadOnly={false}
          value={formData.libroNo}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("libroNo", formData.libroNo)}
          errorMessage={errors.libroNo?.errorMessage}
          hasError={errors.libroNo?.hasError}
          {...getOverrideProps(overrides, "libroNo")}
        ></TextField>
        <TextField
          id="folioNo"
          label="Folio no"
          isRequired={false}
          isReadOnly={false}
          value={formData.folioNo}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("folioNo", formData.folioNo)}
          errorMessage={errors.folioNo?.errorMessage}
          hasError={errors.folioNo?.hasError}
          {...getOverrideProps(overrides, "folioNo")}
        ></TextField>

      </Grid>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="1rem"
      >
        <TextField
          id="parcela"
          label="Parcela"
          isRequired={false}
          isReadOnly={false}
          value={formData.parcela}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("parcela", formData.parcela)}
          errorMessage={errors.parcela?.errorMessage}
          hasError={errors.parcela?.hasError}
          {...getOverrideProps(overrides, "parcela")}
        ></TextField>
        <TextField
          id="solar"
          label="Solar"
          isRequired={false}
          isReadOnly={false}
          value={formData.solar}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("solar", formData.solar)}
          errorMessage={errors.solar?.errorMessage}
          hasError={errors.solar?.hasError}
          {...getOverrideProps(overrides, "solar")}
        ></TextField>

        <TextField
          id="manzanaLegal"
          label="Manzana legal"
          isRequired={false}
          isReadOnly={false}
          value={formData.manzanaLegal}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("manzanaLegal", formData.manzanaLegal)
          }
          errorMessage={errors.manzanaLegal?.errorMessage}
          hasError={errors.manzanaLegal?.hasError}
          {...getOverrideProps(overrides, "manzanaLegal")}
        ></TextField>

        <TextField
          id="dc"
          label="Dc"
          isRequired={false}
          isReadOnly={false}
          value={formData.dc}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("dc", formData.dc)}
          errorMessage={errors.dc?.errorMessage}
          hasError={errors.dc?.hasError}
          {...getOverrideProps(overrides, "dc")}
        ></TextField>
      </Grid>

      <Heading level={4}>Características del Sector</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap="1rem">
        <TextField
          id="localidad"
          label="Localidad"
          isRequired={false}
          isReadOnly={false}
          value={formData.localidad}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("localidad", formData.localidad)}
          errorMessage={errors.localidad?.errorMessage}
          hasError={errors.localidad?.hasError}
          {...getOverrideProps(overrides, "localidad")}
        ></TextField>
        <TextField
          id="desarrollo"
          label="Desarrollo"
          isRequired={false}
          isReadOnly={false}
          value={formData.desarrollo}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("desarrollo", formData.desarrollo)}
          errorMessage={errors.desarrollo?.errorMessage}
          hasError={errors.desarrollo?.hasError}
          {...getOverrideProps(overrides, "desarrollo")}
        ></TextField>

        <TextField
          id="tipologiaVecindario"
          label="Tipologia vecindario"
          isRequired={false}
          isReadOnly={false}
          value={formData.tipologiaVecindario}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks(
              "tipologiaVecindario",
              formData.tipologiaVecindario
            )
          }
          errorMessage={errors.tipologiaVecindario?.errorMessage}
          hasError={errors.tipologiaVecindario?.hasError}
          {...getOverrideProps(overrides, "tipologiaVecindario")}
        ></TextField>
        <TextField
          id="claseSocial"
          label="Clase social"
          isRequired={false}
          isReadOnly={false}
          value={formData.claseSocial}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("claseSocial", formData.claseSocial)}
          errorMessage={errors.claseSocial?.errorMessage}
          hasError={errors.claseSocial?.hasError}
          {...getOverrideProps(overrides, "claseSocial")}
        ></TextField>
      </Grid>
      <Heading level={5}>Infraestructura</Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
        <SwitchField
          id="aceras"
          labelPosition="end"
          label="Aceras"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.aceras}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("aceras", formData.aceras)}
          errorMessage={errors.aceras?.errorMessage}
          hasError={errors.aceras?.hasError}
          {...getOverrideProps(overrides, "aceras")}
        ></SwitchField>

        <SwitchField
          id="contenes"
          labelPosition="end"
          label="Contenes"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.contenes}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("contenes", formData.contenes)}
          errorMessage={errors.contenes?.errorMessage}
          hasError={errors.contenes?.hasError}
          {...getOverrideProps(overrides, "contenes")}
        ></SwitchField>
        <SwitchField
          id="callesAsfaltadas"
          labelPosition="end"
          label="Calles asfaltadas"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.callesAsfaltadas}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("callesAsfaltadas", formData.callesAsfaltadas)
          }
          errorMessage={errors.callesAsfaltadas?.errorMessage}
          hasError={errors.callesAsfaltadas?.hasError}
          {...getOverrideProps(overrides, "callesAsfaltadas")}
        ></SwitchField>

        <SwitchField
          id="alcantarillado"
          labelPosition="end"
          label="Alcantarillado"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.alcantarillado}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("alcantarillado", formData.alcantarillado)
          }
          errorMessage={errors.alcantarillado?.errorMessage}
          hasError={errors.alcantarillado?.hasError}
          {...getOverrideProps(overrides, "alcantarillado")}
        ></SwitchField>
        <SwitchField
          id="aguaPotable"
          labelPosition="end"
          label="Agua potable"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.aguaPotable}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("aguaPotable", formData.aguaPotable)}
          errorMessage={errors.aguaPotable?.errorMessage}
          hasError={errors.aguaPotable?.hasError}
          {...getOverrideProps(overrides, "aguaPotable")}
        ></SwitchField>

        <SwitchField
          id="alumbradoElectrico"
          labelPosition="end"
          label="Alumbrado electrico"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.alumbradoElectrico}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks(
              "alumbradoElectrico",
              formData.alumbradoElectrico
            )
          }
          errorMessage={errors.alumbradoElectrico?.errorMessage}
          hasError={errors.alumbradoElectrico?.hasError}
          {...getOverrideProps(overrides, "alumbradoElectrico")}
        ></SwitchField>
        <SwitchField
          id="telecomunicaciones"
          labelPosition="end"
          label="Telecomunicaciones"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.telecomunicaciones}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks(
              "telecomunicaciones",
              formData.telecomunicaciones
            )
          }
          errorMessage={errors.telecomunicaciones?.errorMessage}
          hasError={errors.telecomunicaciones?.hasError}
          {...getOverrideProps(overrides, "telecomunicaciones")}
        ></SwitchField>

        <SwitchField
          id="transportePublico"
          labelPosition="end"
          label="Transporte publico"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.transportePublico}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("transportePublico", formData.transportePublico)
          }
          errorMessage={errors.transportePublico?.errorMessage}
          hasError={errors.transportePublico?.hasError}
          {...getOverrideProps(overrides, "transportePublico")}
        ></SwitchField>
        <SwitchField
          id="otrosInfraestructura"
          labelPosition="end"
          label="Otras"
          defaultChecked={false}
          isDisabled={false}
          isChecked={formData.otrosInfraestructura}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks(
              "otrosInfraestructura",
              formData.otrosInfraestructura
            )
          }
          errorMessage={errors.otrosInfraestructura?.errorMessage}
          hasError={errors.otrosInfraestructura?.hasError}
          {...getOverrideProps(overrides, "otrosInfraestructura")}
        ></SwitchField>
      </Grid>

      <Heading level={4}>Características del Terreno y Mejoras</Heading>

      <Heading level={5}>Terreno</Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
        <TextField
          id="area"
          label="Area"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={formData.area}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("area", formData.area)}
          errorMessage={errors.area?.errorMessage}
          hasError={errors.area?.hasError}
          {...getOverrideProps(overrides, "area")}
        ></TextField>
        <TextField
          id="forma"
          label="Forma"
          isRequired={false}
          isReadOnly={false}
          value={formData.forma}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("forma", formData.forma)}
          errorMessage={errors.forma?.errorMessage}
          hasError={errors.forma?.hasError}
          {...getOverrideProps(overrides, "forma")}
        ></TextField>

      <TextField
        id="topografia"
        label="Topografia"
        isRequired={false}
        isReadOnly={false}
        value={formData.topografia}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("topografia", formData.topografia)}
        errorMessage={errors.topografia?.errorMessage}
        hasError={errors.topografia?.hasError}
        {...getOverrideProps(overrides, "topografia")}
      ></TextField>
      </Grid>

      <TextField
        id="ubicacionTerreno"
        label="Ubicacion Terreno"
        isRequired={false}
        isReadOnly={false}
        value={formData.ubicacionTerreno}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks("ubicacionTerreno", formData.ubicacionTerreno)
        }
        errorMessage={errors.ubicacionTerreno?.errorMessage}
        hasError={errors.ubicacionTerreno?.hasError}
        {...getOverrideProps(overrides, "ubicacionTerreno")}
      ></TextField>

      <Heading level={5}>Topología y Altimetría</Heading>

      <TextField
        id="tipoTopologia"
        label="Tipo"
        isRequired={false}
        isReadOnly={false}
        value={formData.tipoTopologia}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks("tipoTopologia", formData.tipoTopologia)
        }
        errorMessage={errors.tipoTopologia?.errorMessage}
        hasError={errors.tipoTopologia?.hasError}
        {...getOverrideProps(overrides, "tipoTopologia")}
      ></TextField>

      <Grid templateColumns="1fr 1fr" gap="1rem">
        <TextField
          id="edad"
          label="Edad"
          isRequired={false}
          isReadOnly={false}
          value={formData.edad}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("edad", formData.edad)}
          errorMessage={errors.edad?.errorMessage}
          hasError={errors.edad?.hasError}
          {...getOverrideProps(overrides, "edad")}
        ></TextField>

        <TextField
          id="nivelEdificacion"
          label="Nivel edificacion"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={formData.nivelEdificacion}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("nivelEdificacion", formData.nivelEdificacion)}
          errorMessage={errors.nivelEdificacion?.errorMessage}
          hasError={errors.nivelEdificacion?.hasError}
          {...getOverrideProps(overrides, "nivelEdificacion")}
        ></TextField>

      </Grid>


      <Heading level={sectionsHeadingLevel}>Distribución Interior</Heading>

      <TextAreaField
        id="descripcionInterior"
        label="Descripcion interior"
        isRequired={false}
        isReadOnly={false}
        value={formData.descripcionInterior}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("descripcionInterior", formData.descripcionInterior)}
        errorMessage={errors.descripcionInterior?.errorMessage}
        hasError={errors.descripcionInterior?.hasError}
        {...getOverrideProps(overrides, "descripcionInterior")}
      ></TextAreaField>

    <Heading level={sectionsHeadingLevel}>Terminaciones</Heading>

    <Grid templateColumns="repeat(3, 1fr)" gap="1rem">

        <TextField
          id="terminacionPisosInteriores"
          label="Pisos interiores"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionPisosInteriores}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("terminacionPisosInteriores", formData.terminacionPisosInteriores)}
          errorMessage={errors.terminacionPisosInteriores?.errorMessage}
          hasError={errors.terminacionPisosInteriores?.hasError}
          {...getOverrideProps(overrides, "terminacionPisosInteriores")}
        ></TextField>
        <TextField
          id="terminacionPisosExteriores"
          label="Pisos exteriores"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionPisosExteriores}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("terminacionPisosExteriores", formData.terminacionPisosExteriores)}
          errorMessage={errors.terminacionPisosExteriores?.errorMessage}
          hasError={errors.terminacionPisosExteriores?.hasError}
          {...getOverrideProps(overrides, "terminacionPisosExteriores")}
        ></TextField>
        <TextField
          id="terminacionHuellas"
          label="Huellas"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionHuellas}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("terminacionHuellas", formData.terminacionHuellas)}
          errorMessage={errors.terminacionHuellas?.errorMessage}
          hasError={errors.terminacionHuellas?.hasError}
          {...getOverrideProps(overrides, "terminacionHuellas")}
        ></TextField>
        <TextField
          id="terminacionMuros"
          label="Muros"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionMuros}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("terminacionMuros", formData.terminacionMuros)}
          errorMessage={errors.terminacionMuros?.errorMessage}
          hasError={errors.terminacionMuros?.hasError}
          {...getOverrideProps(overrides, "terminacionMuros")}
        ></TextField>
        <TextField
          id="terminacionRevestimiento"
          label="Revestimiento"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionRevestimiento}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("terminacionRevestimiento", formData.terminacionRevestimiento)}
          errorMessage={errors.terminacionRevestimiento?.errorMessage}
          hasError={errors.terminacionRevestimiento?.hasError}
          {...getOverrideProps(overrides, "terminacionRevestimiento")}
        ></TextField>
        <TextField
          id="terminacionPuertaPrincipal"
          label="Puerta principal"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionPuertaPrincipal}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("terminacionPuertaPrincipal", formData.terminacionPuertaPrincipal)}
          errorMessage={errors.terminacionPuertaPrincipal?.errorMessage}
          hasError={errors.terminacionPuertaPrincipal?.hasError}
          {...getOverrideProps(overrides, "terminacionPuertaPrincipal")}
        ></TextField>
        <TextField
          id="terminacionPuertasInteriores"
          label="Puertas interiores"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionPuertasInteriores}
          onChange={handleFieldChange}
          onBlur={() => runValidationTasks("terminacionPuertasInteriores", formData.terminacionPuertasInteriores)}
          errorMessage={errors.terminacionPuertasInteriores?.errorMessage}
          hasError={errors.terminacionPuertasInteriores?.hasError}
          {...getOverrideProps(overrides, "terminacionPuertasInteriores")}
        ></TextField>
        <TextField
          id="terminacionPuertasCloset"
          label="Puertas closet"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionPuertasCloset}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionPuertasCloset", formData.terminacionPuertasCloset)
          }
          errorMessage={errors.terminacionPuertasCloset?.errorMessage}
          hasError={errors.terminacionPuertasCloset?.hasError}
          {...getOverrideProps(overrides, "terminacionPuertasCloset")}
        ></TextField>
        <TextField
          id="terminacionGabinetes"
          label="Gabinetes"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionGabinetes}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionGabinetes", formData.terminacionGabinetes)
          }
          errorMessage={errors.terminacionGabinetes?.errorMessage}
          hasError={errors.terminacionGabinetes?.hasError}
          {...getOverrideProps(overrides, "terminacionGabinetes")}
        ></TextField>

        <TextField
          id="terminacionTopeCocina"
          label="Tope cocina"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionTopeCocina}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionTopeCocina", formData.terminacionTopeCocina)
          }
          errorMessage={errors.terminacionTopeCocina?.errorMessage}
          hasError={errors.terminacionTopeCocina?.hasError}
          {...getOverrideProps(overrides, "terminacionTopeCocina")}
        ></TextField>
        <TextField
          id="terminacionTecho"
          label="Techo"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionTecho}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionTecho", formData.terminacionTecho)
          }
          errorMessage={errors.terminacionTecho?.errorMessage}
          hasError={errors.terminacionTecho?.hasError}
          {...getOverrideProps(overrides, "terminacionTecho")}
        ></TextField>
        <TextField
          id="terminacionCornisa"
          label="Cornisa"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionCornisa}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionCornisa", formData.terminacionCornisa)
          }
          errorMessage={errors.terminacionCornisa?.errorMessage}
          hasError={errors.terminacionCornisa?.hasError}
          {...getOverrideProps(overrides, "terminacionCornisa")}
        ></TextField>
        <TextField
          id="terminacionPlafones"
          label="Plafones"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionPlafones}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionPlafones", formData.terminacionPlafones)
          }
          errorMessage={errors.terminacionPlafones?.errorMessage}
          hasError={errors.terminacionPlafones?.hasError}
          {...getOverrideProps(overrides, "terminacionPlafones")}
        ></TextField>
        <TextField
          id="terminacionVentanas"
          label="Ventanas"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionVentanas}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionVentanas", formData.terminacionVentanas)
          }
          errorMessage={errors.terminacionVentanas?.errorMessage}
          hasError={errors.terminacionVentanas?.hasError}
          {...getOverrideProps(overrides, "terminacionVentanas")}
        ></TextField>
        <TextField
          id="terminacionPasamanos"
          label="Pasamanos"
          isRequired={false}
          isReadOnly={false}
          value={formData.terminacionPasamanos}
          onChange={handleFieldChange}
          onBlur={() =>
            runValidationTasks("terminacionPasamanos", formData.terminacionPasamanos)
          }
          errorMessage={errors.terminacionPasamanos?.errorMessage}
          hasError={errors.terminacionPasamanos?.hasError}
          {...getOverrideProps(overrides, "terminacionPasamanos")}
        ></TextField>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Tasación guardada correctamente.
        </MuiAlert>
      </Snackbar>
    </Grid>

    <Heading level={sectionsHeadingLevel}>Levantamiento Fotográfico</Heading>

    <Heading level={sectionsHeadingLevel}>Valor del Inmueble</Heading>

        <SelectField
          label="Moneda"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>
          
          {currencyOptions.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.desc}
            </option>
          ))}
        </SelectField>

      {
        false? (
          <div>
            <Grid templateColumns="repeat(3, 1fr)" gap="1rem">

              <div className="amplify-flex amplify-field amplify-textfield">
                <label className="amplify-label" htmlFor="areaBasicoTerreno">
                  Área terreno (m&sup2;)
                </label>
                <CurrencyInput
                  id="areaBasicoTerreno" 
                  name="areaBasicoTerreno"
                  className="amplify-input"
                  decimalsLimit={2}
                  value={formData.areaBasicoTerreno}
                  onChange={handleDecimalInputChange}
                >
                </CurrencyInput>
              </div>


              <div className="amplify-flex amplify-field amplify-textfield">
                <label className="amplify-label" htmlFor="costoMetroBasicoTerreno">
                  Costo metro cuadrado
                </label>
                
                <CurrencyInput
                  id="costoMetroBasicoTerreno"
                  name="costoMetro"
                  label="Costo metro cuadrado"
                  className="amplify-input"
                  placeholder=""
                  decimalsLimit={2}
                  prefix={currencyOptions.find((c) => c.code == currency)?.symbol + " "}
                  value={formData.costoMetroBasicoTerreno}
                  onChange={handleDecimalInputChange}
                />
              </div>


              <TextField
                label="Total terreno"
                value={`${
                  currencyOptions.find((c) => c.code == currency)?.symbol || ""
                } ${Number(totalTerreno).toLocaleString("en-US", { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}`}          
                isReadOnly
                backgroundColor="#f3f3f3"
                fontWeight="bold"
              />

            </Grid>

            <Grid templateColumns="repeat(3, 1fr)" gap="1rem">

              <div className="amplify-flex amplify-field amplify-textfield">
                <label className="amplify-label" htmlFor="areaBasicoConstruccion">
                  Área construcción (m&sup2;)
                </label>
                <CurrencyInput
                  id="areaBasicoConstruccion" 
                  name="areaBasicoConstruccion"
                  className="amplify-input"
                  decimalsLimit={2}
                  value={formData.areaBasicoConstruccion}
                  onChange={handleDecimalInputChange}
                >
                </CurrencyInput>
              </div>


              <div className="amplify-flex amplify-field amplify-textfield">
                <label className="amplify-label" htmlFor="costoMetroBasicoConstruccion">
                  Costo metro cuadrado
                </label>
                
                <CurrencyInput
                  id="costoMetroBasicoConstruccion"
                  name="costoMetroBasicoConstruccion"
                  label="Costo metro cuadrado"
                  className="amplify-input"
                  placeholder=""
                  decimalsLimit={2}
                  prefix={currencyOptions.find((c) => c.code == currency)?.symbol + " "}
                  value={formData.costoMetroBasicoConstruccion}
                  onChange={handleDecimalInputChange}
                />
              </div>

              <TextField
                label="Total construcción"
                value={`${
                  currencyOptions.find((c) => c.code == currency)?.symbol || ""
                } ${Number(totalConstruccion).toLocaleString("en-US", { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}`}          
                isReadOnly
                backgroundColor="#f3f3f3"
                fontWeight="bold"
              />
            </Grid>

            <TextField
              id="montoDepreciacion"
              label="Monto depreciacion"
              isRequired={false}
              isReadOnly={false}
              type="number"
              step="any"
              value={formData.montoDepreciacion}
              onChange={handleFieldChange}
              onBlur={() =>
                runValidationTasks("montoDepreciacion", formData.montoDepreciacion)
              }
              errorMessage={errors.montoDepreciacion?.errorMessage}
              hasError={errors.montoDepreciacion?.hasError}
              {...getOverrideProps(overrides, "montoDepreciacion")}
            ></TextField>
            <TextField
              id="montoMejoras"
              label="Monto mejoras"
              isRequired={false}
              isReadOnly={false}
              type="number"
              step="any"
              value={formData.montoMejoras}
              onChange={handleFieldChange}
              onBlur={() => runValidationTasks("montoMejoras", formData.montoMejoras)}
              errorMessage={errors.montoMejoras?.errorMessage}
              hasError={errors.montoMejoras?.hasError}
              {...getOverrideProps(overrides, "montoMejoras")}
            ></TextField>
            <TextField
              id="depreciacionMejoras"
              label="Depreciacion mejoras"
              isRequired={false}
              isReadOnly={false}
              type="number"
              step="any"
              value={formData.depreciacionMejoras}
              onChange={handleFieldChange}
              onBlur={() =>
                runValidationTasks("depreciacionMejoras", formData.depreciacionMejoras)
              }
              errorMessage={errors.depreciacionMejoras?.errorMessage}
              hasError={errors.depreciacionMejoras?.hasError}
              {...getOverrideProps(overrides, "depreciacionMejoras")}
            ></TextField>
          </div>
        ) : ""
      }
      
      
      {/*  Cálculos de apartamento */}

      <Grid templateColumns="repeat(3, 1fr)" gap="1rem">

        <div className="amplify-flex amplify-field amplify-textfield">
          <label className="amplify-label" htmlFor="areaParqueo">
            Área parqueo (m&sup2;)
          </label>
          <CurrencyInput
            id="areaParqueo" 
            name="areaParqueo"
            className="amplify-input"
            decimalsLimit={2}
            value={formData.areaParqueo}
            onChange={handleDecimalInputChange}
          >
          </CurrencyInput>
        </div>


        <div className="amplify-flex amplify-field amplify-textfield">
          <label className="amplify-label" htmlFor="costoMetroParqueo">
            Costo metro cuadrado
          </label>
          
          <CurrencyInput
            id="costoMetroParqueo"
            name="costoMetroParqueo"
            label="Costo metro cuadrado"
            className="amplify-input"
            placeholder=""
            decimalsLimit={2}
            prefix={currencyOptions.find((c) => c.code == currency)?.symbol + " "}
            value={formData.costoMetroParqueo}
            onChange={handleDecimalInputChange}
          />
        </div>


        <TextField
          label="Total area parqueo"
          value={`${
            currencyOptions.find((c) => c.code == currency)?.symbol || ""
          } ${Number(totalParqueo).toLocaleString("en-US", { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })}`}          
          isReadOnly
          backgroundColor="#f3f3f3"
          fontWeight="bold"
        />

      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap="1rem">

        <div className="amplify-flex amplify-field amplify-textfield">
          <label className="amplify-label" htmlFor="areaApartamento">
            Área apartamento (m&sup2;)
          </label>
          <CurrencyInput
            id="areaApartamento" 
            name="areaApartamento"
            className="amplify-input"
            decimalsLimit={2}
            value={formData.areaApartamento}
            onChange={handleDecimalInputChange}
          >
          </CurrencyInput>
        </div>


        <div className="amplify-flex amplify-field amplify-textfield">
          <label className="amplify-label" htmlFor="costoMetroApartamento">
            Costo metro cuadrado
          </label>
          
          <CurrencyInput
            id="costoMetroApartamento"
            name="costoMetroApartamento"
            label="Costo metro cuadrado"
            className="amplify-input"
            placeholder=""
            decimalsLimit={2}
            prefix={currencyOptions.find((c) => c.code == currency)?.symbol + " "}
            value={formData.costoMetroApartamento}
            onChange={handleDecimalInputChange}
          />
        </div>

        <TextField
          label="Total area apartamento"
          value={`${
            currencyOptions.find((c) => c.code == currency)?.symbol || ""
          } ${Number(totalApartamento).toLocaleString("en-US", { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })}`}          
          isReadOnly
          backgroundColor="#f3f3f3"
          fontWeight="bold"
        />

      </Grid>



      <Heading level={subSectionsHeadingLevel}>
        Cálculo amenidades
      </Heading>

      <SwitchField
        id="tieneTerraza"
        labelPosition="end"
        isRequired={false}
        label="Terraza"
        defaultChecked={false}
        isDisabled={false}
        isChecked={formData.tieneTerraza}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks(
            "tieneTerraza",
            formData.tieneTerraza
          )
        }
        errorMessage={errors.tieneTerraza?.errorMessage}
        hasError={errors.tieneTerraza?.hasError}
        {...getOverrideProps(overrides, "tieneTerraza")}
      ></SwitchField>


      {
        formData.tieneTerraza ? (
          <div>
            <Grid templateColumns="repeat(3, 1fr)" gap="1rem">
              <div className="amplify-flex amplify-field amplify-textfield">
                <label className="amplify-label" htmlFor="areaTerraza">
                  Área terraza (m&sup2;)
                </label>
                <CurrencyInput
                  id="areaTerraza" 
                  name="areaTerraza"
                  className="amplify-input"
                  decimalsLimit={2}
                  value={formData.areaTerraza}
                  onChange={handleDecimalInputChange}
                >
                </CurrencyInput>
              </div>

              <div className="amplify-flex amplify-field amplify-textfield">
                <label className="amplify-label" htmlFor="costoMetroTerraza">
                  Costo metro cuadrado
                </label>
                
                <CurrencyInput
                  id="costoMetroTerraza"
                  name="costoMetroTerraza"
                  label="Costo metro cuadrado"
                  className="amplify-input"
                  placeholder=""
                  decimalsLimit={2}
                  prefix={currencyOptions.find((c) => c.code == currency)?.symbol + " "}
                  value={formData.costoMetroTerraza}
                  onChange={handleDecimalInputChange}
                />
              </div>

              <TextField
                label="Total area terraza"
                value={`${
                  currencyOptions.find((c) => c.code == currency)?.symbol || ""
                } ${Number(totalTerraza).toLocaleString("en-US", { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}`}          
                isReadOnly
                backgroundColor="#f3f3f3"
                fontWeight="bold"
              />
            </Grid>
          </div>
        ) : ""
      }

      <TextField
        label="Valor inmueble"
        isReadOnly
        value={`${
          currencyOptions.find((c) => c.code == currency)?.symbol || ""
        } ${Number(totalInmuebleApartamento).toLocaleString("en-US", { 
          minimumFractionDigits: 2, 
          maximumFractionDigits: 2 
        })}`}
        backgroundColor="#f3f3f3"
        fontWeight="bold"
      ></TextField>

      <Heading level={sectionsHeadingLevel}>Comentario Tasadores</Heading>

      <TextAreaField
        id="comentario"
        isRequired={false}
        isReadOnly={false}
        value={formData.comentario}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("comentario", formData.comentario)}
        errorMessage={errors.comentario?.errorMessage}
        hasError={errors.comentario?.hasError}
        {...getOverrideProps(overrides, "comentario")}
      />

      

      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Limpiar"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Grabar"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
        <Button
          children="Descargar informe"
          onClick={() => downloadInforme(formData)}
        />
        <Button
          children="Descargar presentación"
          onClick={() => downloadPresentacion(formData, solicitantes)}
        />
      </Flex>
    </Grid>

    
  );
}
