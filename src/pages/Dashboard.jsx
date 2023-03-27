import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth='300px'>
      {tasks
        ? tasks.map(task => (
            <Card key={task.id} borderTop='8px' borderColor={'purple.400'}>
              <CardHeader>
                <Flex gap={5}>
                  <Box h='50px' w='50px' bg={'red.200'}>
                    AV
                  </Box>
                  <Box>
                    <Heading as={'h3'} size='sm'>
                      {task.title}
                    </Heading>
                    <Text>by {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color={'gray.500'}>
                <Text>{task.description}</Text>
              </CardBody>
              <Divider borderColor={'gray.200'} />
              <CardFooter>
                <HStack>
                  <Button>Watch</Button>
                  <Button>Comment</Button>
                </HStack>
              </CardFooter>
            </Card>
          ))
        : null}
    </SimpleGrid>
  );
};

export default Dashboard;

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks');
  return res.json();
};
