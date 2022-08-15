import ImageBox from '../Components/Imagebox/ImageBox';
import TopBar from '../Components/TopBar/TopBar';

const Home = () => {
  return (
    <div className='container flex-col gap-4'>
      <TopBar />
      <div className='container px-16 flex gap-3'>
        <ImageBox className='flex-1 rounded'></ImageBox>
        <ImageBox className='flex-[4_4_0%] rounded'></ImageBox>
      </div>
    </div>
  );
};

export default Home;
