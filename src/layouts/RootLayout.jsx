import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const RootLayout = () => {
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} bg='gray.50'>
      <GridItem
        as={'aside'}
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg={'purple.400'}
        minH={{ lg: '100vh' }}
        p='30'
      >
        <Sidebar />
      </GridItem>
      <GridItem as='main' colSpan={{ base: 6, lg: 4, xl: 5 }} p='10'>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
