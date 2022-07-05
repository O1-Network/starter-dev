import styled from 'styled-components';

export const AboutPage = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 0;
`;

export const AboutHeader = styled.header`
  position: relative;
  color: #073959;
  font-size: 20px;
  margin: 0 20%;
  width: 100%;
  height: 150px;
`;

export const MaxWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
`;

export const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AboutTitle = styled.h1`
  font-family: 'Julian Sans One' sans-serif;
`;

export const AboutNav = styled.nav``;

export const AboutList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ListItem = styled.li``;

export const AboutBody = styled.section`
  width: 100%;
`;

export const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.span`
  display: flex;   
`;

export const UserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
`;

//  holds user email, linkedin, github
export const UserCardContact = styled.div`
  background: blue;
`;
// name + role
export const UserCardDetails = styled.div`
  background: green;
`;



