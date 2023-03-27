import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const Dashboard = () => {
  return (
    <SimpleGrid p='10px' spacing={10} minChildWidth='250px'>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>

      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>

      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
      <Box bg='white' h='200px' border={'1px solid'}></Box>
    </SimpleGrid>
  );
};

export default Dashboard;
