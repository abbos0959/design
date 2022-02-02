import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  height: fit-content;
  ul {
    list-style-type: none;
    display: flex;
    margin-left: 200px;
    box-sizing: border-box;
  }
  ul li {
    margin-left: 50px;
    /* width: 77px; */
    height: 38px;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid white;

    font-family: Poppins;
    font-style: normal;

    font-size: 18px;
    line-height: 37px;
    transition: all 0.1s linear;
  }
  ul li:hover {
      box-sizing: border-box;
    color: #58a9a5;
    cursor: pointer;
    border-bottom: 3px solid orange;
  }
`;
export const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
`;
export const Img = styled.img`
  width: 33px;
  height: 41px;
  margin-right: 10px;
`;
export const H = styled.h3`
  width: 80px;
  height: 40px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 52px;
  color: #58a9a5;
`;
export const Button = styled.button`
  width: 141px;
  height: 50px;
  margin-left: 280px;
  color: white;
  border: none;

  background: #58a9a5;
  border-radius: 15px;
`;
export const Container = styled.div`
  height: 100vh;
`;
export const Item = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  
`;
export const Item1 = styled.div`
width: 50%;
height: 100%;



`;
export const Item2=styled.div`
position: relative;

width: 50%;
height: 100%;
display: flex;

justify-content: center;



`
export const Tit=styled.img`

width: 590px;
height: 540px;

`
export const Ras=styled.img`
position: relative;


position: absolute;
width: 500px;
height: 550px;
`
export const H2=styled.h2`
margin-left: 25px;




font-family: Poppins;
font-style: normal;
font-weight: 800;
font-size: 60px;
line-height: 105px;
margin-bottom: 0px;
margin-top: 10px;

color: #1C2323;
`
export const P=styled.p`




margin-left: 25px;
margin-top: 20px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 23px;
line-height: 45px;

color: #404242;
`
export const But=styled.button`
width: 150px;
height: 50px;
border: none;
border-radius: 15px 15px 15px 0px;
color:  white;
margin-left: 25px;
background-color: #58a9a5;


`