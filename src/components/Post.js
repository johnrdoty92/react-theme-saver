import { StyledPost, FullContainer } from "./StyledComponents";

const Post = () => {
  return (
    <FullContainer area="post">
      <StyledPost>
        <h2>Blog Post</h2>
        <p>Description</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          delectus beatae voluptates dolor, vero harum totam perspiciatis et
          aperiam dolorem possimus est consequatur id vel in? Neque quibusdam
          accusantium reprehenderit, iste possimus quia omnis nesciunt numquam?
          Non quas nostrum optio?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          delectus beatae voluptates dolor, vero harum totam perspiciatis et
          aperiam dolorem possimus est consequatur id vel in? Neque quibusdam
          accusantium reprehenderit, iste possimus quia omnis nesciunt numquam?
          Non quas nostrum optio?
        </p>
      </StyledPost>
    </FullContainer>
  );
};

export default Post;
