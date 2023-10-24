import Navbar from '../appbar/Navbar';
import Update from '../account/Update';
import Post from './Post';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar/>
      {/* <Update /> */}
      <Post/>
    </>
  );
};

export default Dashboard;
