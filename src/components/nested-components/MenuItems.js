import React from 'react'
import { Link } from 'react-router-dom';
import { TO_SEARCH_PARAM } from '../../utils/globalConstants';

const MenuItems = () => {
  return (
      <>
          <Link to="Recipes">Recipes</Link>
          <Link to="Calories">Calories</Link>
          <Link to={`/?${TO_SEARCH_PARAM}=Contact`}>Contact</Link>
      </>
  )
}

export default MenuItems