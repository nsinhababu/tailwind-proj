import { Children } from 'react';

const ImageBox = ({ src, className, text, children }) => {
  return (
    <div className={className}>
      <img className='h-full w-full rounded ' src={src} alt='first-img' />
      {text && (
        <p className='capitalize absolute top-10  left-2 break-normal text-2xl text-white'>
          {text}
        </p>
      )}
      {children}
    </div>
  );
};

export default ImageBox;
