"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { Button, Grid, Card, Heading } from "@aws-amplify/ui-react";
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
    navigate(`/edit/${id}`);
  };

  return (
    <Grid
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      width="100%"
    >
      <Heading level={3}>Lista de Informes de Tasación</Heading>
      {informes?.map((informe) => (
        <Card key={informe.id} padding="10px" marginBottom="10px">
          <Heading level={5}>{informe.id}</Heading>
          <Button onClick={() => handleView(informe.id)}>View</Button>
          <Button onClick={() => handleEdit(informe.id)}>Edit</Button>
        </Card>
      ))}
    </Grid>
  );
}
