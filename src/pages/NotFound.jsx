import { Link } from "react-router-dom";

const NotFound = () => {
  return <div className="w-screen h-screen flex justify-center items-center flex-col">
    <h1 className="text-4xl uppercase pb-4">404 not found</h1>
    <Link to="/" className="text-2xl">Go back to home</Link>
  </div>;
};

export default NotFound;
