import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(id, name, age) {
//   return { id, name, age };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Frozen yoghurt', 159, 6.0)

// ];

export default function DenseTable() {
  console.log("API_URL", process.env.API_URL);
  const classes = useStyles();
  const [users, setUsers] = useState([])
  const [rows, setRows] = useState([])
  const [status,setStatus] = useState('')

  useEffect(()=>{
    console.log("effect ran");
        try {
            fetch(`${process.env.API_URL}/users`)
            .then(r=>r.json())
            .then((r)=>{
                setUsers(r)
            })
        } catch (e) {
            setError(`fetch e, ${e.message}`)
        }
  },[])

  useEffect(()=>{
    console.log("users at this point", users);
    if(users.length > 0){
      let createRows = users.map(({_id, name, age})=>{
        return {
          id: _id,
          name,
          age
        }
      })
      setRows(createRows)
    }
  },[users])

  function handleDelete(id){
    setStatus('loading')
    fetch(`${process.env.API_URL}/user/${id}`, {
      method: 'DELETE'
    })
    .then((r)=>r.json())
    .then((r)=>{
      console.log(r);
      if(r.error){ 
        return setStatus(r.msg)
      }
      setStatus('success')
    })
    .catch((e)=>{
      setStatus('error')
    })
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Actions</TableCell>
            <TableCell>Actions</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (   
            
              <TableRow key={row.id}>        
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                    <Link to={{
                    pathname: `/edit/${row.id}`,
                    user: {
                      id: row.id,
                      name: row.name,
                      age: row.age
                    }}}>Edit
                    </Link>
                </TableCell>
                <TableCell><button onClick={()=>{handleDelete(row.id)}}>Delete</button></TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>      
              </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {status}
    </>
  );
}