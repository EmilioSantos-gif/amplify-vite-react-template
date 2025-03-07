/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getInformeTasacion } from "./graphql/queries";
import { updateInformeTasacion } from "./graphql/mutations";
const client = generateClient();
export default function InformeTasacionUpdateForm(props) {
  const {
    id: idProp,
    informeTasacion: informeTasacionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
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
    areaParqueo: "",
    costoMetroParqueo: "",
    areaApartamento: "",
    costoMetroApartamento: "",
    areaTerraza: "",
    costoMetroTerraza: "",
    tasaDolar: "",
    tieneTerraza: false,
  };
  const [fechaTasacion, setFechaTasacion] = React.useState(
    initialValues.fechaTasacion
  );
  const [serviceDesk, setServiceDesk] = React.useState(
    initialValues.serviceDesk
  );
  const [tipoTasacion, setTipoTasacion] = React.useState(
    initialValues.tipoTasacion
  );
  const [pisos, setPisos] = React.useState(initialValues.pisos);
  const [tipo, setTipo] = React.useState(initialValues.tipo);
  const [entidadBancaria, setEntidadBancaria] = React.useState(
    initialValues.entidadBancaria
  );
  const [tipoTopologia, setTipoTopologia] = React.useState(
    initialValues.tipoTopologia
  );
  const [ubicacion, setUbicacion] = React.useState(initialValues.ubicacion);
  const [ubicacionTerreno, setUbicacionTerreno] = React.useState(
    initialValues.ubicacionTerreno
  );
  const [propietario, setPropietario] = React.useState(
    initialValues.propietario
  );
  const [nombreSolicitante, setNombreSolicitante] = React.useState(
    initialValues.nombreSolicitante
  );
  const [apellidoSolicitante, setApellidoSolicitante] = React.useState(
    initialValues.apellidoSolicitante
  );
  const [condominio, setCondominio] = React.useState(initialValues.condominio);
  const [direccionInmueble, setDireccionInmueble] = React.useState(
    initialValues.direccionInmueble
  );
  const [bloque, setBloque] = React.useState(initialValues.bloque);
  const [etapa, setEtapa] = React.useState(initialValues.etapa);
  const [manzana, setManzana] = React.useState(initialValues.manzana);
  const [edificioNo, setEdificioNo] = React.useState(initialValues.edificioNo);
  const [tipoEdificio, setTipoEdificio] = React.useState(
    initialValues.tipoEdificio
  );
  const [numeroTitulo, setNumeroTitulo] = React.useState(
    initialValues.numeroTitulo
  );
  const [constanciaVenta, setConstanciaVenta] = React.useState(
    initialValues.constanciaVenta
  );
  const [designacionCatastral, setDesignacionCatastral] = React.useState(
    initialValues.designacionCatastral
  );
  const [libroNo, setLibroNo] = React.useState(initialValues.libroNo);
  const [folioNo, setFolioNo] = React.useState(initialValues.folioNo);
  const [parcela, setParcela] = React.useState(initialValues.parcela);
  const [solar, setSolar] = React.useState(initialValues.solar);
  const [manzanaLegal, setManzanaLegal] = React.useState(
    initialValues.manzanaLegal
  );
  const [dc, setDc] = React.useState(initialValues.dc);
  const [localidad, setLocalidad] = React.useState(initialValues.localidad);
  const [desarrollo, setDesarrollo] = React.useState(initialValues.desarrollo);
  const [tipologiaVecindario, setTipologiaVecindario] = React.useState(
    initialValues.tipologiaVecindario
  );
  const [claseSocial, setClaseSocial] = React.useState(
    initialValues.claseSocial
  );
  const [aceras, setAceras] = React.useState(initialValues.aceras);
  const [contenes, setContenes] = React.useState(initialValues.contenes);
  const [callesAsfaltadas, setCallesAsfaltadas] = React.useState(
    initialValues.callesAsfaltadas
  );
  const [alcantarillado, setAlcantarillado] = React.useState(
    initialValues.alcantarillado
  );
  const [aguaPotable, setAguaPotable] = React.useState(
    initialValues.aguaPotable
  );
  const [alumbradoElectrico, setAlumbradoElectrico] = React.useState(
    initialValues.alumbradoElectrico
  );
  const [telecomunicaciones, setTelecomunicaciones] = React.useState(
    initialValues.telecomunicaciones
  );
  const [transportePublico, setTransportePublico] = React.useState(
    initialValues.transportePublico
  );
  const [otrosInfraestructura, setOtrosInfraestructura] = React.useState(
    initialValues.otrosInfraestructura
  );
  const [area, setArea] = React.useState(initialValues.area);
  const [forma, setForma] = React.useState(initialValues.forma);
  const [topografia, setTopografia] = React.useState(initialValues.topografia);
  const [edad, setEdad] = React.useState(initialValues.edad);
  const [nivelEdificacion, setNivelEdificacion] = React.useState(
    initialValues.nivelEdificacion
  );
  const [descripcionInterior, setDescripcionInterior] = React.useState(
    initialValues.descripcionInterior
  );
  const [terminacionPisosInteriores, setTerminacionPisosInteriores] =
    React.useState(initialValues.terminacionPisosInteriores);
  const [terminacionPisosExteriores, setTerminacionPisosExteriores] =
    React.useState(initialValues.terminacionPisosExteriores);
  const [terminacionHuellas, setTerminacionHuellas] = React.useState(
    initialValues.terminacionHuellas
  );
  const [terminacionMuros, setTerminacionMuros] = React.useState(
    initialValues.terminacionMuros
  );
  const [terminacionRevestimiento, setTerminacionRevestimiento] =
    React.useState(initialValues.terminacionRevestimiento);
  const [terminacionPuertaPrincipal, setTerminacionPuertaPrincipal] =
    React.useState(initialValues.terminacionPuertaPrincipal);
  const [terminacionPuertasInteriores, setTerminacionPuertasInteriores] =
    React.useState(initialValues.terminacionPuertasInteriores);
  const [terminacionPuertasCloset, setTerminacionPuertasCloset] =
    React.useState(initialValues.terminacionPuertasCloset);
  const [terminacionGabinetes, setTerminacionGabinetes] = React.useState(
    initialValues.terminacionGabinetes
  );
  const [terminacionTopeCocina, setTerminacionTopeCocina] = React.useState(
    initialValues.terminacionTopeCocina
  );
  const [terminacionTecho, setTerminacionTecho] = React.useState(
    initialValues.terminacionTecho
  );
  const [terminacionCornisa, setTerminacionCornisa] = React.useState(
    initialValues.terminacionCornisa
  );
  const [terminacionPlafones, setTerminacionPlafones] = React.useState(
    initialValues.terminacionPlafones
  );
  const [terminacionVentanas, setTerminacionVentanas] = React.useState(
    initialValues.terminacionVentanas
  );
  const [terminacionPasamanos, setTerminacionPasamanos] = React.useState(
    initialValues.terminacionPasamanos
  );
  const [areaBasicoTerreno, setAreaBasicoTerreno] = React.useState(
    initialValues.areaBasicoTerreno
  );
  const [costoMetroBasicoTerreno, setCostoMetroBasicoTerreno] = React.useState(
    initialValues.costoMetroBasicoTerreno
  );
  const [areaBasicoConstruccion, setAreaBasicoConstruccion] = React.useState(
    initialValues.areaBasicoConstruccion
  );
  const [costoMetroBasicoConstruccion, setCostoMetroBasicoConstruccion] =
    React.useState(initialValues.costoMetroBasicoConstruccion);
  const [montoDepreciacion, setMontoDepreciacion] = React.useState(
    initialValues.montoDepreciacion
  );
  const [montoMejoras, setMontoMejoras] = React.useState(
    initialValues.montoMejoras
  );
  const [depreciacionMejoras, setDepreciacionMejoras] = React.useState(
    initialValues.depreciacionMejoras
  );
  const [valorInmueble, setValorInmueble] = React.useState(
    initialValues.valorInmueble
  );
  const [comentario, setComentario] = React.useState(initialValues.comentario);
  const [areaParqueo, setAreaParqueo] = React.useState(
    initialValues.areaParqueo
  );
  const [costoMetroParqueo, setCostoMetroParqueo] = React.useState(
    initialValues.costoMetroParqueo
  );
  const [areaApartamento, setAreaApartamento] = React.useState(
    initialValues.areaApartamento
  );
  const [costoMetroApartamento, setCostoMetroApartamento] = React.useState(
    initialValues.costoMetroApartamento
  );
  const [areaTerraza, setAreaTerraza] = React.useState(
    initialValues.areaTerraza
  );
  const [costoMetroTerraza, setCostoMetroTerraza] = React.useState(
    initialValues.costoMetroTerraza
  );
  const [tasaDolar, setTasaDolar] = React.useState(initialValues.tasaDolar);
  const [tieneTerraza, setTieneTerraza] = React.useState(
    initialValues.tieneTerraza
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = informeTasacionRecord
      ? { ...initialValues, ...informeTasacionRecord }
      : initialValues;
    setFechaTasacion(cleanValues.fechaTasacion);
    setServiceDesk(cleanValues.serviceDesk);
    setTipoTasacion(cleanValues.tipoTasacion);
    setPisos(cleanValues.pisos);
    setTipo(cleanValues.tipo);
    setEntidadBancaria(cleanValues.entidadBancaria);
    setTipoTopologia(cleanValues.tipoTopologia);
    setUbicacion(cleanValues.ubicacion);
    setUbicacionTerreno(cleanValues.ubicacionTerreno);
    setPropietario(cleanValues.propietario);
    setNombreSolicitante(cleanValues.nombreSolicitante);
    setApellidoSolicitante(cleanValues.apellidoSolicitante);
    setCondominio(cleanValues.condominio);
    setDireccionInmueble(cleanValues.direccionInmueble);
    setBloque(cleanValues.bloque);
    setEtapa(cleanValues.etapa);
    setManzana(cleanValues.manzana);
    setEdificioNo(cleanValues.edificioNo);
    setTipoEdificio(cleanValues.tipoEdificio);
    setNumeroTitulo(cleanValues.numeroTitulo);
    setConstanciaVenta(cleanValues.constanciaVenta);
    setDesignacionCatastral(cleanValues.designacionCatastral);
    setLibroNo(cleanValues.libroNo);
    setFolioNo(cleanValues.folioNo);
    setParcela(cleanValues.parcela);
    setSolar(cleanValues.solar);
    setManzanaLegal(cleanValues.manzanaLegal);
    setDc(cleanValues.dc);
    setLocalidad(cleanValues.localidad);
    setDesarrollo(cleanValues.desarrollo);
    setTipologiaVecindario(cleanValues.tipologiaVecindario);
    setClaseSocial(cleanValues.claseSocial);
    setAceras(cleanValues.aceras);
    setContenes(cleanValues.contenes);
    setCallesAsfaltadas(cleanValues.callesAsfaltadas);
    setAlcantarillado(cleanValues.alcantarillado);
    setAguaPotable(cleanValues.aguaPotable);
    setAlumbradoElectrico(cleanValues.alumbradoElectrico);
    setTelecomunicaciones(cleanValues.telecomunicaciones);
    setTransportePublico(cleanValues.transportePublico);
    setOtrosInfraestructura(cleanValues.otrosInfraestructura);
    setArea(cleanValues.area);
    setForma(cleanValues.forma);
    setTopografia(cleanValues.topografia);
    setEdad(cleanValues.edad);
    setNivelEdificacion(cleanValues.nivelEdificacion);
    setDescripcionInterior(cleanValues.descripcionInterior);
    setTerminacionPisosInteriores(cleanValues.terminacionPisosInteriores);
    setTerminacionPisosExteriores(cleanValues.terminacionPisosExteriores);
    setTerminacionHuellas(cleanValues.terminacionHuellas);
    setTerminacionMuros(cleanValues.terminacionMuros);
    setTerminacionRevestimiento(cleanValues.terminacionRevestimiento);
    setTerminacionPuertaPrincipal(cleanValues.terminacionPuertaPrincipal);
    setTerminacionPuertasInteriores(cleanValues.terminacionPuertasInteriores);
    setTerminacionPuertasCloset(cleanValues.terminacionPuertasCloset);
    setTerminacionGabinetes(cleanValues.terminacionGabinetes);
    setTerminacionTopeCocina(cleanValues.terminacionTopeCocina);
    setTerminacionTecho(cleanValues.terminacionTecho);
    setTerminacionCornisa(cleanValues.terminacionCornisa);
    setTerminacionPlafones(cleanValues.terminacionPlafones);
    setTerminacionVentanas(cleanValues.terminacionVentanas);
    setTerminacionPasamanos(cleanValues.terminacionPasamanos);
    setAreaBasicoTerreno(cleanValues.areaBasicoTerreno);
    setCostoMetroBasicoTerreno(cleanValues.costoMetroBasicoTerreno);
    setAreaBasicoConstruccion(cleanValues.areaBasicoConstruccion);
    setCostoMetroBasicoConstruccion(cleanValues.costoMetroBasicoConstruccion);
    setMontoDepreciacion(cleanValues.montoDepreciacion);
    setMontoMejoras(cleanValues.montoMejoras);
    setDepreciacionMejoras(cleanValues.depreciacionMejoras);
    setValorInmueble(cleanValues.valorInmueble);
    setComentario(cleanValues.comentario);
    setAreaParqueo(cleanValues.areaParqueo);
    setCostoMetroParqueo(cleanValues.costoMetroParqueo);
    setAreaApartamento(cleanValues.areaApartamento);
    setCostoMetroApartamento(cleanValues.costoMetroApartamento);
    setAreaTerraza(cleanValues.areaTerraza);
    setCostoMetroTerraza(cleanValues.costoMetroTerraza);
    setTasaDolar(cleanValues.tasaDolar);
    setTieneTerraza(cleanValues.tieneTerraza);
    setErrors({});
  };
  const [informeTasacionRecord, setInformeTasacionRecord] = React.useState(
    informeTasacionModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getInformeTasacion.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getInformeTasacion
        : informeTasacionModelProp;
      setInformeTasacionRecord(record);
    };
    queryData();
  }, [idProp, informeTasacionModelProp]);
  React.useEffect(resetStateValues, [informeTasacionRecord]);
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
    areaParqueo: [],
    costoMetroParqueo: [],
    areaApartamento: [],
    costoMetroApartamento: [],
    areaTerraza: [],
    costoMetroTerraza: [],
    tasaDolar: [],
    tieneTerraza: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fechaTasacion: fechaTasacion ?? null,
          serviceDesk: serviceDesk ?? null,
          tipoTasacion: tipoTasacion ?? null,
          pisos: pisos ?? null,
          tipo: tipo ?? null,
          entidadBancaria: entidadBancaria ?? null,
          tipoTopologia: tipoTopologia ?? null,
          ubicacion: ubicacion ?? null,
          ubicacionTerreno: ubicacionTerreno ?? null,
          propietario: propietario ?? null,
          nombreSolicitante: nombreSolicitante ?? null,
          apellidoSolicitante: apellidoSolicitante ?? null,
          condominio: condominio ?? null,
          direccionInmueble: direccionInmueble ?? null,
          bloque: bloque ?? null,
          etapa: etapa ?? null,
          manzana: manzana ?? null,
          edificioNo: edificioNo ?? null,
          tipoEdificio: tipoEdificio ?? null,
          numeroTitulo: numeroTitulo ?? null,
          constanciaVenta: constanciaVenta ?? null,
          designacionCatastral: designacionCatastral ?? null,
          libroNo: libroNo ?? null,
          folioNo: folioNo ?? null,
          parcela: parcela ?? null,
          solar: solar ?? null,
          manzanaLegal: manzanaLegal ?? null,
          dc: dc ?? null,
          localidad: localidad ?? null,
          desarrollo: desarrollo ?? null,
          tipologiaVecindario: tipologiaVecindario ?? null,
          claseSocial: claseSocial ?? null,
          aceras: aceras ?? null,
          contenes: contenes ?? null,
          callesAsfaltadas: callesAsfaltadas ?? null,
          alcantarillado: alcantarillado ?? null,
          aguaPotable: aguaPotable ?? null,
          alumbradoElectrico: alumbradoElectrico ?? null,
          telecomunicaciones: telecomunicaciones ?? null,
          transportePublico: transportePublico ?? null,
          otrosInfraestructura: otrosInfraestructura ?? null,
          area: area ?? null,
          forma: forma ?? null,
          topografia: topografia ?? null,
          edad: edad ?? null,
          nivelEdificacion: nivelEdificacion ?? null,
          descripcionInterior: descripcionInterior ?? null,
          terminacionPisosInteriores: terminacionPisosInteriores ?? null,
          terminacionPisosExteriores: terminacionPisosExteriores ?? null,
          terminacionHuellas: terminacionHuellas ?? null,
          terminacionMuros: terminacionMuros ?? null,
          terminacionRevestimiento: terminacionRevestimiento ?? null,
          terminacionPuertaPrincipal: terminacionPuertaPrincipal ?? null,
          terminacionPuertasInteriores: terminacionPuertasInteriores ?? null,
          terminacionPuertasCloset: terminacionPuertasCloset ?? null,
          terminacionGabinetes: terminacionGabinetes ?? null,
          terminacionTopeCocina: terminacionTopeCocina ?? null,
          terminacionTecho: terminacionTecho ?? null,
          terminacionCornisa: terminacionCornisa ?? null,
          terminacionPlafones: terminacionPlafones ?? null,
          terminacionVentanas: terminacionVentanas ?? null,
          terminacionPasamanos: terminacionPasamanos ?? null,
          areaBasicoTerreno: areaBasicoTerreno ?? null,
          costoMetroBasicoTerreno: costoMetroBasicoTerreno ?? null,
          areaBasicoConstruccion: areaBasicoConstruccion ?? null,
          costoMetroBasicoConstruccion: costoMetroBasicoConstruccion ?? null,
          montoDepreciacion: montoDepreciacion ?? null,
          montoMejoras: montoMejoras ?? null,
          depreciacionMejoras: depreciacionMejoras ?? null,
          valorInmueble: valorInmueble ?? null,
          comentario: comentario ?? null,
          areaParqueo: areaParqueo ?? null,
          costoMetroParqueo: costoMetroParqueo ?? null,
          areaApartamento: areaApartamento ?? null,
          costoMetroApartamento: costoMetroApartamento ?? null,
          areaTerraza: areaTerraza ?? null,
          costoMetroTerraza: costoMetroTerraza ?? null,
          tasaDolar: tasaDolar ?? null,
          tieneTerraza: tieneTerraza ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateInformeTasacion.replaceAll("__typename", ""),
            variables: {
              input: {
                id: informeTasacionRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InformeTasacionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fecha tasacion"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={fechaTasacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaTasacion: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.fechaTasacion ?? value;
          }
          if (errors.fechaTasacion?.hasError) {
            runValidationTasks("fechaTasacion", value);
          }
          setFechaTasacion(value);
        }}
        onBlur={() => runValidationTasks("fechaTasacion", fechaTasacion)}
        errorMessage={errors.fechaTasacion?.errorMessage}
        hasError={errors.fechaTasacion?.hasError}
        {...getOverrideProps(overrides, "fechaTasacion")}
      ></TextField>
      <TextField
        label="Service desk"
        isRequired={false}
        isReadOnly={false}
        value={serviceDesk}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaTasacion,
              serviceDesk: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.serviceDesk ?? value;
          }
          if (errors.serviceDesk?.hasError) {
            runValidationTasks("serviceDesk", value);
          }
          setServiceDesk(value);
        }}
        onBlur={() => runValidationTasks("serviceDesk", serviceDesk)}
        errorMessage={errors.serviceDesk?.errorMessage}
        hasError={errors.serviceDesk?.hasError}
        {...getOverrideProps(overrides, "serviceDesk")}
      ></TextField>
      <TextField
        label="Tipo tasacion"
        isRequired={false}
        isReadOnly={false}
        value={tipoTasacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaTasacion,
              serviceDesk,
              tipoTasacion: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.tipoTasacion ?? value;
          }
          if (errors.tipoTasacion?.hasError) {
            runValidationTasks("tipoTasacion", value);
          }
          setTipoTasacion(value);
        }}
        onBlur={() => runValidationTasks("tipoTasacion", tipoTasacion)}
        errorMessage={errors.tipoTasacion?.errorMessage}
        hasError={errors.tipoTasacion?.hasError}
        {...getOverrideProps(overrides, "tipoTasacion")}
      ></TextField>
      <TextField
        label="Pisos"
        isRequired={false}
        isReadOnly={false}
        value={pisos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaTasacion,
              serviceDesk,
              tipoTasacion,
              pisos: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.pisos ?? value;
          }
          if (errors.pisos?.hasError) {
            runValidationTasks("pisos", value);
          }
          setPisos(value);
        }}
        onBlur={() => runValidationTasks("pisos", pisos)}
        errorMessage={errors.pisos?.errorMessage}
        hasError={errors.pisos?.hasError}
        {...getOverrideProps(overrides, "pisos")}
      ></TextField>
      <TextField
        label="Tipo"
        isRequired={false}
        isReadOnly={false}
        value={tipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaTasacion,
              serviceDesk,
              tipoTasacion,
              pisos,
              tipo: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.tipo ?? value;
          }
          if (errors.tipo?.hasError) {
            runValidationTasks("tipo", value);
          }
          setTipo(value);
        }}
        onBlur={() => runValidationTasks("tipo", tipo)}
        errorMessage={errors.tipo?.errorMessage}
        hasError={errors.tipo?.hasError}
        {...getOverrideProps(overrides, "tipo")}
      ></TextField>
      <TextField
        label="Entidad bancaria"
        isRequired={false}
        isReadOnly={false}
        value={entidadBancaria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fechaTasacion,
              serviceDesk,
              tipoTasacion,
              pisos,
              tipo,
              entidadBancaria: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.entidadBancaria ?? value;
          }
          if (errors.entidadBancaria?.hasError) {
            runValidationTasks("entidadBancaria", value);
          }
          setEntidadBancaria(value);
        }}
        onBlur={() => runValidationTasks("entidadBancaria", entidadBancaria)}
        errorMessage={errors.entidadBancaria?.errorMessage}
        hasError={errors.entidadBancaria?.hasError}
        {...getOverrideProps(overrides, "entidadBancaria")}
      ></TextField>
      <TextField
        label="Tipo topologia"
        isRequired={false}
        isReadOnly={false}
        value={tipoTopologia}
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
              tipoTopologia: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.tipoTopologia ?? value;
          }
          if (errors.tipoTopologia?.hasError) {
            runValidationTasks("tipoTopologia", value);
          }
          setTipoTopologia(value);
        }}
        onBlur={() => runValidationTasks("tipoTopologia", tipoTopologia)}
        errorMessage={errors.tipoTopologia?.errorMessage}
        hasError={errors.tipoTopologia?.hasError}
        {...getOverrideProps(overrides, "tipoTopologia")}
      ></TextField>
      <TextField
        label="Ubicacion"
        isRequired={false}
        isReadOnly={false}
        value={ubicacion}
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
              ubicacion: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.ubicacion ?? value;
          }
          if (errors.ubicacion?.hasError) {
            runValidationTasks("ubicacion", value);
          }
          setUbicacion(value);
        }}
        onBlur={() => runValidationTasks("ubicacion", ubicacion)}
        errorMessage={errors.ubicacion?.errorMessage}
        hasError={errors.ubicacion?.hasError}
        {...getOverrideProps(overrides, "ubicacion")}
      ></TextField>
      <TextField
        label="Ubicacion terreno"
        isRequired={false}
        isReadOnly={false}
        value={ubicacionTerreno}
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
              ubicacionTerreno: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.ubicacionTerreno ?? value;
          }
          if (errors.ubicacionTerreno?.hasError) {
            runValidationTasks("ubicacionTerreno", value);
          }
          setUbicacionTerreno(value);
        }}
        onBlur={() => runValidationTasks("ubicacionTerreno", ubicacionTerreno)}
        errorMessage={errors.ubicacionTerreno?.errorMessage}
        hasError={errors.ubicacionTerreno?.hasError}
        {...getOverrideProps(overrides, "ubicacionTerreno")}
      ></TextField>
      <TextField
        label="Propietario"
        isRequired={false}
        isReadOnly={false}
        value={propietario}
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
              propietario: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.propietario ?? value;
          }
          if (errors.propietario?.hasError) {
            runValidationTasks("propietario", value);
          }
          setPropietario(value);
        }}
        onBlur={() => runValidationTasks("propietario", propietario)}
        errorMessage={errors.propietario?.errorMessage}
        hasError={errors.propietario?.hasError}
        {...getOverrideProps(overrides, "propietario")}
      ></TextField>
      <TextField
        label="Nombre solicitante"
        isRequired={false}
        isReadOnly={false}
        value={nombreSolicitante}
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
              nombreSolicitante: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.nombreSolicitante ?? value;
          }
          if (errors.nombreSolicitante?.hasError) {
            runValidationTasks("nombreSolicitante", value);
          }
          setNombreSolicitante(value);
        }}
        onBlur={() =>
          runValidationTasks("nombreSolicitante", nombreSolicitante)
        }
        errorMessage={errors.nombreSolicitante?.errorMessage}
        hasError={errors.nombreSolicitante?.hasError}
        {...getOverrideProps(overrides, "nombreSolicitante")}
      ></TextField>
      <TextField
        label="Apellido solicitante"
        isRequired={false}
        isReadOnly={false}
        value={apellidoSolicitante}
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
              apellidoSolicitante: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.apellidoSolicitante ?? value;
          }
          if (errors.apellidoSolicitante?.hasError) {
            runValidationTasks("apellidoSolicitante", value);
          }
          setApellidoSolicitante(value);
        }}
        onBlur={() =>
          runValidationTasks("apellidoSolicitante", apellidoSolicitante)
        }
        errorMessage={errors.apellidoSolicitante?.errorMessage}
        hasError={errors.apellidoSolicitante?.hasError}
        {...getOverrideProps(overrides, "apellidoSolicitante")}
      ></TextField>
      <TextField
        label="Condominio"
        isRequired={false}
        isReadOnly={false}
        value={condominio}
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
              condominio: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.condominio ?? value;
          }
          if (errors.condominio?.hasError) {
            runValidationTasks("condominio", value);
          }
          setCondominio(value);
        }}
        onBlur={() => runValidationTasks("condominio", condominio)}
        errorMessage={errors.condominio?.errorMessage}
        hasError={errors.condominio?.hasError}
        {...getOverrideProps(overrides, "condominio")}
      ></TextField>
      <TextField
        label="Direccion inmueble"
        isRequired={false}
        isReadOnly={false}
        value={direccionInmueble}
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
              direccionInmueble: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.direccionInmueble ?? value;
          }
          if (errors.direccionInmueble?.hasError) {
            runValidationTasks("direccionInmueble", value);
          }
          setDireccionInmueble(value);
        }}
        onBlur={() =>
          runValidationTasks("direccionInmueble", direccionInmueble)
        }
        errorMessage={errors.direccionInmueble?.errorMessage}
        hasError={errors.direccionInmueble?.hasError}
        {...getOverrideProps(overrides, "direccionInmueble")}
      ></TextField>
      <TextField
        label="Bloque"
        isRequired={false}
        isReadOnly={false}
        value={bloque}
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
              bloque: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.bloque ?? value;
          }
          if (errors.bloque?.hasError) {
            runValidationTasks("bloque", value);
          }
          setBloque(value);
        }}
        onBlur={() => runValidationTasks("bloque", bloque)}
        errorMessage={errors.bloque?.errorMessage}
        hasError={errors.bloque?.hasError}
        {...getOverrideProps(overrides, "bloque")}
      ></TextField>
      <TextField
        label="Etapa"
        isRequired={false}
        isReadOnly={false}
        value={etapa}
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
              etapa: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.etapa ?? value;
          }
          if (errors.etapa?.hasError) {
            runValidationTasks("etapa", value);
          }
          setEtapa(value);
        }}
        onBlur={() => runValidationTasks("etapa", etapa)}
        errorMessage={errors.etapa?.errorMessage}
        hasError={errors.etapa?.hasError}
        {...getOverrideProps(overrides, "etapa")}
      ></TextField>
      <TextField
        label="Manzana"
        isRequired={false}
        isReadOnly={false}
        value={manzana}
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
              manzana: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.manzana ?? value;
          }
          if (errors.manzana?.hasError) {
            runValidationTasks("manzana", value);
          }
          setManzana(value);
        }}
        onBlur={() => runValidationTasks("manzana", manzana)}
        errorMessage={errors.manzana?.errorMessage}
        hasError={errors.manzana?.hasError}
        {...getOverrideProps(overrides, "manzana")}
      ></TextField>
      <TextField
        label="Edificio no"
        isRequired={false}
        isReadOnly={false}
        value={edificioNo}
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
              edificioNo: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.edificioNo ?? value;
          }
          if (errors.edificioNo?.hasError) {
            runValidationTasks("edificioNo", value);
          }
          setEdificioNo(value);
        }}
        onBlur={() => runValidationTasks("edificioNo", edificioNo)}
        errorMessage={errors.edificioNo?.errorMessage}
        hasError={errors.edificioNo?.hasError}
        {...getOverrideProps(overrides, "edificioNo")}
      ></TextField>
      <TextField
        label="Tipo edificio"
        isRequired={false}
        isReadOnly={false}
        value={tipoEdificio}
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
              tipoEdificio: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.tipoEdificio ?? value;
          }
          if (errors.tipoEdificio?.hasError) {
            runValidationTasks("tipoEdificio", value);
          }
          setTipoEdificio(value);
        }}
        onBlur={() => runValidationTasks("tipoEdificio", tipoEdificio)}
        errorMessage={errors.tipoEdificio?.errorMessage}
        hasError={errors.tipoEdificio?.hasError}
        {...getOverrideProps(overrides, "tipoEdificio")}
      ></TextField>
      <TextField
        label="Numero titulo"
        isRequired={false}
        isReadOnly={false}
        value={numeroTitulo}
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
              numeroTitulo: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.numeroTitulo ?? value;
          }
          if (errors.numeroTitulo?.hasError) {
            runValidationTasks("numeroTitulo", value);
          }
          setNumeroTitulo(value);
        }}
        onBlur={() => runValidationTasks("numeroTitulo", numeroTitulo)}
        errorMessage={errors.numeroTitulo?.errorMessage}
        hasError={errors.numeroTitulo?.hasError}
        {...getOverrideProps(overrides, "numeroTitulo")}
      ></TextField>
      <TextField
        label="Constancia venta"
        isRequired={false}
        isReadOnly={false}
        value={constanciaVenta}
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
              constanciaVenta: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.constanciaVenta ?? value;
          }
          if (errors.constanciaVenta?.hasError) {
            runValidationTasks("constanciaVenta", value);
          }
          setConstanciaVenta(value);
        }}
        onBlur={() => runValidationTasks("constanciaVenta", constanciaVenta)}
        errorMessage={errors.constanciaVenta?.errorMessage}
        hasError={errors.constanciaVenta?.hasError}
        {...getOverrideProps(overrides, "constanciaVenta")}
      ></TextField>
      <TextField
        label="Designacion catastral"
        isRequired={false}
        isReadOnly={false}
        value={designacionCatastral}
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
              designacionCatastral: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.designacionCatastral ?? value;
          }
          if (errors.designacionCatastral?.hasError) {
            runValidationTasks("designacionCatastral", value);
          }
          setDesignacionCatastral(value);
        }}
        onBlur={() =>
          runValidationTasks("designacionCatastral", designacionCatastral)
        }
        errorMessage={errors.designacionCatastral?.errorMessage}
        hasError={errors.designacionCatastral?.hasError}
        {...getOverrideProps(overrides, "designacionCatastral")}
      ></TextField>
      <TextField
        label="Libro no"
        isRequired={false}
        isReadOnly={false}
        value={libroNo}
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
              libroNo: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.libroNo ?? value;
          }
          if (errors.libroNo?.hasError) {
            runValidationTasks("libroNo", value);
          }
          setLibroNo(value);
        }}
        onBlur={() => runValidationTasks("libroNo", libroNo)}
        errorMessage={errors.libroNo?.errorMessage}
        hasError={errors.libroNo?.hasError}
        {...getOverrideProps(overrides, "libroNo")}
      ></TextField>
      <TextField
        label="Folio no"
        isRequired={false}
        isReadOnly={false}
        value={folioNo}
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
              folioNo: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.folioNo ?? value;
          }
          if (errors.folioNo?.hasError) {
            runValidationTasks("folioNo", value);
          }
          setFolioNo(value);
        }}
        onBlur={() => runValidationTasks("folioNo", folioNo)}
        errorMessage={errors.folioNo?.errorMessage}
        hasError={errors.folioNo?.hasError}
        {...getOverrideProps(overrides, "folioNo")}
      ></TextField>
      <TextField
        label="Parcela"
        isRequired={false}
        isReadOnly={false}
        value={parcela}
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
              parcela: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.parcela ?? value;
          }
          if (errors.parcela?.hasError) {
            runValidationTasks("parcela", value);
          }
          setParcela(value);
        }}
        onBlur={() => runValidationTasks("parcela", parcela)}
        errorMessage={errors.parcela?.errorMessage}
        hasError={errors.parcela?.hasError}
        {...getOverrideProps(overrides, "parcela")}
      ></TextField>
      <TextField
        label="Solar"
        isRequired={false}
        isReadOnly={false}
        value={solar}
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
              solar: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.solar ?? value;
          }
          if (errors.solar?.hasError) {
            runValidationTasks("solar", value);
          }
          setSolar(value);
        }}
        onBlur={() => runValidationTasks("solar", solar)}
        errorMessage={errors.solar?.errorMessage}
        hasError={errors.solar?.hasError}
        {...getOverrideProps(overrides, "solar")}
      ></TextField>
      <TextField
        label="Manzana legal"
        isRequired={false}
        isReadOnly={false}
        value={manzanaLegal}
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
              manzanaLegal: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.manzanaLegal ?? value;
          }
          if (errors.manzanaLegal?.hasError) {
            runValidationTasks("manzanaLegal", value);
          }
          setManzanaLegal(value);
        }}
        onBlur={() => runValidationTasks("manzanaLegal", manzanaLegal)}
        errorMessage={errors.manzanaLegal?.errorMessage}
        hasError={errors.manzanaLegal?.hasError}
        {...getOverrideProps(overrides, "manzanaLegal")}
      ></TextField>
      <TextField
        label="Dc"
        isRequired={false}
        isReadOnly={false}
        value={dc}
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
              dc: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.dc ?? value;
          }
          if (errors.dc?.hasError) {
            runValidationTasks("dc", value);
          }
          setDc(value);
        }}
        onBlur={() => runValidationTasks("dc", dc)}
        errorMessage={errors.dc?.errorMessage}
        hasError={errors.dc?.hasError}
        {...getOverrideProps(overrides, "dc")}
      ></TextField>
      <TextField
        label="Localidad"
        isRequired={false}
        isReadOnly={false}
        value={localidad}
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
              localidad: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.localidad ?? value;
          }
          if (errors.localidad?.hasError) {
            runValidationTasks("localidad", value);
          }
          setLocalidad(value);
        }}
        onBlur={() => runValidationTasks("localidad", localidad)}
        errorMessage={errors.localidad?.errorMessage}
        hasError={errors.localidad?.hasError}
        {...getOverrideProps(overrides, "localidad")}
      ></TextField>
      <TextField
        label="Desarrollo"
        isRequired={false}
        isReadOnly={false}
        value={desarrollo}
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
              desarrollo: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.desarrollo ?? value;
          }
          if (errors.desarrollo?.hasError) {
            runValidationTasks("desarrollo", value);
          }
          setDesarrollo(value);
        }}
        onBlur={() => runValidationTasks("desarrollo", desarrollo)}
        errorMessage={errors.desarrollo?.errorMessage}
        hasError={errors.desarrollo?.hasError}
        {...getOverrideProps(overrides, "desarrollo")}
      ></TextField>
      <TextField
        label="Tipologia vecindario"
        isRequired={false}
        isReadOnly={false}
        value={tipologiaVecindario}
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
              tipologiaVecindario: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.tipologiaVecindario ?? value;
          }
          if (errors.tipologiaVecindario?.hasError) {
            runValidationTasks("tipologiaVecindario", value);
          }
          setTipologiaVecindario(value);
        }}
        onBlur={() =>
          runValidationTasks("tipologiaVecindario", tipologiaVecindario)
        }
        errorMessage={errors.tipologiaVecindario?.errorMessage}
        hasError={errors.tipologiaVecindario?.hasError}
        {...getOverrideProps(overrides, "tipologiaVecindario")}
      ></TextField>
      <TextField
        label="Clase social"
        isRequired={false}
        isReadOnly={false}
        value={claseSocial}
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
              claseSocial: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.claseSocial ?? value;
          }
          if (errors.claseSocial?.hasError) {
            runValidationTasks("claseSocial", value);
          }
          setClaseSocial(value);
        }}
        onBlur={() => runValidationTasks("claseSocial", claseSocial)}
        errorMessage={errors.claseSocial?.errorMessage}
        hasError={errors.claseSocial?.hasError}
        {...getOverrideProps(overrides, "claseSocial")}
      ></TextField>
      <SwitchField
        label="Aceras"
        defaultChecked={false}
        isDisabled={false}
        isChecked={aceras}
        onChange={(e) => {
          let value = e.target.checked;
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
              aceras: value,
              contenes,
              callesAsfaltadas,
              alcantarillado,
              aguaPotable,
              alumbradoElectrico,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.aceras ?? value;
          }
          if (errors.aceras?.hasError) {
            runValidationTasks("aceras", value);
          }
          setAceras(value);
        }}
        onBlur={() => runValidationTasks("aceras", aceras)}
        errorMessage={errors.aceras?.errorMessage}
        hasError={errors.aceras?.hasError}
        {...getOverrideProps(overrides, "aceras")}
      ></SwitchField>
      <SwitchField
        label="Contenes"
        defaultChecked={false}
        isDisabled={false}
        isChecked={contenes}
        onChange={(e) => {
          let value = e.target.checked;
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
              contenes: value,
              callesAsfaltadas,
              alcantarillado,
              aguaPotable,
              alumbradoElectrico,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.contenes ?? value;
          }
          if (errors.contenes?.hasError) {
            runValidationTasks("contenes", value);
          }
          setContenes(value);
        }}
        onBlur={() => runValidationTasks("contenes", contenes)}
        errorMessage={errors.contenes?.errorMessage}
        hasError={errors.contenes?.hasError}
        {...getOverrideProps(overrides, "contenes")}
      ></SwitchField>
      <SwitchField
        label="Calles asfaltadas"
        defaultChecked={false}
        isDisabled={false}
        isChecked={callesAsfaltadas}
        onChange={(e) => {
          let value = e.target.checked;
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
              callesAsfaltadas: value,
              alcantarillado,
              aguaPotable,
              alumbradoElectrico,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.callesAsfaltadas ?? value;
          }
          if (errors.callesAsfaltadas?.hasError) {
            runValidationTasks("callesAsfaltadas", value);
          }
          setCallesAsfaltadas(value);
        }}
        onBlur={() => runValidationTasks("callesAsfaltadas", callesAsfaltadas)}
        errorMessage={errors.callesAsfaltadas?.errorMessage}
        hasError={errors.callesAsfaltadas?.hasError}
        {...getOverrideProps(overrides, "callesAsfaltadas")}
      ></SwitchField>
      <SwitchField
        label="Alcantarillado"
        defaultChecked={false}
        isDisabled={false}
        isChecked={alcantarillado}
        onChange={(e) => {
          let value = e.target.checked;
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
              alcantarillado: value,
              aguaPotable,
              alumbradoElectrico,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.alcantarillado ?? value;
          }
          if (errors.alcantarillado?.hasError) {
            runValidationTasks("alcantarillado", value);
          }
          setAlcantarillado(value);
        }}
        onBlur={() => runValidationTasks("alcantarillado", alcantarillado)}
        errorMessage={errors.alcantarillado?.errorMessage}
        hasError={errors.alcantarillado?.hasError}
        {...getOverrideProps(overrides, "alcantarillado")}
      ></SwitchField>
      <SwitchField
        label="Agua potable"
        defaultChecked={false}
        isDisabled={false}
        isChecked={aguaPotable}
        onChange={(e) => {
          let value = e.target.checked;
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
              aguaPotable: value,
              alumbradoElectrico,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.aguaPotable ?? value;
          }
          if (errors.aguaPotable?.hasError) {
            runValidationTasks("aguaPotable", value);
          }
          setAguaPotable(value);
        }}
        onBlur={() => runValidationTasks("aguaPotable", aguaPotable)}
        errorMessage={errors.aguaPotable?.errorMessage}
        hasError={errors.aguaPotable?.hasError}
        {...getOverrideProps(overrides, "aguaPotable")}
      ></SwitchField>
      <SwitchField
        label="Alumbrado electrico"
        defaultChecked={false}
        isDisabled={false}
        isChecked={alumbradoElectrico}
        onChange={(e) => {
          let value = e.target.checked;
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
              alumbradoElectrico: value,
              telecomunicaciones,
              transportePublico,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.alumbradoElectrico ?? value;
          }
          if (errors.alumbradoElectrico?.hasError) {
            runValidationTasks("alumbradoElectrico", value);
          }
          setAlumbradoElectrico(value);
        }}
        onBlur={() =>
          runValidationTasks("alumbradoElectrico", alumbradoElectrico)
        }
        errorMessage={errors.alumbradoElectrico?.errorMessage}
        hasError={errors.alumbradoElectrico?.hasError}
        {...getOverrideProps(overrides, "alumbradoElectrico")}
      ></SwitchField>
      <SwitchField
        label="Telecomunicaciones"
        defaultChecked={false}
        isDisabled={false}
        isChecked={telecomunicaciones}
        onChange={(e) => {
          let value = e.target.checked;
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
              telecomunicaciones: value,
              transportePublico,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.telecomunicaciones ?? value;
          }
          if (errors.telecomunicaciones?.hasError) {
            runValidationTasks("telecomunicaciones", value);
          }
          setTelecomunicaciones(value);
        }}
        onBlur={() =>
          runValidationTasks("telecomunicaciones", telecomunicaciones)
        }
        errorMessage={errors.telecomunicaciones?.errorMessage}
        hasError={errors.telecomunicaciones?.hasError}
        {...getOverrideProps(overrides, "telecomunicaciones")}
      ></SwitchField>
      <SwitchField
        label="Transporte publico"
        defaultChecked={false}
        isDisabled={false}
        isChecked={transportePublico}
        onChange={(e) => {
          let value = e.target.checked;
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
              transportePublico: value,
              otrosInfraestructura,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.transportePublico ?? value;
          }
          if (errors.transportePublico?.hasError) {
            runValidationTasks("transportePublico", value);
          }
          setTransportePublico(value);
        }}
        onBlur={() =>
          runValidationTasks("transportePublico", transportePublico)
        }
        errorMessage={errors.transportePublico?.errorMessage}
        hasError={errors.transportePublico?.hasError}
        {...getOverrideProps(overrides, "transportePublico")}
      ></SwitchField>
      <SwitchField
        label="Otros infraestructura"
        defaultChecked={false}
        isDisabled={false}
        isChecked={otrosInfraestructura}
        onChange={(e) => {
          let value = e.target.checked;
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
              otrosInfraestructura: value,
              area,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.otrosInfraestructura ?? value;
          }
          if (errors.otrosInfraestructura?.hasError) {
            runValidationTasks("otrosInfraestructura", value);
          }
          setOtrosInfraestructura(value);
        }}
        onBlur={() =>
          runValidationTasks("otrosInfraestructura", otrosInfraestructura)
        }
        errorMessage={errors.otrosInfraestructura?.errorMessage}
        hasError={errors.otrosInfraestructura?.hasError}
        {...getOverrideProps(overrides, "otrosInfraestructura")}
      ></SwitchField>
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
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
        value={forma}
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.forma ?? value;
          }
          if (errors.forma?.hasError) {
            runValidationTasks("forma", value);
          }
          setForma(value);
        }}
        onBlur={() => runValidationTasks("forma", forma)}
        errorMessage={errors.forma?.errorMessage}
        hasError={errors.forma?.hasError}
        {...getOverrideProps(overrides, "forma")}
      ></TextField>
      <TextField
        label="Topografia"
        isRequired={false}
        isReadOnly={false}
        value={topografia}
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
              forma,
              topografia: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.topografia ?? value;
          }
          if (errors.topografia?.hasError) {
            runValidationTasks("topografia", value);
          }
          setTopografia(value);
        }}
        onBlur={() => runValidationTasks("topografia", topografia)}
        errorMessage={errors.topografia?.errorMessage}
        hasError={errors.topografia?.hasError}
        {...getOverrideProps(overrides, "topografia")}
      ></TextField>
      <TextField
        label="Edad"
        isRequired={false}
        isReadOnly={false}
        value={edad}
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
              forma,
              topografia,
              edad: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.edad ?? value;
          }
          if (errors.edad?.hasError) {
            runValidationTasks("edad", value);
          }
          setEdad(value);
        }}
        onBlur={() => runValidationTasks("edad", edad)}
        errorMessage={errors.edad?.errorMessage}
        hasError={errors.edad?.hasError}
        {...getOverrideProps(overrides, "edad")}
      ></TextField>
      <TextField
        label="Nivel edificacion"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={nivelEdificacion}
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
              area,
              forma,
              topografia,
              edad,
              nivelEdificacion: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.nivelEdificacion ?? value;
          }
          if (errors.nivelEdificacion?.hasError) {
            runValidationTasks("nivelEdificacion", value);
          }
          setNivelEdificacion(value);
        }}
        onBlur={() => runValidationTasks("nivelEdificacion", nivelEdificacion)}
        errorMessage={errors.nivelEdificacion?.errorMessage}
        hasError={errors.nivelEdificacion?.hasError}
        {...getOverrideProps(overrides, "nivelEdificacion")}
      ></TextField>
      <TextField
        label="Descripcion interior"
        isRequired={false}
        isReadOnly={false}
        value={descripcionInterior}
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
              forma,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.descripcionInterior ?? value;
          }
          if (errors.descripcionInterior?.hasError) {
            runValidationTasks("descripcionInterior", value);
          }
          setDescripcionInterior(value);
        }}
        onBlur={() =>
          runValidationTasks("descripcionInterior", descripcionInterior)
        }
        errorMessage={errors.descripcionInterior?.errorMessage}
        hasError={errors.descripcionInterior?.hasError}
        {...getOverrideProps(overrides, "descripcionInterior")}
      ></TextField>
      <TextField
        label="Terminacion pisos interiores"
        isRequired={false}
        isReadOnly={false}
        value={terminacionPisosInteriores}
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
              forma,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior,
              terminacionPisosInteriores: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionPisosInteriores ?? value;
          }
          if (errors.terminacionPisosInteriores?.hasError) {
            runValidationTasks("terminacionPisosInteriores", value);
          }
          setTerminacionPisosInteriores(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "terminacionPisosInteriores",
            terminacionPisosInteriores
          )
        }
        errorMessage={errors.terminacionPisosInteriores?.errorMessage}
        hasError={errors.terminacionPisosInteriores?.hasError}
        {...getOverrideProps(overrides, "terminacionPisosInteriores")}
      ></TextField>
      <TextField
        label="Terminacion pisos exteriores"
        isRequired={false}
        isReadOnly={false}
        value={terminacionPisosExteriores}
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
              forma,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior,
              terminacionPisosInteriores,
              terminacionPisosExteriores: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionPisosExteriores ?? value;
          }
          if (errors.terminacionPisosExteriores?.hasError) {
            runValidationTasks("terminacionPisosExteriores", value);
          }
          setTerminacionPisosExteriores(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "terminacionPisosExteriores",
            terminacionPisosExteriores
          )
        }
        errorMessage={errors.terminacionPisosExteriores?.errorMessage}
        hasError={errors.terminacionPisosExteriores?.hasError}
        {...getOverrideProps(overrides, "terminacionPisosExteriores")}
      ></TextField>
      <TextField
        label="Terminacion huellas"
        isRequired={false}
        isReadOnly={false}
        value={terminacionHuellas}
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
              forma,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior,
              terminacionPisosInteriores,
              terminacionPisosExteriores,
              terminacionHuellas: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionHuellas ?? value;
          }
          if (errors.terminacionHuellas?.hasError) {
            runValidationTasks("terminacionHuellas", value);
          }
          setTerminacionHuellas(value);
        }}
        onBlur={() =>
          runValidationTasks("terminacionHuellas", terminacionHuellas)
        }
        errorMessage={errors.terminacionHuellas?.errorMessage}
        hasError={errors.terminacionHuellas?.hasError}
        {...getOverrideProps(overrides, "terminacionHuellas")}
      ></TextField>
      <TextField
        label="Terminacion muros"
        isRequired={false}
        isReadOnly={false}
        value={terminacionMuros}
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
              forma,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior,
              terminacionPisosInteriores,
              terminacionPisosExteriores,
              terminacionHuellas,
              terminacionMuros: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionMuros ?? value;
          }
          if (errors.terminacionMuros?.hasError) {
            runValidationTasks("terminacionMuros", value);
          }
          setTerminacionMuros(value);
        }}
        onBlur={() => runValidationTasks("terminacionMuros", terminacionMuros)}
        errorMessage={errors.terminacionMuros?.errorMessage}
        hasError={errors.terminacionMuros?.hasError}
        {...getOverrideProps(overrides, "terminacionMuros")}
      ></TextField>
      <TextField
        label="Terminacion revestimiento"
        isRequired={false}
        isReadOnly={false}
        value={terminacionRevestimiento}
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
              forma,
              topografia,
              edad,
              nivelEdificacion,
              descripcionInterior,
              terminacionPisosInteriores,
              terminacionPisosExteriores,
              terminacionHuellas,
              terminacionMuros,
              terminacionRevestimiento: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionRevestimiento ?? value;
          }
          if (errors.terminacionRevestimiento?.hasError) {
            runValidationTasks("terminacionRevestimiento", value);
          }
          setTerminacionRevestimiento(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "terminacionRevestimiento",
            terminacionRevestimiento
          )
        }
        errorMessage={errors.terminacionRevestimiento?.errorMessage}
        hasError={errors.terminacionRevestimiento?.hasError}
        {...getOverrideProps(overrides, "terminacionRevestimiento")}
      ></TextField>
      <TextField
        label="Terminacion puerta principal"
        isRequired={false}
        isReadOnly={false}
        value={terminacionPuertaPrincipal}
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
              terminacionPuertaPrincipal: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionPuertaPrincipal ?? value;
          }
          if (errors.terminacionPuertaPrincipal?.hasError) {
            runValidationTasks("terminacionPuertaPrincipal", value);
          }
          setTerminacionPuertaPrincipal(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "terminacionPuertaPrincipal",
            terminacionPuertaPrincipal
          )
        }
        errorMessage={errors.terminacionPuertaPrincipal?.errorMessage}
        hasError={errors.terminacionPuertaPrincipal?.hasError}
        {...getOverrideProps(overrides, "terminacionPuertaPrincipal")}
      ></TextField>
      <TextField
        label="Terminacion puertas interiores"
        isRequired={false}
        isReadOnly={false}
        value={terminacionPuertasInteriores}
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
              terminacionPuertasInteriores: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionPuertasInteriores ?? value;
          }
          if (errors.terminacionPuertasInteriores?.hasError) {
            runValidationTasks("terminacionPuertasInteriores", value);
          }
          setTerminacionPuertasInteriores(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "terminacionPuertasInteriores",
            terminacionPuertasInteriores
          )
        }
        errorMessage={errors.terminacionPuertasInteriores?.errorMessage}
        hasError={errors.terminacionPuertasInteriores?.hasError}
        {...getOverrideProps(overrides, "terminacionPuertasInteriores")}
      ></TextField>
      <TextField
        label="Terminacion puertas closet"
        isRequired={false}
        isReadOnly={false}
        value={terminacionPuertasCloset}
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
              terminacionPuertasCloset: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionPuertasCloset ?? value;
          }
          if (errors.terminacionPuertasCloset?.hasError) {
            runValidationTasks("terminacionPuertasCloset", value);
          }
          setTerminacionPuertasCloset(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "terminacionPuertasCloset",
            terminacionPuertasCloset
          )
        }
        errorMessage={errors.terminacionPuertasCloset?.errorMessage}
        hasError={errors.terminacionPuertasCloset?.hasError}
        {...getOverrideProps(overrides, "terminacionPuertasCloset")}
      ></TextField>
      <TextField
        label="Terminacion gabinetes"
        isRequired={false}
        isReadOnly={false}
        value={terminacionGabinetes}
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
              terminacionGabinetes: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionGabinetes ?? value;
          }
          if (errors.terminacionGabinetes?.hasError) {
            runValidationTasks("terminacionGabinetes", value);
          }
          setTerminacionGabinetes(value);
        }}
        onBlur={() =>
          runValidationTasks("terminacionGabinetes", terminacionGabinetes)
        }
        errorMessage={errors.terminacionGabinetes?.errorMessage}
        hasError={errors.terminacionGabinetes?.hasError}
        {...getOverrideProps(overrides, "terminacionGabinetes")}
      ></TextField>
      <TextField
        label="Terminacion tope cocina"
        isRequired={false}
        isReadOnly={false}
        value={terminacionTopeCocina}
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
              terminacionTopeCocina: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionTopeCocina ?? value;
          }
          if (errors.terminacionTopeCocina?.hasError) {
            runValidationTasks("terminacionTopeCocina", value);
          }
          setTerminacionTopeCocina(value);
        }}
        onBlur={() =>
          runValidationTasks("terminacionTopeCocina", terminacionTopeCocina)
        }
        errorMessage={errors.terminacionTopeCocina?.errorMessage}
        hasError={errors.terminacionTopeCocina?.hasError}
        {...getOverrideProps(overrides, "terminacionTopeCocina")}
      ></TextField>
      <TextField
        label="Terminacion techo"
        isRequired={false}
        isReadOnly={false}
        value={terminacionTecho}
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
              terminacionTecho: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionTecho ?? value;
          }
          if (errors.terminacionTecho?.hasError) {
            runValidationTasks("terminacionTecho", value);
          }
          setTerminacionTecho(value);
        }}
        onBlur={() => runValidationTasks("terminacionTecho", terminacionTecho)}
        errorMessage={errors.terminacionTecho?.errorMessage}
        hasError={errors.terminacionTecho?.hasError}
        {...getOverrideProps(overrides, "terminacionTecho")}
      ></TextField>
      <TextField
        label="Terminacion cornisa"
        isRequired={false}
        isReadOnly={false}
        value={terminacionCornisa}
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
              terminacionCornisa: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionCornisa ?? value;
          }
          if (errors.terminacionCornisa?.hasError) {
            runValidationTasks("terminacionCornisa", value);
          }
          setTerminacionCornisa(value);
        }}
        onBlur={() =>
          runValidationTasks("terminacionCornisa", terminacionCornisa)
        }
        errorMessage={errors.terminacionCornisa?.errorMessage}
        hasError={errors.terminacionCornisa?.hasError}
        {...getOverrideProps(overrides, "terminacionCornisa")}
      ></TextField>
      <TextField
        label="Terminacion plafones"
        isRequired={false}
        isReadOnly={false}
        value={terminacionPlafones}
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
              terminacionPlafones: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionPlafones ?? value;
          }
          if (errors.terminacionPlafones?.hasError) {
            runValidationTasks("terminacionPlafones", value);
          }
          setTerminacionPlafones(value);
        }}
        onBlur={() =>
          runValidationTasks("terminacionPlafones", terminacionPlafones)
        }
        errorMessage={errors.terminacionPlafones?.errorMessage}
        hasError={errors.terminacionPlafones?.hasError}
        {...getOverrideProps(overrides, "terminacionPlafones")}
      ></TextField>
      <TextField
        label="Terminacion ventanas"
        isRequired={false}
        isReadOnly={false}
        value={terminacionVentanas}
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
              terminacionVentanas: value,
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionVentanas ?? value;
          }
          if (errors.terminacionVentanas?.hasError) {
            runValidationTasks("terminacionVentanas", value);
          }
          setTerminacionVentanas(value);
        }}
        onBlur={() =>
          runValidationTasks("terminacionVentanas", terminacionVentanas)
        }
        errorMessage={errors.terminacionVentanas?.errorMessage}
        hasError={errors.terminacionVentanas?.hasError}
        {...getOverrideProps(overrides, "terminacionVentanas")}
      ></TextField>
      <TextField
        label="Terminacion pasamanos"
        isRequired={false}
        isReadOnly={false}
        value={terminacionPasamanos}
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
              terminacionPasamanos: value,
              areaBasicoTerreno,
              costoMetroBasicoTerreno,
              areaBasicoConstruccion,
              costoMetroBasicoConstruccion,
              montoDepreciacion,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.terminacionPasamanos ?? value;
          }
          if (errors.terminacionPasamanos?.hasError) {
            runValidationTasks("terminacionPasamanos", value);
          }
          setTerminacionPasamanos(value);
        }}
        onBlur={() =>
          runValidationTasks("terminacionPasamanos", terminacionPasamanos)
        }
        errorMessage={errors.terminacionPasamanos?.errorMessage}
        hasError={errors.terminacionPasamanos?.hasError}
        {...getOverrideProps(overrides, "terminacionPasamanos")}
      ></TextField>
      <TextField
        label="Area basico terreno"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={areaBasicoTerreno}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaBasicoTerreno: value,
              costoMetroBasicoTerreno,
              areaBasicoConstruccion,
              costoMetroBasicoConstruccion,
              montoDepreciacion,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.areaBasicoTerreno ?? value;
          }
          if (errors.areaBasicoTerreno?.hasError) {
            runValidationTasks("areaBasicoTerreno", value);
          }
          setAreaBasicoTerreno(value);
        }}
        onBlur={() =>
          runValidationTasks("areaBasicoTerreno", areaBasicoTerreno)
        }
        errorMessage={errors.areaBasicoTerreno?.errorMessage}
        hasError={errors.areaBasicoTerreno?.hasError}
        {...getOverrideProps(overrides, "areaBasicoTerreno")}
      ></TextField>
      <TextField
        label="Costo metro basico terreno"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={costoMetroBasicoTerreno}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              costoMetroBasicoTerreno: value,
              areaBasicoConstruccion,
              costoMetroBasicoConstruccion,
              montoDepreciacion,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.costoMetroBasicoTerreno ?? value;
          }
          if (errors.costoMetroBasicoTerreno?.hasError) {
            runValidationTasks("costoMetroBasicoTerreno", value);
          }
          setCostoMetroBasicoTerreno(value);
        }}
        onBlur={() =>
          runValidationTasks("costoMetroBasicoTerreno", costoMetroBasicoTerreno)
        }
        errorMessage={errors.costoMetroBasicoTerreno?.errorMessage}
        hasError={errors.costoMetroBasicoTerreno?.hasError}
        {...getOverrideProps(overrides, "costoMetroBasicoTerreno")}
      ></TextField>
      <TextField
        label="Area basico construccion"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={areaBasicoConstruccion}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaBasicoConstruccion: value,
              costoMetroBasicoConstruccion,
              montoDepreciacion,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.areaBasicoConstruccion ?? value;
          }
          if (errors.areaBasicoConstruccion?.hasError) {
            runValidationTasks("areaBasicoConstruccion", value);
          }
          setAreaBasicoConstruccion(value);
        }}
        onBlur={() =>
          runValidationTasks("areaBasicoConstruccion", areaBasicoConstruccion)
        }
        errorMessage={errors.areaBasicoConstruccion?.errorMessage}
        hasError={errors.areaBasicoConstruccion?.hasError}
        {...getOverrideProps(overrides, "areaBasicoConstruccion")}
      ></TextField>
      <TextField
        label="Costo metro basico construccion"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={costoMetroBasicoConstruccion}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              costoMetroBasicoConstruccion: value,
              montoDepreciacion,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.costoMetroBasicoConstruccion ?? value;
          }
          if (errors.costoMetroBasicoConstruccion?.hasError) {
            runValidationTasks("costoMetroBasicoConstruccion", value);
          }
          setCostoMetroBasicoConstruccion(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "costoMetroBasicoConstruccion",
            costoMetroBasicoConstruccion
          )
        }
        errorMessage={errors.costoMetroBasicoConstruccion?.errorMessage}
        hasError={errors.costoMetroBasicoConstruccion?.hasError}
        {...getOverrideProps(overrides, "costoMetroBasicoConstruccion")}
      ></TextField>
      <TextField
        label="Monto depreciacion"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={montoDepreciacion}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              montoDepreciacion: value,
              montoMejoras,
              depreciacionMejoras,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.montoDepreciacion ?? value;
          }
          if (errors.montoDepreciacion?.hasError) {
            runValidationTasks("montoDepreciacion", value);
          }
          setMontoDepreciacion(value);
        }}
        onBlur={() =>
          runValidationTasks("montoDepreciacion", montoDepreciacion)
        }
        errorMessage={errors.montoDepreciacion?.errorMessage}
        hasError={errors.montoDepreciacion?.hasError}
        {...getOverrideProps(overrides, "montoDepreciacion")}
      ></TextField>
      <TextField
        label="Monto mejoras"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={montoMejoras}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              montoMejoras: value,
              depreciacionMejoras,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.montoMejoras ?? value;
          }
          if (errors.montoMejoras?.hasError) {
            runValidationTasks("montoMejoras", value);
          }
          setMontoMejoras(value);
        }}
        onBlur={() => runValidationTasks("montoMejoras", montoMejoras)}
        errorMessage={errors.montoMejoras?.errorMessage}
        hasError={errors.montoMejoras?.hasError}
        {...getOverrideProps(overrides, "montoMejoras")}
      ></TextField>
      <TextField
        label="Depreciacion mejoras"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={depreciacionMejoras}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              depreciacionMejoras: value,
              valorInmueble,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.depreciacionMejoras ?? value;
          }
          if (errors.depreciacionMejoras?.hasError) {
            runValidationTasks("depreciacionMejoras", value);
          }
          setDepreciacionMejoras(value);
        }}
        onBlur={() =>
          runValidationTasks("depreciacionMejoras", depreciacionMejoras)
        }
        errorMessage={errors.depreciacionMejoras?.errorMessage}
        hasError={errors.depreciacionMejoras?.hasError}
        {...getOverrideProps(overrides, "depreciacionMejoras")}
      ></TextField>
      <TextField
        label="Valor inmueble"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={valorInmueble}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              valorInmueble: value,
              comentario,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.valorInmueble ?? value;
          }
          if (errors.valorInmueble?.hasError) {
            runValidationTasks("valorInmueble", value);
          }
          setValorInmueble(value);
        }}
        onBlur={() => runValidationTasks("valorInmueble", valorInmueble)}
        errorMessage={errors.valorInmueble?.errorMessage}
        hasError={errors.valorInmueble?.hasError}
        {...getOverrideProps(overrides, "valorInmueble")}
      ></TextField>
      <TextField
        label="Comentario"
        isRequired={false}
        isReadOnly={false}
        value={comentario}
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
              comentario: value,
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.comentario ?? value;
          }
          if (errors.comentario?.hasError) {
            runValidationTasks("comentario", value);
          }
          setComentario(value);
        }}
        onBlur={() => runValidationTasks("comentario", comentario)}
        errorMessage={errors.comentario?.errorMessage}
        hasError={errors.comentario?.hasError}
        {...getOverrideProps(overrides, "comentario")}
      ></TextField>
      <TextField
        label="Area parqueo"
        isRequired={false}
        isReadOnly={false}
        value={areaParqueo}
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
              areaParqueo: value,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.areaParqueo ?? value;
          }
          if (errors.areaParqueo?.hasError) {
            runValidationTasks("areaParqueo", value);
          }
          setAreaParqueo(value);
        }}
        onBlur={() => runValidationTasks("areaParqueo", areaParqueo)}
        errorMessage={errors.areaParqueo?.errorMessage}
        hasError={errors.areaParqueo?.hasError}
        {...getOverrideProps(overrides, "areaParqueo")}
      ></TextField>
      <TextField
        label="Costo metro parqueo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={costoMetroParqueo}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaParqueo,
              costoMetroParqueo: value,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.costoMetroParqueo ?? value;
          }
          if (errors.costoMetroParqueo?.hasError) {
            runValidationTasks("costoMetroParqueo", value);
          }
          setCostoMetroParqueo(value);
        }}
        onBlur={() =>
          runValidationTasks("costoMetroParqueo", costoMetroParqueo)
        }
        errorMessage={errors.costoMetroParqueo?.errorMessage}
        hasError={errors.costoMetroParqueo?.hasError}
        {...getOverrideProps(overrides, "costoMetroParqueo")}
      ></TextField>
      <TextField
        label="Area apartamento"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={areaApartamento}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento: value,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.areaApartamento ?? value;
          }
          if (errors.areaApartamento?.hasError) {
            runValidationTasks("areaApartamento", value);
          }
          setAreaApartamento(value);
        }}
        onBlur={() => runValidationTasks("areaApartamento", areaApartamento)}
        errorMessage={errors.areaApartamento?.errorMessage}
        hasError={errors.areaApartamento?.hasError}
        {...getOverrideProps(overrides, "areaApartamento")}
      ></TextField>
      <TextField
        label="Costo metro apartamento"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={costoMetroApartamento}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento: value,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.costoMetroApartamento ?? value;
          }
          if (errors.costoMetroApartamento?.hasError) {
            runValidationTasks("costoMetroApartamento", value);
          }
          setCostoMetroApartamento(value);
        }}
        onBlur={() =>
          runValidationTasks("costoMetroApartamento", costoMetroApartamento)
        }
        errorMessage={errors.costoMetroApartamento?.errorMessage}
        hasError={errors.costoMetroApartamento?.hasError}
        {...getOverrideProps(overrides, "costoMetroApartamento")}
      ></TextField>
      <TextField
        label="Area terraza"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={areaTerraza}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza: value,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.areaTerraza ?? value;
          }
          if (errors.areaTerraza?.hasError) {
            runValidationTasks("areaTerraza", value);
          }
          setAreaTerraza(value);
        }}
        onBlur={() => runValidationTasks("areaTerraza", areaTerraza)}
        errorMessage={errors.areaTerraza?.errorMessage}
        hasError={errors.areaTerraza?.hasError}
        {...getOverrideProps(overrides, "areaTerraza")}
      ></TextField>
      <TextField
        label="Costo metro terraza"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={costoMetroTerraza}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza: value,
              tasaDolar,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.costoMetroTerraza ?? value;
          }
          if (errors.costoMetroTerraza?.hasError) {
            runValidationTasks("costoMetroTerraza", value);
          }
          setCostoMetroTerraza(value);
        }}
        onBlur={() =>
          runValidationTasks("costoMetroTerraza", costoMetroTerraza)
        }
        errorMessage={errors.costoMetroTerraza?.errorMessage}
        hasError={errors.costoMetroTerraza?.hasError}
        {...getOverrideProps(overrides, "costoMetroTerraza")}
      ></TextField>
      <TextField
        label="Tasa dolar"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tasaDolar}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar: value,
              tieneTerraza,
            };
            const result = onChange(modelFields);
            value = result?.tasaDolar ?? value;
          }
          if (errors.tasaDolar?.hasError) {
            runValidationTasks("tasaDolar", value);
          }
          setTasaDolar(value);
        }}
        onBlur={() => runValidationTasks("tasaDolar", tasaDolar)}
        errorMessage={errors.tasaDolar?.errorMessage}
        hasError={errors.tasaDolar?.hasError}
        {...getOverrideProps(overrides, "tasaDolar")}
      ></TextField>
      <SwitchField
        label="Tiene terraza"
        defaultChecked={false}
        isDisabled={false}
        isChecked={tieneTerraza}
        onChange={(e) => {
          let value = e.target.checked;
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
              areaParqueo,
              costoMetroParqueo,
              areaApartamento,
              costoMetroApartamento,
              areaTerraza,
              costoMetroTerraza,
              tasaDolar,
              tieneTerraza: value,
            };
            const result = onChange(modelFields);
            value = result?.tieneTerraza ?? value;
          }
          if (errors.tieneTerraza?.hasError) {
            runValidationTasks("tieneTerraza", value);
          }
          setTieneTerraza(value);
        }}
        onBlur={() => runValidationTasks("tieneTerraza", tieneTerraza)}
        errorMessage={errors.tieneTerraza?.errorMessage}
        hasError={errors.tieneTerraza?.hasError}
        {...getOverrideProps(overrides, "tieneTerraza")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || informeTasacionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || informeTasacionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
