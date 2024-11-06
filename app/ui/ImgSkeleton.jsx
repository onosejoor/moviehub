const ImageSkeleton = ({ className }) => {
  return (
    <>
      <div
        className={`${className} w-full  bg-gray-500 animate-pulse `}
      ></div>
    </>
  );
};
export default ImageSkeleton;
