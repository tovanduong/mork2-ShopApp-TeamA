import { Pagination, PaginationItem } from '@mui/material';
import './pagination.scss';
export function CustomPagination(props) {
  const { onPageCount, totalPages, currentPage } = props;

  const handlePagination = (event, value) => {
    onPageCount(value);
  };

  return (
    <Pagination
      style={{ marginTop: '60px', marginLeft: '20px' }}
      color="primary"
      variant="outlined"
      shape="rounded"
      page={currentPage}
      count={totalPages}
      renderItem={(props2) => (
        <PaginationItem
          {...props2}
          disableRipple
          sx={{
            border: '1px solid #DFE3E8',
            boxSizing: 'border-box',
            borderRadius: ' 4px',
            fontFamily: 'Arial',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '20px',
            /* or 143% */

            textAlign: 'center',

            '&.MuiPaginationItem-root': {
              background: '#DFE3E8',
              color: '#212B36',
            },
            '&.Mui-selected': {
              background: '#FFD333',
              color: '#000000',
            },

            /* Dark Grey / 400 */
          }}
        />
      )}
      onChange={handlePagination}
    />
  );
}
