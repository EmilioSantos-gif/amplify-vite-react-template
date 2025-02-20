import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient, SelectionSet } from "aws-amplify/data";
import { Heading, SelectField, useAuthenticator, Grid, Card} from '@aws-amplify/ui-react';

import { Resumen, InformeTasacionCreateForm, InformeTasacionList } from '../ui-components';

import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";


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

  return (

      <Grid
        paddingLeft="0"
        paddingTop="0"
        templateColumns="1fr 1fr 1fr"  // Sidebar (nav) + Main content
        templateRows="1fr 3fr 1fr"  // Header, Main, Footer
        gap="1rem"
        height="100vh" // Full viewport height
        padding="1rem"
      >
        {/* Navigation */}

        <Card
          paddingTop="0"
          rowStart="1"
          rowEnd="-1"
          columnStart="1"
          columnEnd="2">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </nav>
        </Card>

        {/* Header */}
        <Card
          columnStart="2"
          columnEnd="-1">
          <h1>Header</h1>

          <h1>My todos</h1>
          <button onClick={createTodo}>+ new</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.content}</li>
            ))}
          </ul>

          {tasacion ? (
            <p>{tasacion.apellidoSolicitante}</p>
          ) : "No tasacion data"
        }

        </Card>


        {/* Main Content */}
        <Card
          columnStart="2"
          columnEnd="-1">

          <Routes>
            <Route path="/resumen" element={<Resumen />} />
            <Route path="/" element={<InformeTasacionList />} />
            <Route path="/create" element={<InformeTasacionCreateForm />} />
            <Route path="/create/:id" element={<InformeTasacionCreateForm />} />
          </Routes>
        </Card>

        {/* Footer */}
        <Card
          columnStart="2"
          columnEnd="-1">
          <p>Footer</p>
        </Card>
      </Grid>
  );
}
export default App;
