import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background-color: #ffff99;
  font-weight: 700;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  &:hover span:first-child {
    transform: rotate(25deg);
  }
  &:hover span:nth-child(2) {
    transform: rotate(-20deg);
  }
  &:hover span:nth-child(3) {
    transform: rotate(18deg);
  }
`;

const Logo = styled.a`
  display: flex;
  gap: 0.8rem;
`;

const Span = styled.span`
  font-size: 2.8rem;
  letter-spacing: -1px;
  color: #1b0f37;
  transition: all .15s ease-in-out;
`;

const Navbar = () => {
  return (
    <Header>
      <LogoContainer>
        <Logo>
          <Span>Show</Span>
          <Span>And</Span>
          <Span>Tell</Span>
        </Logo>
      </LogoContainer>
    </Header>
  );
};

export default Navbar;
