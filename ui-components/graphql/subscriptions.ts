/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInformeTasacion = /* GraphQL */ `
  subscription OnCreateInformeTasacion(
    $filter: ModelSubscriptionInformeTasacionFilterInput
    $owner: String
  ) {
    onCreateInformeTasacion(filter: $filter, owner: $owner) {
      aceras
      aguaPotable
      alcantarillado
      alumbradoElectrico
      area
      areaApartamento
      areaBasicoConstruccion
      areaBasicoTerreno
      areaParqueo
      areaTerraza
      bloque
      callesAsfaltadas
      claseSocial
      comentario
      condominio
      constanciaVenta
      contenes
      costoMetroApartamento
      costoMetroBasicoConstruccion
      costoMetroBasicoTerreno
      costoMetroParqueo
      costoMetroTerraza
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
      tasaDolar
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
      tieneTerraza
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
      __typename
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInformeTasacion = /* GraphQL */ `
  subscription OnDeleteInformeTasacion(
    $filter: ModelSubscriptionInformeTasacionFilterInput
    $owner: String
  ) {
    onDeleteInformeTasacion(filter: $filter, owner: $owner) {
      aceras
      aguaPotable
      alcantarillado
      alumbradoElectrico
      area
      areaApartamento
      areaBasicoConstruccion
      areaBasicoTerreno
      areaParqueo
      areaTerraza
      bloque
      callesAsfaltadas
      claseSocial
      comentario
      condominio
      constanciaVenta
      contenes
      costoMetroApartamento
      costoMetroBasicoConstruccion
      costoMetroBasicoTerreno
      costoMetroParqueo
      costoMetroTerraza
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
      tasaDolar
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
      tieneTerraza
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
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInformeTasacion = /* GraphQL */ `
  subscription OnUpdateInformeTasacion(
    $filter: ModelSubscriptionInformeTasacionFilterInput
    $owner: String
  ) {
    onUpdateInformeTasacion(filter: $filter, owner: $owner) {
      aceras
      aguaPotable
      alcantarillado
      alumbradoElectrico
      area
      areaApartamento
      areaBasicoConstruccion
      areaBasicoTerreno
      areaParqueo
      areaTerraza
      bloque
      callesAsfaltadas
      claseSocial
      comentario
      condominio
      constanciaVenta
      contenes
      costoMetroApartamento
      costoMetroBasicoConstruccion
      costoMetroBasicoTerreno
      costoMetroParqueo
      costoMetroTerraza
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
      tasaDolar
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
      tieneTerraza
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
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
