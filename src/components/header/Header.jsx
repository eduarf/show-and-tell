import styled from "styled-components";

const HeaderEl = styled.div`
  height: calc(100vh - 94px);
  background-color: var(--color-primary);
`;

const Header = () => {
  return <HeaderEl></HeaderEl>;
};

export default Header;
