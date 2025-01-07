/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function InfiniteScroll() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); 
  const imagesPerPage = 10;

  const fetchImages = (pageNumber) => {
    const fetchPromises = Array.from({ length: imagesPerPage }, () => 
      fetch('https://randomfox.ca/floof/').then(response => response.json())
    );

    Promise.all(fetchPromises)
      .then(results => {
        const newImages = results.map(data => data.image);
        setImages(newImages); 
      });
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-4 bg-amber-400">
      <h1 className="text-2xl font-bold">Random Foxes</h1>
      <div className="grid grid-cols-5 gap-9 p-3 m-7">
        {images.map((image, index) => (
          <img
            className="w-64 h-64 object-cover"
            key={index}
            src={image}
            alt={`Random fox ${index}`}
          />
        ))}
      </div>
      <div className="flex justify-between w-full max-w-md p-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default InfiniteScroll;
