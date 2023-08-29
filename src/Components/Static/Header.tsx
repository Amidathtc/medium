import React from "react";
import Button from "./Button";
import styled from "styled-components";
import img from "../../Assets/medium.png";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo src={img} />
          
          <NavWithCalltoAction>
            <Navs>Our Story</Navs>
            <Navs>Membership</Navs>
            <Navs>Write</Navs>
            <Navs>Sign in</Navs>
            <Space />
            <Button title="Get Started" />
          </NavWithCalltoAction>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Space = styled.div`
  margin-left: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffbe44;
  font-size: 14px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Logo = styled.img``;

const NavWithCalltoAction = styled.div`
  display: flex;
  align-items: center;
`;

const Navs = styled.div`
  margin: 0 20px;
`;
