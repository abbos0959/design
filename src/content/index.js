import React from 'react';
import { Img, Item1, Wrapper, Item, P, PP, Se, Wrap, D } from './style';
import Uy from '../navbar/rasm/uy.png';
import U from '../navbar/rasm/ker.png';

export const Content = () => {
  return (
    <>
      <Wrapper>
        <h1>HOW IT WORKS</h1>
        <PP>Spice up your space even simpler than you think</PP>
      </Wrapper>

      <Item>
        <Img src={Uy}></Img>
        <Item1>
          <P>
            We provide design and build for commercial building, interior and
            furniture to improve the better life.
          </P>

          <Se>SEE VIDEO</Se>
        </Item1>
      </Item>
      <Wrap>
        <img src={U}></img>

        <D>
        <p>Our mission is to deliver aesthetic visual for your home</p>
        <h1>
          By applying bacis psychology principles, we are going to explain how
          perception works and how we can use this understanding to maximise the
          space that we occupy in our homes.
        </h1>
        </D>

     
      </Wrap>
    </>
  );
};
