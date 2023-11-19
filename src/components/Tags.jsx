import React from 'react';
import Badge from 'react-bootstrap/Badge';

const RazaTags = ({ tagText, tagBackgroundColor }) => {
  return (
    <Badge bg={tagBackgroundColor}>{tagText}</Badge>
  );
};

export default RazaTags;