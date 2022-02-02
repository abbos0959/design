import React from 'react'
import {But, Button, Container, H, H2, Home, Img, Item, Item1, Item2, Nav,P,Ras,Tit } from "./style"
import Logo from "./rasm/home.png"
import Fon from "./rasm/lampa.png"
import Rasm1 from "./rasm/chiroq.png"

export const Navbar = () => {
    return (

    <Container>
        <Nav>
            
                <Home>
                    <Img src={Logo}></Img>
                    <H>LOCUS</H>
                </Home>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Location</li>
                    <li> About Ac</li>
                </ul>
                <Button>Sign Up</Button>

                
            
        </Nav>

        <Item>

      <Item1>
           <H2>Get the inspiration
of interior design 
here</H2>
<P>architecture not only about engineering, it even 
lands to art and aesthetics. With us, you will get 
a residentical design with an extraordinary touch 
of art.</P>
<But>Let`s Go</But>


      </Item1>
      <Item2>  
          <Ras src={Rasm1}></Ras>
<Tit src={Fon}></Tit>

      </Item2>

        </Item>
        </Container>
    )
}
