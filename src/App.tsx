import { useEffect } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, CssBaseline, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from '../ui-components/Sidebar';

import Resumen from '../ui-components/Resumen';

import InformeTasacionCreateForm from '../ui-components/InformeTasacionCreateForm';
import InformeTasacionList from '../ui-components/InformeTasacionList';

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();

  useEffect(() => {
    fetchInformes();
  }, []);

  const fetchInformes = async () => {
    const { data: informeTasacion } = await client.models.InformeTasacion.get({ id: "e2f1b5fe-46c5-4fed-a7e0-1b56bc3fcc5a" });
    console.log(informeTasacion);
  };

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Aplicación de Tasaciones
            </Typography>
            {/*
            <IconButton color="inherit" onClick={signOut}>
              {user?.username}
            </IconButton>
            */}
          </Toolbar>
        </AppBar>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/resumen" element={<Resumen />} />
            <Route path="/" element={<InformeTasacionList />} />
            <Route path="/create" element={<InformeTasacionCreateForm />} />
            <Route path="/create/:id" element={<InformeTasacionCreateForm />} />
          </Routes>
        </Box>
      </Box>
  );
}
export default App;
