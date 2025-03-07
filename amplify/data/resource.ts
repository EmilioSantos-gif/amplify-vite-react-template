import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
//import { sayHello } from "../functions/say-hello/resource"
//import { downloadInforme } from "../functions/download-informe/resource"

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    }).authorization(allow => [allow.owner()]),

    
    InformeTasacion: a
    .model({
      fechaTasacion: a.date(),
      serviceDesk: a.string(),
      tipoTasacion: a.string(),
      pisos: a.string(),
      tipo: a.string(),
      entidadBancaria: a.string(),
      tipoTopologia: a.string(),
      ubicacion: a.string(),
      ubicacionTerreno: a.string(),
      propietario: a.string(),
      nombreSolicitante: a.string(),
      apellidoSolicitante: a.string(),
      condominio: a.string(),
      direccionInmueble: a.string(),
      bloque: a.string(),
      etapa: a.string(),
      manzana: a.string(),
      edificioNo: a.string(),
      tipoEdificio: a.string(),
      numeroTitulo: a.string(),
      constanciaVenta: a.string(),
      designacionCatastral: a.string(),
      libroNo: a.string(),
      folioNo: a.string(),
      parcela: a.string(),
      solar: a.string(),
      manzanaLegal: a.string(),
      dc: a.string(),
      localidad: a.string(),
      desarrollo: a.string(),
      tipologiaVecindario: a.string(),
      claseSocial: a.string(),

      aceras: a.boolean(),
      contenes: a.boolean(),
      callesAsfaltadas: a.boolean(),
      alcantarillado: a.boolean(),
      aguaPotable: a.boolean(),
      alumbradoElectrico: a.boolean(),
      telecomunicaciones: a.boolean(),
      transportePublico: a.boolean(),
      otrosInfraestructura: a.boolean(),

      area: a.integer(),
      forma: a.string(),
      topografia: a.string(),
      edad: a.string(),
      nivelEdificacion: a.integer(),

      descripcionInterior: a.string(),
      terminacionPisosInteriores: a.string(),
      terminacionPisosExteriores: a.string(),
      terminacionHuellas: a.string(),
      terminacionMuros: a.string(),
      terminacionRevestimiento: a.string(),
      terminacionPuertaPrincipal: a.string(),
      terminacionPuertasInteriores: a.string(),
      terminacionPuertasCloset: a.string(),
      terminacionGabinetes: a.string(),
      terminacionTopeCocina: a.string(),
      terminacionTecho: a.string(),
      terminacionCornisa: a.string(),
      terminacionPlafones: a.string(),
      terminacionVentanas: a.string(),
      terminacionPasamanos: a.string(),

      areaBasicoTerreno: a.float(),
      costoMetroBasicoTerreno: a.float(),
      areaBasicoConstruccion: a.float(),
      costoMetroBasicoConstruccion: a.float(),
      montoDepreciacion: a.float(),
      montoMejoras: a.float(),
      depreciacionMejoras: a.float(),
      valorInmueble: a.float(),

      comentario: a.string(),

      areaParqueo: a.string(),
      costoMetroParqueo: a.float(),
      areaApartamento: a.float(),
      costoMetroApartamento: a.float(),
      areaTerraza: a.float(),
      costoMetroTerraza: a.float(),
      tasaDolar: a.float(),
      tieneTerraza: a.boolean()


    })
    .authorization((allow) => [allow.owner()]), // Restricts access to record owners

    /*
    sayHello: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())
    .handler(a.handler.function(sayHello))
    .authorization((allow) => allow.authenticated()),

    downloadInforme: a
    .query()
    .arguments({
      tipoTasacion: a.string(),
      tasacion: a.string(),
    })
    .returns(a.string())
    .handler(a.handler.function(downloadInforme))
    .authorization((allow) => allow.authenticated()),
    */
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
