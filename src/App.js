import React from 'react';
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';
import {useGlobalContext} from './Context';

function App() {
  const data = useGlobalContext();
  return (
    <>
      <h1>welcome to Tech News.</h1>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  );
}

export default App;
