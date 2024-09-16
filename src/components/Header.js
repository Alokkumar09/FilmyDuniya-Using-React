import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
import { useContext } from 'react';


const Header = () => {

  const appData=useContext(Appstate);
  return (
    
    <div className='sticky z-10 top-0 headercolor text-5xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500 '>
      
      <Link to={'/'}> <span> Filmy<span className='text-white'>duniya</span></span></Link>
{ appData.login? 
       <Link to={'./AddMovie'}><h1 className='text-lg text-white items-center cursor-pointer'>
        <Button><AddIcon className='mr-1' color="secondary"/><span className='text-white'>Add new</span></Button>
        </h1></Link> 
        :<Link to={'./Login'}><h1 className='text-lg bg-green-500 text-white items-center cursor-pointer'>
        <Button><span className='text-white font-medium capitalize'>Login</span></Button>
        </h1></Link>
}
    </div>
  )
}

export default Header