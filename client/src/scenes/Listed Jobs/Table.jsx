


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'company',
    headerName: 'Company',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    editable: true,
  },
  {
    field: 'deadline',
    headerName: 'Deadline',
    width: 150,
    editable: true, 
  },
];


export default function Table() {
  const [row, setRow] = useState([])
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const userID = '64aa1e7fe484184213d14610'
        const response = await axios.get(`http://192.168.0.8:5000/listedjobs/${userID}`)
        setRow(response.data.myListing)
        setLoading(false);
      } catch (err) {
        console.log(err)
      }
    }
   fetchData()
  },[])


  if (loading) {
    // Show loading indicator while data is being fetched
    return <div>Loading...</div>;
  }
  console.log(row)

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
      
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}