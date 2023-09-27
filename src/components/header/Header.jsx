import styled from "styled-components";
import Flyers from "../flyers/Flyers";

const HeaderEl = styled.div`
  height: calc(100vh - 94px);
  background-color: var(--color-primary);
  display: flex;
  align-items: flex-end;
  padding: 1rem 2rem;
  overflow: hidden;
`;

const Header = () => {
  return (
    <HeaderEl>
      <Flyers />
    </HeaderEl>
  );
};

export default Header;
