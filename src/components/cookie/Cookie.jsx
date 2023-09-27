import styled from "styled-components"

const StyledCookie = styled.div`
    position: absolute;
    bottom: -10%;
    left: 0;
    height: 25rem;
    width: 20rem;
    background-color: var(--color-white);
    transform: rotate(5deg) translateY(0);
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 8rem;
    transition: all .3s ease-in-out;
    &:hover {
        transform: rotate(7deg) translateY(-8%);
    }
`;

const StyledDesc = styled.div`
    color: var(--color-text);
`;

const StyledLink = styled.a`
    font-size: 2.5rem;
    font-weight: 700;
    cursor: pointer;
`;

const Cookie = () => {
  return (
    <StyledCookie>
      <StyledDesc>This website uses cookies</StyledDesc>
      <StyledLink>Got It!</StyledLink>
    </StyledCookie>
  )
}

export default Cookie
