const SearchedItems = ({ arr, onClick }) => {
  return (
    <div className='absolute top-[105%] left-0 h-20 z-50 border-y-2 bg-slate-200 w-1/4 min-w-[200px] flex flex-wrap'>
      {arr.map((item) => {
        return (
          <span
            onClick={onClick}
            className='px-0.5 cursor-pointer rounded'
            key={item.id}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
};

export default SearchedItems;
