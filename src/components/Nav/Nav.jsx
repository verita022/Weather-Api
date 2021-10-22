import React from 'react';
import SearchBar from './SearchBar.jsx';
import classes from './Nav.module.css';


function Nav({onSearch}) {
  return (
    <nav className={classes.nav}>
        <div> 
      <SearchBar
          onSearch={onSearch}
        />
      </div>
    </nav>
  );
};

export default Nav;
