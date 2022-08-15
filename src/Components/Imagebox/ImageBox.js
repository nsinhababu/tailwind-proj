import { Children } from 'react';

const ImageBox = ({ src, className, text, children }) => {
  return (
    <div className={className}>
      <img src={src} alt='first-img' />
      {text ?? <p>{text}</p>}
      {children}
    </div>
  );
};

export default ImageBox;
