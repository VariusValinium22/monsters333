import React from 'react';
import { Card } from './Card';
import './CardList.css';


export const CardList = props => (
    <div className='CardList'>
           {props.monsters.map(monster => (
             <Card key={monster.id} monster={monster}  />
           ))}
   </div>
   );

/*

        {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
        ))}
*/


