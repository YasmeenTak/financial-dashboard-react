import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import ChipTable from '../ChipTable/ChipTable';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },

  {
    field: 'email',
    headerName: 'email',
    width: 200,
    editable: true,
  },
  {
    field: 'groups',
    headerName: 'groups',
    width: 200,
    renderCell: (params) => {
      return (
        <div>
          <ChipTable />
        </div>
      );
    },
  },
  {
    field: 'action',
    headerName: 'action',
    width: 200,
  },
];

const rows = [
  { id: '1', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
  { id: '2', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
  { id: '3', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
  { id: '4', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
  { id: '5', email: 'yasmeen@gmail.com', groups: 'Jon', action: 35 },
];

export default function tt() {
  return (
    <div style={{ height: 400, width: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
