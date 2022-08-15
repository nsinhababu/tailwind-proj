const TopBar = () => {
  return (
    <div className='h-16 flex items-center gap-4 justify-end px-16 '>
      <input
        className='block w-1/4 h-10 px-2 text-base rounded border-2 border-slate-200'
        type='search'
        placeholder='search country'
      />
      <button className='w-20 h-10 bg-slate-200 rounded ' type='button'>
        Hide
      </button>
    </div>
  );
};
export default TopBar;
