import React from 'react';
import { Item, Item1, Menu, Wrap } from './style';
import Ras from '../navbar/rasm/ras.png';

export const Pasti = () => {
  return (
    <>
      <Wrap>
        <img src={Ras}></img>

        <Item>
          <Item1>
            <Menu>
              <h1>105</h1>
              <p>project done</p>
            </Menu>
            <Menu>
              <h1>12</h1>
              <p>years of experience</p>
            </Menu>
            <Menu>
              <h1>12+</h1>
              <p>big company partnership</p>
            </Menu>
          </Item1>
          <p>
            "Not able to tell you how happy I am with interior design. Interior
            design has completely surpassed our expectations. Interior design
            saved my business. Interior design is worth much more than I paid."
            - Roscoe
          </p>
        </Item>
      </Wrap>
    </>
  );
};
