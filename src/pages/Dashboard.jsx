import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Dashboard = () => {
  const boxStyles = {
    p: '10px',
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue',
    },
  };

  return (
    <Container as='section' maxW={''} py='20px'>
      <Flex justify={'space-between'} alignItems='center'>
        <Heading>Chakra UI Components</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis.
        </Text>
      </Flex>
      <Box p={4} borderWidth='1px' w='80%'>
        <Text>This is something</Text>
      </Box>
      <Box sx={boxStyles}>hello ninjas</Box>
    </Container>
  );
};

export default Dashboard;
