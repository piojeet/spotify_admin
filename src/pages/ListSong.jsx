// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {

  const [data, setData] = useState([]);

  const fetchSong = async () => {

    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.success) {
        setData(response.data.songs);
        console.log(response.data.song)
        console.log(response.data.songs)
      } else {
        toast.error("Failed to fetch songs");
      }

    } catch (error) {
      toast.error("Error Occurred");
    }
  }

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`,{id});

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSong();
      }

    } catch (error) {
      toast.error("Error Occurred");
    }
  }

  useEffect(() => {
    fetchSong();
  }, [])

  return (
    <div>
      <p>All Song List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100 px-4 py-1'>
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <img className='w-12' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p onClick={()=>removeSong(item._id)} className='w-6 h-6 rounded-md border border-gray-300 font-bold flex items-center justify-center pb-1 cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListSong
