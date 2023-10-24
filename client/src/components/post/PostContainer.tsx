import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocalStorageValue } from '../../utils/localStorage';
import { getAllPosts } from '../../store/thunks/postThunks';
import { Grid } from '@mui/material';
import PostItem from './PostItem';

const PostContainer = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  
  const user = getLocalStorageValue('user');
  const userId = user._id;

  useEffect(() => {
    const fetchData = async() => {
      // @ts-ignore
      const response = await dispatch(getAllPosts(userId));

      if(response) {
        const postData = response.payload;
        setData(postData);
      } else {
        console.log('no post found');
      }
    }
    fetchData();
  }, [dispatch, userId]);

  return (
    <Grid container py={10} px={20}>
      {
        data.map((item: { post: string, _id: string }) => (
          <PostItem content={item.post} postId={item._id} key={item._id}/>
        ))
      }
    </Grid>
  )
}

export default PostContainer
