/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInformeTasacion = /* GraphQL */ `
  query GetInformeTasacion($id: ID!) {
    getInformeTasacion(id: $id) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const listInformeTasacions = /* GraphQL */ `
  query ListInformeTasacions(
    $filter: ModelInformeTasacionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInformeTasacions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
