import React from 'react';
import '../style/player.css';



const PlayerCards = ({color,symbol}) => {
   console.log(color,symbol)
   const style = {backgroundColor: color, backgroundImage: 'url(./assets/' + symbol + '.png)'}
   return(
     <React.Fragment>
     <div style = {style} className='icon'></div>
     </React.Fragment>
   );
 }

export default PlayerCards