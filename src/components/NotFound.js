import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full text-center text-gray-300 bg-[#0a192f] md:p-12 dark:bg-gray-300 dark:text-gray-800 mt-10">
      <h2 className="text-2xl font-bold">Ooooops!, I'm so sorry. 🙇‍♀️</h2>
      <p className="text-xl font-bold">This page cannot be found.</p>
      <p className="mt-10 text-base font-bold">
        Click
            <Link to="/" className="text-blue-500 underline mx-1">
                here
            </Link>
        to go back to the homepage....Thanks!
      </p>
    </div>
  )
}

export default NotFound