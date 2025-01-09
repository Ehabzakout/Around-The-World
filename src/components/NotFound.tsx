import noFound from '../assets/images/—Pngtree—not found_5408094.png';
const NotFound = () => {
  return (
    <>
      <div className="flex h-screen flex-wrap w-full  justify-center">
        <div className="w-1/2 mt-5 text-center">
          <img src={noFound} className="w-full "></img>
          <h1 className="font-semibold w-full text-blue-500 text-2xl">
            No Results Found
          </h1>
        </div>
      </div>
    </>
  );
};
export default NotFound;
