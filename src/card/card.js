import React from 'react';
import { Asos, Car, Chap, Em, Gr, Ong, Orta,Img2, Img3,Img4, Img5 } from './style';
import Jo from '../navbar/rasm/joy.png';
import Or from '../navbar/rasm/orta.png';
import Im from '../navbar/rasm/im.png';
import Im2 from '../navbar/rasm/Im2.png';
import Im3 from '../navbar/rasm/im3.png';
import Im4 from '../navbar/rasm/im4.png';

export const Card = () => {
  return (
    <>
      <Car>
        <h1>Our project </h1>
        <p>Introducing our first official project</p>
        <div></div>
        <div></div>
      </Car>
      <Asos>
        <Chap>
          <h1>Project Livingroom</h1>
          <p>
            A simple guide to create the perfect livingro- om for . Night Watc
            works beautifully in a wi- de gamut of arrangements.
          </p>

          <img src={Jo}></img>
        </Chap>
        <Orta>
          <img src={Or}></img>
          <h1>Project workspace</h1>
          <p>
            A simple guide to create the perfect livingro- om for . Night Watc
            works beautifully in a wi- de gamut of arrangements.
          </p>
        </Orta>
        <Ong>
          <h1>Library</h1>
          <p>
            A simple guide to create the perfect livingro- om for . Night Watc
            works beautifully in a wi- de gamut of arrangements.
          </p>
          <img src={Jo}></img>
        </Ong>
      </Asos>

      <Em>
        <h1>Testimonial</h1>
      </Em>
      <Gr>
          <Img2 src={Im}></Img2>
          <Img3 src={Im2}></Img3>
          <Img4 src={Im3}></Img4>
          <Img5 src={Im4}></Img5>
          



      </Gr>
    </>
  );
};
