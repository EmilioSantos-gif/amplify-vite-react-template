/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInformeTasacion = /* GraphQL */ `
  mutation CreateInformeTasacion(
    $condition: ModelInformeTasacionConditionInput
    $input: CreateInformeTasacionInput!
  ) {
    createInformeTasacion(condition: $condition, input: $input) {
      aceras
      aguaPotable
      alcantarillado
      alumbradoElectrico
      area
      areaBasicoConstruccion
      areaBasicoTerreno
      bloque
      callesAsfaltadas
      claseSocial
      comentario
      condominio
      constanciaVenta
      contenes
      costoMetroBasicoConstruccion
      costoMetroBasicoTerreno
      createdAt
      dc
      depreciacionMejoras
      desarrollo
      descripcionInterior
      designacionCatastral
      direccionInmueble
      edad
      edificioNo
      entidadBancaria
      etapa
      fechaTasacion
      folioNo
      forma
      id
      libroNo
      solicitantes
      localidad
      manzana
      manzanaLegal
      montoDepreciacion
      montoMejoras
      nivelEdificacion
      numeroTitulo
      otrosInfraestructura
      owner
      parcela
      pisos
      propietario
      serviceDesk
      solar
      telecomunicaciones
      terminacionCornisa
      terminacionGabinetes
      terminacionHuellas
      terminacionMuros
      terminacionPasamanos
      terminacionPisosExteriores
      terminacionPisosInteriores
      terminacionPlafones
      terminacionPuertaPrincipal
      terminacionPuertasCloset
      terminacionPuertasInteriores
      terminacionRevestimiento
      terminacionTecho
      terminacionTopeCocina
      terminacionVentanas
      tipo
      tipoEdificio
      tipoTasacion
      tipoTopologia
      tipologiaVecindario
      topografia
      transportePublico
      ubicacion
      ubicacionTerreno
      updatedAt
      valorInmueble
      areaParqueo
      costoMetroParqueo
      areaApartamento
      costoMetroApartamento
      areaTerraza
      costoMetroTerraza
      tasaDolar
      tieneTerraza
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteInformeTasacion = /* GraphQL */ `
  mutation DeleteInformeTasacion(
    $condition: ModelInformeTasacionConditionInput
    $input: DeleteInformeTasacionInput!
  ) {
    deleteInformeTasacion(condition: $condition, input: $input) {
      aceras
      aguaPotable
      alcantarillado
      alumbradoElectrico
      area
      areaBasicoConstruccion
      areaBasicoTerreno
      bloque
      callesAsfaltadas
      claseSocial
      comentario
      condominio
      constanciaVenta
      contenes
      costoMetroBasicoConstruccion
      costoMetroBasicoTerreno
      createdAt
      dc
      depreciacionMejoras
      desarrollo
      descripcionInterior
      designacionCatastral
      direccionInmueble
      edad
      edificioNo
      entidadBancaria
      etapa
      fechaTasacion
      folioNo
      forma
      id
      libroNo
      localidad
      manzana
      manzanaLegal
      montoDepreciacion
      montoMejoras
      nivelEdificacion
      solicitantes
      numeroTitulo
      otrosInfraestructura
      owner
      parcela
      pisos
      propietario
      serviceDesk
      solar
      telecomunicaciones
      terminacionCornisa
      terminacionGabinetes
      terminacionHuellas
      terminacionMuros
      terminacionPasamanos
      terminacionPisosExteriores
      terminacionPisosInteriores
      terminacionPlafones
      terminacionPuertaPrincipal
      terminacionPuertasCloset
      terminacionPuertasInteriores
      terminacionRevestimiento
      terminacionTecho
      terminacionTopeCocina
      terminacionVentanas
      tipo
      tipoEdificio
      tipoTasacion
      tipoTopologia
      tipologiaVecindario
      topografia
      transportePublico
      ubicacion
      ubicacionTerreno
      updatedAt
      valorInmueble
      areaParqueo
      costoMetroParqueo
      areaApartamento
      costoMetroApartamento
      areaTerraza
      costoMetroTerraza
      tasaDolar
      tieneTerraza
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateInformeTasacion = /* GraphQL */ `
  mutation UpdateInformeTasacion(
    $condition: ModelInformeTasacionConditionInput
    $input: UpdateInformeTasacionInput!
  ) {
    updateInformeTasacion(condition: $condition, input: $input) {
      aceras
      aguaPotable
      alcantarillado
      alumbradoElectrico
      area
      areaBasicoConstruccion
      areaBasicoTerreno
      bloque
      callesAsfaltadas
      claseSocial
      comentario
      condominio
      constanciaVenta
      contenes
      costoMetroBasicoConstruccion
      costoMetroBasicoTerreno
      dc
      depreciacionMejoras
      desarrollo
      descripcionInterior
      designacionCatastral
      direccionInmueble
      edad
      edificioNo
      entidadBancaria
      etapa
      fechaTasacion
      folioNo
      forma
      id
      libroNo
      localidad
      manzana
      manzanaLegal
      montoDepreciacion
      montoMejoras
      nivelEdificacion
      solicitantes
      numeroTitulo
      otrosInfraestructura
      parcela
      pisos
      propietario
      serviceDesk
      solar
      telecomunicaciones
      terminacionCornisa
      terminacionGabinetes
      terminacionHuellas
      terminacionMuros
      terminacionPasamanos
      terminacionPisosExteriores
      terminacionPisosInteriores
      terminacionPlafones
      terminacionPuertaPrincipal
      terminacionPuertasCloset
      terminacionPuertasInteriores
      terminacionRevestimiento
      terminacionTecho
      terminacionTopeCocina
      terminacionVentanas
      tipo
      tipoEdificio
      tipoTasacion
      tipoTopologia
      tipologiaVecindario
      topografia
      transportePublico
      ubicacion
      ubicacionTerreno
      valorInmueble
      areaParqueo
      costoMetroParqueo
      areaApartamento
      costoMetroApartamento
      areaTerraza
      costoMetroTerraza
      tasaDolar
      tieneTerraza
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
