import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import "../App.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand style={{ color:"white", fontSize:"24px", fontWeight: "normal" }}> 
            Книжный магазин 
            <span style={{ color:"#1F1B6F", fontSize:"30px", fontWeight: "bold" }}> MagicVille
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;