import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} bg='gray.50'>
      <GridItem as={'aside'} colSpan='1' bg={'purple.400'} minH='100vh' p='30'>
        <span>Sidebar</span>
      </GridItem>
      <GridItem as='main' colSpan={'5'}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
