import React, { useState } from 'react'


function ImageUpload() {

    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setImage(file)
            const reader = new FileReader()
            reader.onload = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleUpload = () => {
        if(image) {
            console.log('Image is ready to upload', image)
        }
    }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Image Preview" style={{ width: '200px', marginTop: '20px' }} />}
      <button onClick={handleUpload} disabled={!image} style={{ display: 'block', marginTop: '20px' }}>
        Upload Image
      </button>
    </div>
  )
}

export default ImageUpload