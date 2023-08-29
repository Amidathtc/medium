import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftSider>
            <BigText>Stay curious.</BigText>
            <SmallText>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </SmallText>
            <Button title="Start Reading" fs="" w="170px" />
          </LeftSider>
          <RightSider>
          <svg width="100" height="100" viewBox="0 0 100 100">
        <path d="M 46.829 0 C 46.829 0 68.985 -59.518 68.985 -59.518 C 68.985 -59.518 68.985 0 68.985 0 C 68.985 0 77.948 0 77.948 0 C 77.948 0 77.948 -72.308 77.948 -72.308 C 77.948 -72.308 65.158 -72.308 65.158 -72.308 C 65.158 -72.308 43.103 -12.891 43.103 -12.891 C 43.103 -12.891 21.149 -72.308 21.149 -72.308 C 21.149 -72.308 7.956 -72.308 7.956 -72.308 C 7.956 -72.308 7.956 0 7.956 0 C 7.956 0 17.02 0 17.02 0 C 17.02 0 17.02 -59.518 17.02 -59.518 C 17.02 -59.518 39.075 0 39.075 0 C 39.075 0 46.829 0 46.829 0 Z" fill="blue" />
    </svg>
          </RightSider>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcbd47;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  position: relative;
`;

const LeftSider = styled.div``;

const BigText = styled.div`
  font-size: 100px;
  font-weight: 600;
`;

const SmallText = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin: 30px 0;
  width: 500px;
  color: #646363;
`;

const RightSider = styled.div`
  width: 45%;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  position: absolute;
  right: -60px;
  video{
    
  }
`;
