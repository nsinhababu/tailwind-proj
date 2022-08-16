import { useState } from 'react';

import BottomBar from '../Components/BottomBar/BottomBar';
import ImageBox from '../Components/Imagebox/ImageBox';
import TopBar from '../Components/TopBar/TopBar';

import { pageInfo } from '../utils';
import data from '../data.json';

const Home = () => {
  const [pageNo, setPageNo] = useState(1);
  const [isSearched, setIsSearched] = useState(false);
  const [text, setText] = useState('india is the best country in the world');
  const [searchedArr, setSearchedArr] = useState([]);
  const [searched, setSearched] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearched(value);
    const filteredArr = data.filter((item) => {
      if (!value) {
        setIsSearched(false);
        setText('india is the best country in the world');
        return;
      } else if (item.name.toLowerCase().includes(value.toLowerCase())) {
        setIsSearched(true);
        return item;
      }
    });
    if (filteredArr.length) {
      setSearchedArr(filteredArr);
    }
    console.log(filteredArr);
  };

  const handleHide = () => {
    setText('');
  };

  return (
    <div className='container flex-col gap-4 h-screen '>
      <TopBar
        onClick={handleHide}
        onChange={(e) => {
          handleSearch(e);
        }}
        arr={searchedArr}
        isSearched={isSearched}
        setIsSearched={setIsSearched}
        searched={searched}
        setSearched={setSearched}
        setText={setText}
      />

      <div className='container lg:px-16 md:px-16 px-2 py-4 flex  gap-3 h-[80vh] lg:flex-row md:flex-col sm:flex-col flex-col'>
        <ImageBox
          text={text}
          src={pageInfo[pageNo].src1}
          className='flex-[4_4_0%]  rounded lg:h-full md:h-4/5 h-4/5 relative'
        ></ImageBox>

        <ImageBox
          className='flex-1 rounded lg:h-full md:h-1/5 h-1/5 '
          src={pageInfo[pageNo].src2}
        ></ImageBox>
      </div>

      <BottomBar pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
};

export default Home;
