import React from 'react';
import user from '../util/user';
const MainNav = () => {
  const name = user.name;
  return (
    <>
      <div>Edvora</div>
      <div>{name}</div>
    </>
  );
};

export default MainNav;
