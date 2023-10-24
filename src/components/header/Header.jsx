import styled from "styled-components";
import Flyers from "../flyers/Flyers";
// import Cookie from "../cookie/Cookie";

const HeaderEl = styled.div`
  height: calc(100lvh - 94px);
  background-color: var(--color-primary);
  display: flex;
  align-items: flex-end;
  padding: 1rem 2rem;
  overflow: hidden;
  position: relative;
`;

const Header = () => {
  return (
    <HeaderEl>
      <Flyers />
      {/* <Cookie /> */}
    </HeaderEl>
  );
};

export default Header;
