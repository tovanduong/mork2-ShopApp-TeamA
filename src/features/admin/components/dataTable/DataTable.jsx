/** @format */


import { DataGrid } from '@mui/x-data-grid';

import './dataTable.scss';
import styled from '@emotion/styled';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  root: {
    '& .MuiDataGrid-renderingZone': {
      maxHeight: 'none !important',
    },
    '& .MuiDataGrid-cell': {
      lineHeight: 'unset !important',
      maxHeight: 'none !important',
      whiteSpace: 'normal',
    },
    '& .MuiDataGrid-row': {
      maxHeight: 'none !important',
    },
  },
  fontFamily: ['Arial'].join(','),

  '& .MuiDataGrid-columnsContainer,.MuiDataGrid-footerContainer': {
    border: 'none',
  },
  '& .MuiDataGrid-footerContainer': {
    display: 'flex',
    flexDirection: ' row-reverse',
    marginLeft: '32px',
  },
  '.MuiDataGrid-columnHeaders': {
    borderTop: '2px solid #929395',
    borderBottom: 'none',
  },
  '.MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '&.MuiDataGrid-root': {
    border: 'none',
  },
  '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
    outline: 'none',
  },

  '.MuiDataGrid-cell': {
    borderTop: '1px solid #929395',
    borderBottom: 'none',
    backgroundColor: 'transparent',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
}));
