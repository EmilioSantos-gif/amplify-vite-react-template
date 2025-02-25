import type { Schema } from "../../data/resource"

export const handler: Schema["downloadInforme"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { tipoTasacion, idTasacion } = event.arguments
  // return typed from `.returns()`

  if (tipoTasacion === "Apartamento") {
    //recuperar plantilla de S3

    //lenar plantilla con valores

    //devolver plantilla con valores sustituidos
  }
  return `Hello, ${tipoTasacion}!`
}