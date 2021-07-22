import { StyledTextBlock, StyledPost, FullContainer } from "./StyledComponents";
import CodeBlock from "./CodeBlock";

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
        <StyledTextBlock
          bgColor={props.highlight}
          borderColor={props.shadow}
          textColor={props.textColor}
        >
          <p>
            If you find a theme that you like, you can copy and paste the color
            values or save them under a new name.
          </p>
        </StyledTextBlock>

        <h2>Easily Visualize Colors</h2>
        <StyledTextBlock
          bgColor={props.shadow}
          borderColor={props.highlight}
          textColor={props.textColor}
        >
          <code>
            const greeting = "Hello World!"
            <br />
            alert(greeting)
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
