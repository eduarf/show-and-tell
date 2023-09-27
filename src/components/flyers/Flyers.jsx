import styled from "styled-components";
import { flyersItems } from "../../../data";

const StyledFlyers = styled.div``;

const StyledFlyersItem = styled.div`

`;

const StyledHeading = styled.h1`
  font-size: 4rem;
`;

const Flyers = () => {
  return (
    <StyledFlyers>
      {flyersItems.map((item) => {
        return (
          <StyledFlyersItem key={item.id}>
            <StyledHeading>{item.name}</StyledHeading>
          </StyledFlyersItem>
        );
      })}
    </StyledFlyers>
  );
};

export default Flyers;
