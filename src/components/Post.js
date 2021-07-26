import { StyledTextBlock, StyledPost, FullContainer } from "./StyledComponents";

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
