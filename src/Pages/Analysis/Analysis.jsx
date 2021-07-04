import React from 'react';
import Main from '../../Layout/Main/Main';
import Card from '../../Components/Card/Card';
import { HOME } from '../../Router/routes';
import { Link } from '@reach/router';

function Analysis({ id }) {
  return (
    <Main>
      <Link to={HOME}>
        Back
      </Link>
      <Card>
        This is Analysis Page of {id}
      </Card>
    </Main>
  )
};

export default Analysis;