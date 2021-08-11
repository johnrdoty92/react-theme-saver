import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { getTextColor } from "../classes/ColorCalculator";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 4em 2em minmax(31em, 39.5em) minmax(20em, 25em) 3em;
  grid-template-areas:
    "header header"
    "nav nav"
    "controller post"
    "aside post"
    "footer footer";

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4em 2em auto auto auto 3em;
    grid-template-areas:
      "header"
      "nav"
      "controller"
      "post"
      "aside"
      "footer";
  } ;
`;

export const FullContainer = styled.div.attrs((props) => ({
  style: {
    background: props.bgColor,
  },
}))`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-area: ${(props) => props.area};
`;

export const StyledHeader = styled.h1.attrs((props) => ({
  style: {
    color: getTextColor(props.colors.theme),
  },
}))`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: block;
  align-self: flex-end;
  width: max(90%, 35rem);
  text-align: center;
`;

export const StyledNavbar = styled.ul.attrs((props) => ({
  style: {
    background: props.bgColor,
    color: getTextColor(props.bgColor),
  },
}))`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  grid-area: nav;
  margin: 0;
  padding-right: 1em;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
`;

export const NavItem = styled.li`
  display: block;
  height: 100%;
  line-height: 2em;
  a {
    padding: 0 1em;
    display: block;
    height: 100%;
    width: 100%;
    color: inherit;
    text-decoration: none;
    transition: 0.25s ease;
  }
  a:hover {
    color: white;
    background: rgba(0, 0, 0, 0.25);
  }
  a:active {
    color: black;
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const StyledAside = styled.aside.attrs((props) => ({
  style: {
    background: props.colors.faded,
    color: getTextColor(props.colors.faded),
  },
}))`
  width: 90%;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.1);
  margin: 1rem 1.5rem 1.5rem 1.5rem;
`;

export const StyledForm = styled.form.attrs((props) => ({
  style: {
    background: props.colors.faded,
    color: getTextColor(props.colors.faded),
  },
}))`
  width: 90%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 1.5rem 0 1.5rem;

  & * {
    margin: 0.2rem 0;
  }
  .radio-button {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .submit-area {
    display: flex;

    input {
      border-radius: 5px 0px 0px 5px;
      border: 1px solid black;
      padding: 5px;
    }
    button {
      border-radius: 0px 5px 5px 0px;
      border: 1px solid black;
      transition: all 0.2s;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      &:hover {
        background: white;
        color: black;
      }
      &:active {
        background: grey;
      }
    }
  }
  .save-load-delete {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  h4 {
    text-align: center;
    text-transform: uppercase;
    padding: 5px;
    width: 95%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
  }
  input[type="color"] {
    width: 80%;
    min-height: 35px;
  }
  select {
    border-radius: 5px 0px 0px 5px;
    padding: 5px;
  }
  button[type="button"] {
    padding: 5px;
    border: 1px solid black;
    transition: all 0.2s;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    &:hover {
      background: white;
      color: black;
    }
    &:active {
      background: grey;
    }
    &:last-child {
      border-radius: 0px 5px 5px 0px;
    }
  }
`;

export const StyledPost = styled.div`
  padding: 1rem;
`;

export const StyledTextBlock = styled.div.attrs((props) => ({
  style: {
    background: props.colors.highlight,
    color: getTextColor(props.colors.highlight),
    borderLeft: `5px solid ${props.colors.shadow2}`,
  },
}))`
  width: 90%;
  margin: auto;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledFooter = styled.footer.attrs((props) => ({
  style: {
    color: getTextColor(props.colors.theme),
    background: props.colors.theme,
  },
}))`
  margin-top: auto;
  width: 100%;
  grid-area: footer;
  margin-top: 0.5em;

  * {
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    text-align: center;
    width: 100%;
    margin: 0;
  }
`;



export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-evenly;

  * {
    flex-basis: 100%;
  }
`;
export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;

  * {
    flex-basis: 100%;
  }
`;
