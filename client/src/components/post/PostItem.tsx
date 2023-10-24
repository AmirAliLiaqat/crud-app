import { Grid, Box, Typography, styled } from '@mui/material';
import CommentBox from '../comment/CommentBox';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';

const Container = styled(Grid)`
  position: relative;
  max-width: 23% !important;
  margin: 1%;
  padding: 20px;
  background: beige;
  border-radius: 5px;
`;

const PostContent = styled(Typography)`
  margin: 10px 10px 10px 0;
  text-align: justify;
`;

const PostActions = styled(Box)`
  position: absolute;
  top: 10px;
  right: 5px;
`;

const PostItem = ({ content, postId }) => {
  return (
    <Container item lg={3} md={6} sm={12}>
      <Box component='h3'>Post</Box>
      <PostContent>{content}</PostContent>
      <PostActions>
        <PostEdit postId={postId} />
        {" "}
        <PostDelete postId={postId} />
      </PostActions>
      <CommentBox/>
    </Container>
  )
}

export default PostItem
