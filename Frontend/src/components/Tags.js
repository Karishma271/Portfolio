import React from 'react';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Tags = ({ tag, key }) => {
  return (
    <div className="d-flex flex-wrap">
        <Badge key={key} variant="secondary" className="mb-1" style={{ marginRight: '5px' }}>
          {tag}
        </Badge>
    </div>
  );
};

export default Tags;