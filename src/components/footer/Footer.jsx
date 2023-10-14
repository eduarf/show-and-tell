import styled from "styled-components";
import { footerItems, footerLinks } from "../../../data";
import { nanoid } from "nanoid";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 2vh 2vw;
  background-color: var(--color-primary);
`;

const StyledLeftContainer = styled.div`
  height: 45rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4rem;
`;
const StyledRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLeftPara = styled.p`
  font-weight: 700;
  line-height: 1.2;
`;

const StyledLink = styled.a`
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-transform: ${(props) => (props.$true ? "uppercase" : "default")};
  letter-spacing: ${(props) => (props.$true ? "-1px" : "0")};
  &:hover {
    color: var(--color-green);
  }
`;

const StyledLinkContainer = styled.div``;

const StyledRightPara = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -.7px;
  width: 65%;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLeftContainer>
        {footerItems.map((item) => {
          return (
            <div key={item.id}>
              <StyledLeftPara>{item.headingAdress}:</StyledLeftPara>
              <StyledLeftPara>{item.company}</StyledLeftPara>
              <StyledLeftPara>{item.region}</StyledLeftPara>
              <StyledLeftPara>{item.country}</StyledLeftPara>
              <StyledLeftPara>{item.postcode}</StyledLeftPara>
              <StyledLeftPara>{item.phone}</StyledLeftPara>
              <StyledLeftPara>
                <StyledLink>{item.email}</StyledLink>
              </StyledLeftPara>
            </div>
          );
        })}
        <StyledLinkContainer>
          {footerLinks[0].socials.map((element) => {
            console.log(element);
            return (
              <StyledLeftPara key={nanoid()}>
                <StyledLink $true={true}>{element}</StyledLink>
              </StyledLeftPara>
            );
          })}
        </StyledLinkContainer>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledRightPara>
          Show And Tell is the trading style of Show And Tell Productions Ltd a
          company registered in England & Wales (Company Number 10447346), and
          Show And Tell LLC a company registered in New York, United States of
          America (5540320). 
          <br /><br />
          Your data will never be shared, and we will only
          use it for the described purposes. You may unsubscribe at any time. We
          are fully GDPR-compliant. Read our Privacy Policy in full.
        </StyledRightPara>
      </StyledRightContainer>
    </StyledFooter>
  );
}
