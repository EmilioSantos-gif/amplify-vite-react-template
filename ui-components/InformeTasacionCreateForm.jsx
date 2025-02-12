/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
  Heading,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInformeTasacion } from "./graphql/mutations";
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
  nombreSolicitante: "",
  apellidoSolicitante: "",
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
};

export default function InformeTasacionCreateForm(props) {
  const titleHeadingLevel = 3;
  const sectionsHeadingLevel = titleHeadingLevel + 1;
  const subSectionsHeadingLevel = sectionsHeadingLevel + 1;

  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;

  const [formData, setFormData] = React.useState(initialValues);
  const [area, setArea] = React.useState(initialValues.area);
  const [forma, setForma] = React.useState(initialValues.forma);

  const [errors, setErrors] = React.useState({});

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
    nombreSolicitante: [],
    apellidoSolicitante: [],
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

  const handleFieldChange = (e) => {
    const { attributes, value, type, checked } = e.target;

    let updatedFields = {
      ...formData,
      [attributes.id.value]: type === "checkbox" ? checked : value,
    };

    // if (onChange) {
    //   const result = onChange(updatedFields);
    //   updatedFields = result ?? updatedFields;
    // }

    // if (errors?.[name]?.hasError) {
    //   runValidationTasks(name, value);
    // }

    setFormData(updatedFields);
  };

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
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
          formData = onSubmit(formData);
        }
        try {
          Object.entries(formData).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              formData[key] = null;
            }
          });
          await client.graphql({
            query: createInformeTasacion.replaceAll("__typename", ""),
            variables: {
              input: {
                ...formData,
              },
            },
          });
          if (onSuccess) {
            onSuccess(formData);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(formData, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InformeTasacionCreateForm")}
      {...rest}
    >
      <Heading level={titleHeadingLevel}>Datos de la Tasación</Heading>

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
        onChange={(e) => {
          let value = e.target.value;
          setFormData({ ...formData, serviceDesk: value });
        }}
        onBlur={() => runValidationTasks("serviceDesk", formData.serviceDesk)}
        errorMessage={errors.serviceDesk?.errorMessage}
        hasError={errors.serviceDesk?.hasError}
        {...getOverrideProps(overrides, "serviceDesk")}
      ></TextField>

      <TextField
        label="Tipo tasacion"
        id="tipoTasacion"
        isRequired={false}
        isReadOnly={false}
        value={formData.tipoTasacion}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("tipoTasacion", formData.tipoTasacion)}
        errorMessage={errors.tipoTasacion?.errorMessage}
        hasError={errors.tipoTasacion?.hasError}
        {...getOverrideProps(overrides, "tipoTasacion")}
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

      <TextField
        id="tipoTopologia"
        label="Tipo topologia"
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
      <TextField
        id="ubicacionTerreno"
        label="Ubicacion terreno"
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
      <TextField
        id="nombreSolicitante"
        label="Nombre solicitante"
        isRequired={false}
        isReadOnly={false}
        value={formData.nombreSolicitante}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks("nombreSolicitante", formData.nombreSolicitante)
        }
        errorMessage={errors.nombreSolicitante?.errorMessage}
        hasError={errors.nombreSolicitante?.hasError}
        {...getOverrideProps(overrides, "nombreSolicitante")}
      ></TextField>
      <TextField
        id="apellidoSolicitante"
        label="Apellido solicitante"
        isRequired={false}
        isReadOnly={false}
        value={formData.apellidoSolicitante}
        onChange={handleFieldChange}
        onBlur={() =>
          runValidationTasks(
            "apellidoSolicitante",
            formData.apellidoSolicitante
          )
        }
        errorMessage={errors.apellidoSolicitante?.errorMessage}
        hasError={errors.apellidoSolicitante?.hasError}
        {...getOverrideProps(overrides, "apellidoSolicitante")}
      ></TextField>
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
        id="direccionInmueble"
        label="Direccion inmueble"
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
        label="Edificio no"
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

      <Heading level={4}>Aspectos Legales</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap="1rem">
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
          label="Otra infraestructura"
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

      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={area}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              fechaTasacion,
              serviceDesk,
              tipoTasacion,
              pisos,
              tipo,
              entidadBancaria,
              tipoTopologia,
              ubicacion,
              ubicacionTerreno,
              propietario,
              nombreSolicitante,
              apellidoSolicitante,
              condominio,
              direccionInmueble,
              bloque,
              etapa,
              manzana,
              edificioNo,
              tipoEdificio,
              numeroTitulo,
              constanciaVenta,
              designacionCatastral,
              libroNo,
              folioNo,
              parcela,
              solar,
              manzanaLegal,
              dc,
              localidad,
              desarrollo,
              tipologiaVecindario,
              claseSocial,
              aceras,
              contenes,
              callesAsfaltadas,
              alcantarillado,
              aguaPotable,
              alumbradoElectrico,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area: value,
              forma,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior,
              terminacionPisosInteriores,
              terminacionPisosExteriores,
              terminacionHuellas,
              terminacionMuros,
              terminacionRevestimiento,
              terminacionPuertaPrincipal,
              terminacionPuertasInteriores,
              terminacionPuertasCloset,
              terminacionGabinetes,
              terminacionTopeCocina,
              terminacionTecho,
              terminacionCornisa,
              terminacionPlafones,
              terminacionVentanas,
              terminacionPasamanos,
              areaBasicoTerreno,
              costoMetroBasicoTerreno,
              areaBasicoConstruccion,
              costoMetroBasicoConstruccion,
              montoDepreciacion,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setFormData({ ...formData, area: value });
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      ></TextField>
      <TextField
        label="Forma"
        isRequired={false}
        isReadOnly={false}
        value={formData.forma}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaTasacion,
              serviceDesk,
              tipoTasacion,
              pisos,
              tipo,
              entidadBancaria,
              tipoTopologia,
              ubicacion,
              ubicacionTerreno,
              propietario,
              nombreSolicitante,
              apellidoSolicitante,
              condominio,
              direccionInmueble,
              bloque,
              etapa,
              manzana,
              edificioNo,
              tipoEdificio,
              numeroTitulo,
              constanciaVenta,
              designacionCatastral,
              libroNo,
              folioNo,
              parcela,
              solar,
              manzanaLegal,
              dc,
              localidad,
              desarrollo,
              tipologiaVecindario,
              claseSocial,
              aceras,
              contenes,
              callesAsfaltadas,
              alcantarillado,
              aguaPotable,
              alumbradoElectrico,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area,
              forma: value,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior,
              terminacionPisosInteriores,
              terminacionPisosExteriores,
              terminacionHuellas,
              terminacionMuros,
              terminacionRevestimiento,
              terminacionPuertaPrincipal,
              terminacionPuertasInteriores,
              terminacionPuertasCloset,
              terminacionGabinetes,
              terminacionTopeCocina,
              terminacionTecho,
              terminacionCornisa,
              terminacionPlafones,
              terminacionVentanas,
              terminacionPasamanos,
              areaBasicoTerreno,
              costoMetroBasicoTerreno,
              areaBasicoConstruccion,
              costoMetroBasicoConstruccion,
              montoDepreciacion,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
            };
            const result = onChange(modelFields);
            value = result?.forma ?? value;
          }
          if (errors.forma?.hasError) {
            runValidationTasks("forma", value);
          }
          setFormData({ ...formData, forma: value });
        }}
        onBlur={() => runValidationTasks("forma", forma)}
        errorMessage={errors.forma?.errorMessage}
        hasError={errors.forma?.hasError}
        {...getOverrideProps(overrides, "forma")}
      ></TextField>

      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
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
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
