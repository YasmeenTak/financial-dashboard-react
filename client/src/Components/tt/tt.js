// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import TagFacesIcon from '@material-ui/icons/TagFaces';
// import ChipTable from '../ChipTable/ChipTable';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },

//   {
//     field: 'email',
//     headerName: 'email',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'groups',
//     headerName: 'groups',
//     width: 200,
//     renderCell: (params) => {
//       return (
//         <div>
//           <ChipTable />
//         </div>
//       );
//     },
//   },
//   {
//     field: 'action',
//     headerName: 'action',
//     width: 200,
//   },
// ];

// const rows = [
//   { id: '1', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
//   { id: '2', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
//   { id: '3', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
//   { id: '4', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
//   { id: '5', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
// ];

// export default function tt() {
//   return (
//     <div style={{ height: 400, width: '70%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

import React, { useState } from 'react';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';

const columns = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Title',
    field: 'title',
  },
];

export default function App() {
  const { handleSubmit, register } = useForm();
  const [data] = useState([
    {
      id: 1,
      title: 'Title 1',
    },
    {
      id: 2,
      title: 'Title 2',
    },
  ]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='App'>
      <MaterialTable
        columns={columns}
        data={data}
        options={{
          paging: false,
          search: false,
          draggable: false,
        }}
        components={{
          EditField: ({ columnDef, value, onChange }) => (
            <TextField
              type='text'
              name={columnDef.field}
              inputRef={register({ required: true })}
              defaultValue={value}
            />
          ),
        }}
        editable={{
          // This function needs to return a promise, and it does,
          // but it's always resolved, as the edit row closes
          // I need it to be rejected if validation fails
          onRowUpdate: (newData, oldData) => handleSubmit(onSubmit)(),
        }}
      />
    </div>
  );
}
