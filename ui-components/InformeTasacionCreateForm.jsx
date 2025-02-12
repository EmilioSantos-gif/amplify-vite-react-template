/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
  Heading
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
            promises.push(
              runValidationTasks(fieldName, formData[fieldName])
            );
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
      <Heading level={titleHeadingLevel} >Datos de la Tasación</Heading>

      <TextField
        id="fechaTasacion"
        label="Fecha tasacion"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={formData.fechaTasacion}
        onChange={handleFieldChange}
        onBlur={() => runValidationTasks("fechaTasacion", formData.fechaTasacion)}
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
        onBlur={() => runValidationTasks("entidadBancaria", formData.entidadBancaria)}
        errorMessage={errors.entidadBancaria?.errorMessage}
        hasError={errors.entidadBancaria?.hasError}
        {...getOverrideProps(overrides, "entidadBancaria")}
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
