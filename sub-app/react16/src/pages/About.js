import React ,{useContext}from 'react';

import  { GlobalContext}  from '../Context'
export default function() {
  const globaldata = useContext(GlobalContext)
  const {setGlobalState} = globaldata
  const handleclick = () =>{
    setGlobalState({
      ignore: 'react16',
      user: {
        name: 'react',
      },
    })
  }
  return (
    <h2 className="app-nav-item" style={{ borderColor: 'green' }}>
      About
      <div onClick={handleclick}>点击</div>
    </h2>
  );
}
