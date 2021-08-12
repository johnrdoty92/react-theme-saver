import styled from "styled-components";
import { getTextColor } from "../classes/ColorCalculator";
import { FullContainer } from "./StyledComponents";

const Post = (props) => {
  return (
    <FullContainer area="post">
      <StyledPost>
        <h2>Theme Saver</h2>
        <p>
          Welcome! This simple web app is for anyone who is deciding on a color
          theme for their website. Watch the page update automatically as you
          choose colors!
        </p>
        <StyledTextBlock colors={props.colors}>
          <p>
            If you find a theme that you like, you can copy and paste the color
            values or save them under a new name.
          </p>
        </StyledTextBlock>

        <h2>Easily Visualize Colors</h2>
        <StyledTextBlock colors={props.colors}>
          <code>
            const greeting = "Hello World!";
            <br />
            alert(greeting);
          </code>
        </StyledTextBlock>
        <p>
          Choose either a single tone or complimentary look. This app was
          created with <b>React.js</b> and <b>styled-components</b>. Themes are
          saved with localStorage, so be sure to come back on this device or
          copy and paste the colors elsewhere.
        </p>
      </StyledPost>
    </FullContainer>
  );
};
export default Post;

//=============STYLED COMPONENTS============
const StyledPost = styled.div`
  padding: 1rem;
`;
const StyledTextBlock = styled.div.attrs((props) => ({
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
