// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {

  const [image,setImage] = useState(false);
  const [color,setColor] = useState("#ffffff");
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [loading,setLoading] = useState(false);

  const onSubmitHandler = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {

      const formData = new FormData();

      formData.append('name',name);
      formData.append('desc',desc);
      formData.append('bgColor',color);
      formData.append('image',image);

      const response = await axios.post(`${url}/api/album/add`,formData);

      if (response.data.success) {
        toast.success("Album added");
        setDesc("");
        setName("");
        setImage(false);
      } else {
        toast.error("Something went wrong");
      }
      
    } catch (error) {
      toast.error("Erorr accur");
      
    }
    setLoading(false);


  }

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
    </div>
  ) : (
    <div>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex flex-col gap-4'>
          <p>Upload Image</p>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image" className='border border-gray-400 rounded-sm w-24 h-24'>
            <img src={image ? URL.createObjectURL(image) : assets.Upload_area} alt="" className='w-full h-full object-cover cursor-pointer' />
          </label>
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album name</p>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required />
        </div>

        <div className='flex flex-col gap-2.5'>
          <p>Album discription</p>
          <input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required />
        </div>

        <div className='flex flex-col gap-3'>
          <p>Background Color</p>
          <input onChange={(e)=>setColor(e.target.value)} value={color} type="color" />
        </div>

        <button type="submit" className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>

      </form>
    </div>
  )
}

export default AddAlbum
