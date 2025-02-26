import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient, SelectionSet } from "aws-amplify/data";
import { Heading, SelectField, useAuthenticator, Grid, Card} from '@aws-amplify/ui-react';

import { Resumen, InformeTasacionCreateForm, InformeTasacionList } from '../ui-components';

import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

import { getUrl, downloadData } from 'aws-amplify/storage';

import AppBar from '@mui/material/AppBar';


import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";



const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [informes, setInformes] = useState<Array<Schema["InformeTasacion"]["type"]>>([]);

  
  const { user, signOut } = useAuthenticator();

  const [tasacion, setTasacion] = useState<Schema["InformeTasacion"]["type"]>();


  useEffect(() => {
    fetchInformes();
  }, []);

  const fetchInformes = async () => {
    const { data: informeTasacion} = await client.models.InformeTasacion.get({id: "e2f1b5fe-46c5-4fed-a7e0-1b56bc3fcc5a"});
    setTasacion(informeTasacion);
  }

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }
  
  function deleteTodo(id: string) {
    client.models.Todo.delete({id});
  }

  async function sayHello() {
    const promise = client.queries.sayHello({
      name: "Amplify",
    });

    promise.then((data) => {
      const greeting = data.data;
      console.log(greeting);
    });

    const linkToStorageFile = await getUrl({
      path: "templates/appartments/INFORME-APARTAMENTO.docx",
    });

    console.log('signed URL: ', linkToStorageFile.url);
    console.log('URL expires at: ', linkToStorageFile.expiresAt);

    downloadData({
      path: "templates/appartments/INFORME-APARTAMENTO.docx",
      cacheControl: 'no-cache'
    }).result.then(async (data) => {
      console.log(data);

      let blobDocument = data.body;

      const arrayBuffer = await blobDocument.arrayBuffer();

      const zip = new PizZip(arrayBuffer);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      //Modifiy document

      doc.render({
        fechaTasacion: "26 de febrero",
        personaSolicitante: "Emilio Santos",
        primerApellido: "Santos",
        tipoTasacion: "Apartamento",
        edificioNo: "10",
        condominio: "20",
        direccionInmueble: "La Javilla"
      })

      //Download document

      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      saveAs(out, "UpdatedDocument.docx");

    });
        
  }

  return (

    <div>

          <Routes>
            <Route path="/resumen" element={<Resumen />} />
            <Route path="/" element={<InformeTasacionList />} />
            <Route path="/create" element={<InformeTasacionCreateForm />} />
            <Route path="/create/:id" element={<InformeTasacionCreateForm />} />
          </Routes>

      </div>
  );
}
export default App;
