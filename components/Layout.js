import Header from './Header';
import Head from 'next/head';
import Footer from './Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f8f8f8;
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');
`;

function Layout({children}) {
  return (
    <Wrapper>

      <main>{children}</main>
      
    

    </Wrapper>
  );
}

export default Layout;
