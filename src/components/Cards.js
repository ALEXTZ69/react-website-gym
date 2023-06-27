import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lo mejor de lo mejor en Uleam!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./src/images/hombre-gym.jpg'
              text='piensa en grande!'
              label='Blog'
              path='/informacion'
            />
            <CardItem
              src='./src/images/miguel-trainer.jpg'
              text='tips de entrenamiento'
              label='Tips'
              path='/informacion'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./src/images/fausto-trainer.jpg'
              text='la edad no te limita'
              label='Blog'
              path='/informacion'
            />
            <CardItem
              src='./src/images/patty-trainer.jpg'
              text='piensa en ti mismo antes que en otros'
              label='Blog'
              path='/planes'
            />
            <CardItem
              src='./src/images/sergio-trainer.jpg'
              text='tips para no perder el hilo del entrenamiento'
              label='Tips'
              path='/registrarse'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;