import React from 'react';

import xbox1 from '../../assets/xbox.png';
import Animacao from '../animation/Animation';

export default function Card1 () {
  
    return (
      
         <>
          <div className="card bg-dark text-white">
            <img src={xbox1} className="card-img" />
          <div className="card-img-overlay">
              <h5 className="card-title">Novos Controles Xbox series</h5>
               <p className="card-text">Mais conforto &</p>
               <p className="card-text">Durabilidade</p>
               <a href='https://www.amazon.com.br/gp/product/B08K4HLCPR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08K4HLCPR&linkCode=as2&tag=jsservicos-20&linkId=a3d1ad286a550a8df9cc52fb5eab4e0c' type="button" class="btn btn-outline-light">Comprar agora <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
               <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
               </svg></a>
               <Animacao/>
           </div>
          </div>
         </>

    )
  }