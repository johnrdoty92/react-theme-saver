import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vw;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 4em 2em 1fr 1fr 0.25fr;
  grid-template-areas:
    "header header"
    "nav nav"
    "controller post"
    "aside post"
    "footer footer";

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4em 2em 0.5fr 2fr 1fr 0.25fr;
    grid-template-areas:
      "header"
      "nav"
      "controller"
      "post"
      "aside"
      "footer";
  } ;
`;

export const FullContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-area: ${(props) => props.area};
  background: ${(props) => props.bgColor};
`;

export const StyledHeader = styled.h1`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: block;
  align-self: flex-end;
  width: max(90%, 35rem);
  text-align: center;
`;

export const StyledNavbar = styled.ul`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  grid-area: nav;
  margin: 0;
`;

export const NavItem = styled.li`
  display: block;
  margin: 0 1rem 0 1rem;
`;

export const StyledAside = styled.aside`
  width: 90%;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  & * {
    margin: 0.2rem 0;
  }
`;

export const StyledPost = styled.div`
  padding: 1rem;
`;

export const StyledTextBlock = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem;
  border-radius: 5px;
  border-left: 5px solid ${(props) => props.borderColor};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;
