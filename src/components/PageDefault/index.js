import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main `
  flex: 1;
  min-height: calc(100vh - 254px);
`;

const PageDefault = ({ children }) => {

  return (
    <>
      <Menu />
        <Main>
          { children }
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;