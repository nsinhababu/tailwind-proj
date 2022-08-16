import { useEffect } from 'react';
const BottomBar = ({ setPageNo, pageNo }) => {
  const handlePageChange = (e) => {
    setPageNo(e.target.innerText);
  };

  return (
    <div className='h-[9vh] flex items-center gap-4 justify-center px-16'>
      <button
        type='button'
        onClick={(e) => {
          handlePageChange(e);
        }}
        className='text-lg'
      >
        1
      </button>
      <button
        type='button'
        onClick={(e) => {
          handlePageChange(e);
        }}
        className='text-lg'
      >
        2
      </button>
      <button
        type='button'
        onClick={(e) => {
          handlePageChange(e);
        }}
        className='text-lg'
      >
        3
      </button>
    </div>
  );
};

export default BottomBar;
