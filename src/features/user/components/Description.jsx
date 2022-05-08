import { Box } from '@material-ui/core';
import React from 'react';
import './description.scss';

export default function Description({ description }) {
  return (
    <Box className="descriptionWrapper">
      <h2 className="title">Description</h2>
      {description ? (
        <h3 className="descriptionContent">{description}</h3>
      ) : (
        <h3 className="descriptionContent">Don`t have any description yett!</h3>
      )}
    </Box>
  );
}
