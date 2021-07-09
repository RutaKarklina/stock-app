import { Link as ReachLink } from '@reach/router';

function Link({ to = '', children, absolute, ...props }) {
  if (!absolute && to[0] === '/') {
    to = process.env.PUBLIC_URL + to
  }
  return (
    <ReachLink {...props} to={to}>
      {children}
    </ReachLink>
  );
}

export default Link;