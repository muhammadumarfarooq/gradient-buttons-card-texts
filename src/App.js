import React from "react";
import Table from './Table';


function App() {
  return (
    <div className='app'>
      <h1 className='text'>Buttons</h1>

      <div className='sligh-up'>
        <a className='g-btn' href='#'>
          Login
        </a>
      </div>
      <a className='g-btnSkyblue' href='#'>
        337154
      </a>
      <div className='sligh-up'>
        <a className='g-btn-outline' href='#'>
          Buy Crypto
        </a>
      </div>

      <h1>Profit Sharing</h1>
      <div className='g-border'>
        <h1>This is Heading 1</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias
        qui accusantium iure expedita. Nemo nostrum tempora minima iure
        aspernatur ipsum labore, adipisci temporibus, sequi error laudantium,
        corrupti atque nam.
      </div>

      <div className='g-border'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est
          itaque voluptas amet odio iure perferendis! Enim culpa cumque placeat
          saepe labore? Voluptates minima voluptatum odit animi ut, fugit
          quaerat!
        </p>
      </div>

      <div className='game-card'>
        <img
          src='https://venturebeat.com/wp-content/uploads/2017/11/candy-crush-saga.jpg?fit=578%2C609&strip=all'
          alt='logo'
        />

        <div className='special-btn'>
          <a className='g-btn' href='#'>
            Play Now
          </a>
        </div>
      </div>

      <div className='game-card-box'>
        <p>Comming Soon</p>
      </div>

      <i class='fa fa-3x fa-wrench g-icon'></i>
      <i class='fab fa-facebook-f fa-3x g-icon'></i>

      <Table />
    </div>
  );
}

export default App;
