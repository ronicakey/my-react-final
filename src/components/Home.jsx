import ItemList from './card/ItemList';
import React from 'react';
import Slider from './Slider';

const Home = (props) => {
  return (
    <div>
      <Slider/>
      <ItemList item={props.item}/>
    </div>
  )
}

export default Home;