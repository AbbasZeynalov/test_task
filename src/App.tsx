import React from 'react';
import {Provider as StoreProvider} from "react-redux";
import {Box} from "@mui/material";
import UserDetails from "./modules/user/ui/pages/UserListPage";
import store from "./store-config/configure-store";

import './App.css';

function App() {
  return (
      <React.StrictMode>
          <StoreProvider store={store}>
              <Box sx={{ p: 15, pt: 10 }}>
                  <UserDetails />
              </Box>
          </StoreProvider>
      </React.StrictMode>
  );
}

export default App;
