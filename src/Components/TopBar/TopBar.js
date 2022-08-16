import SearchedItems from '../Searcheditems/SearchedItems';
import data from '../../data.json';

const TopBar = ({
  onChange,
  onClick,
  arr,
  isSearched,
  setIsSearched,
  searched,
  setSearched,
  setText,
}) => {
  const handleClick = (e) => {
    const name = e.target.innerText;
    setSearched(name);
    setIsSearched(false);
    data.map((item) => {
      if (item.name === name) {
        setText(item.text);
      }
    });
  };

  return (
    <div className='h-[9vh] min-h-[50px] flex items-center gap-4 lg:justify-end md:justify-end justify-between  lg:px-16 md:px-16 px-2'>
      <div className='relative'>
        <input
          onChange={onChange}
          className='block w-1/4 min-w-[263px] min-h-[45px] h-10 px-2 text-base rounded border-2 border-slate-200'
          type='search'
          placeholder='search country'
          value={searched}
        />
        {isSearched && (
          <SearchedItems
            onClick={(e) => {
              handleClick(e);
            }}
            arr={arr}
          />
        )}
      </div>
      <button
        onClick={onClick}
        className='w-20 min-w-[60px] min-h-[45px] h-10 bg-slate-200 rounded '
        type='button'
      >
        Hide
      </button>
    </div>
  );
};
export default TopBar;
