"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { Button, Grid, Card, Heading, Text } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const client = generateClient();

export default function InformeTasacionList() {
  const [informes, setInformes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInformes();
  }, []);

  const fetchInformes = async () => {
    const { data } = await client.models.InformeTasacion.list();
    setInformes(data);
  };

  const handleView = (id) => {
    navigate(`/resumen/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/create/${id}`);
  };

  return (
    <Grid
      rowGap="20px"
      columnGap="20px"
      padding="20px"
      width="100%"
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <Heading level={3} marginBottom="20px">Lista de Informes de Tasación</Heading>
      {informes?.map((informe) => (
        <Card key={informe.id} padding="20px" boxShadow="medium" borderRadius="medium">
          <Heading level={5} marginBottom="10px">{informe.nombreSolicitante}</Heading>
          <Text>Fecha Tasación: {informe.fechaTasacion || "N/A"}</Text>
          <Text>Tipo Tasación: {informe.tipoTasacion || "N/A"}</Text>
          <Text>Ubicación: {informe.ubicacion || "N/A"}</Text>
          <Text>Entidad Bancaria: {informe.entidadBancaria || "N/A"}</Text>
          <Button onClick={() => handleView(informe.id)} marginTop="10px" variation="link">View</Button>
          <Button onClick={() => handleEdit(informe.id)} marginTop="10px" variation="primary">Edit</Button>
        </Card>
      ))}
    </Grid>
  );
}
