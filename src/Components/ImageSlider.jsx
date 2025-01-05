import { useState } from 'react'
function ImageSlider() {

    const [current, setCurrent] = useState(0)

    const images = [
        {id: 1, url: "https://images.pexels.com/photos/27244375/pexels-photo-27244375/free-photo-of-car-by-maelifell-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {id: 2, url: "https://images.pexels.com/photos/29463848/pexels-photo-29463848/free-photo-of-serene-forest-road-in-golden-autumn-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {id: 3, url: "https://images.pexels.com/photos/29798552/pexels-photo-29798552/free-photo-of-serene-waterfall-in-lush-tasmanian-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {id: 4, url: "https://images.pexels.com/photos/29890824/pexels-photo-29890824/free-photo-of-lush-green-forest-pathway-in-serene-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
    ]

    const nextSlide = () => {
        setCurrent((prevIndex) => (prevIndex + 1) % images.length)
    }
    
    const prevSlide = () => {
        setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

  return (
    <div className='flex flex-col items-center p-10'>   
        <h1 className='text-3xl font-semibold mb-3'>Image Carousel</h1>
        <div className='flex items-center justify-center space-x-5'>
            <button 
                className='bg-blue-500 text-white px-3 py-1 rounded'
                onClick={prevSlide}>prev</button>
            <img 
                className='w-96 h-96 object-cover'
                src={images[current].url} alt="carousel" />
            <button 
                className='bg-blue-500 text-white px-3 py-1 rounded'
                onClick={nextSlide}>next</button>
        </div>
    </div>
  )
}

export default ImageSlider