import { StyledTextBlock, StyledPost, FullContainer } from "./StyledComponents";
import CodeBlock from "./CodeBlock";

const Post = (props) => {
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
        <CodeBlock />
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dicta
          culpa eius ab placeat inventore porro voluptate, officiis explicabo
          itaque!
        </p>
        <StyledTextBlock
          bgColor={props.bgColor}
          borderColor={props.borderColor}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            alias.
          </p>
        </StyledTextBlock>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          veritatis nulla eaque consectetur ullam deserunt voluptas recusandae!
          Sint, aliquid iure adipisci vero voluptate expedita accusantium hic
          dignissimos, illo eos non inventore ex corporis quod rerum amet
          molestias suscipit pariatur numquam consectetur, nostrum recusandae.
          Veniam rerum incidunt magnam corporis! Laborum, mollitia?
        </p>
      </StyledPost>
    </FullContainer>
  );
};

export default Post;
