import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Heading, SelectField, useAuthenticator, Grid, Card} from '@aws-amplify/ui-react';

import { Resumen, InformeTasacionCreateForm } from '../ui-components';

import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";


const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  
  const { user, signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

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
        </Card>


        {/* Main Content */}
        <Card
          columnStart="2"
          columnEnd="-1">

          <Routes>
            <Route path="/resumen" element={<Resumen />} />
            <Route path="/" element={<InformeTasacionCreateForm />} />
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
