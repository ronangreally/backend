import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from './Table';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
const Main = ()=>{
    const classes = useStyles(); 
    return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Table />
    </div>
    </Container>
    )
}

export default Main;