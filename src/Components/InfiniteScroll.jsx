import { useEffect, useState } from "react";

function InfiniteScroll() {
  const [images, setImages] = useState([]);

  const fetchImage = () => {
    fetch('https://randomfox.ca/floof/')
      .then(response => response.json())
      .then(data => setImages(prevImages => [...prevImages, data.image]));
  };

  useEffect(() => {
    fetchImage();

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        fetchImage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>Random Foxes</h1>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Random fox ${index}`} style={{ width: '300px', marginBottom: '20px' }} />
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;
