// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const ListAlbum = () => {

  const [data,setData] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      toast.error("Erorr occur")
    }
  }

  useEffect(()=>{
    fetchAlbum();
  },[])

  const removeAlbum = async (id) => {
try {
  const response = await axios.post(`${url}/api/album/remove`,{id})
  if (response.data.success) {
    toast.success(response.data.message);
    await fetchAlbum();
  }
} catch (error) {
  toast.error("Erorr occur")
}
  }

  const handleColorChange = (index, newColor) => {
    const updatedData = [...data];
    updatedData[index].bgColor = newColor;
    setData(updatedData);
  }

  return (
    <div>
      <p>All Albums List</p>
      <br />

      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>

        {data.map((item,index)=> {
          return (
            <div key={index} className='grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <img className='w-12' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" onChange={(e) => handleColorChange(index, e.target.value)} value={item.bgColor} />
              <p onClick={()=>removeAlbum(item._id)} className='w-6 h-6 rounded-md border border-gray-300 font-bold flex items-center justify-center pb-1 cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListAlbum
