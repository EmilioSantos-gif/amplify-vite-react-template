"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { Button, Heading } from "@aws-amplify/ui-react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
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
    navigate(`/resumen`, { state: { id } });
  };

  const handleEdit = (id) => {
    navigate(`/create/${id}`);
  };

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <Heading level={3} marginBottom="20px">Lista de Informes de Tasación</Heading>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre Solicitante</TableCell>
              <TableCell>Fecha Tasación</TableCell>
              <TableCell>Tipo Tasación</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell>Entidad Bancaria</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {informes?.map((informe) => (
              <TableRow key={informe.id}>
                <TableCell>{informe.nombreSolicitante}</TableCell>
                <TableCell>{informe.fechaTasacion || "N/A"}</TableCell>
                <TableCell>{informe.tipoTasacion || "N/A"}</TableCell>
                <TableCell>{informe.ubicacion || "N/A"}</TableCell>
                <TableCell>{informe.entidadBancaria || "N/A"}</TableCell>
                <TableCell>
                  <Button onClick={() => handleView(informe.id)} variation="link">View</Button>
                  <Button onClick={() => handleEdit(informe.id)} variation="primary">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
