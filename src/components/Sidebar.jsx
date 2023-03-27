import { List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <List color={'white'} fontSize={'1.2rem'} spacing='4'>
      <ListItem>
        <NavLink to='/'>Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/create'>New Task</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/profile'>Profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
