import { Box } from '@material-ui/core';
import './specification.scss';

export default function Specification({ specification }) {
  return (
    <Box className="descriptionWrapper">
      <h2 className="title">Specification</h2>
      {specification ? (
        <h3 className="descriptionContent">{specification}</h3>
      ) : (
        <h3 className="descriptionContent">Don`t have any specification yet!</h3>
      )}
    </Box>
  );
}
