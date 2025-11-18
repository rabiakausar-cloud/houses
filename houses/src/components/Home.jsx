import React, { useState,useEffect } from 'react'
import { Button } from '../pages/button'
import { Input } from '../pages/input'
import myPic from '../assets/home.png'; // ✅ Import the image
import { Property1 } from './Property1';
import { Listing1 } from './Listing1';
import { Agents1 } from './Agents1';
import { Blog1 } from './Blog1';
import API from "../api";

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formData);
  //   alert("Form Submitted Successfully!");
  // };

export const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [data, setData] = useState("");

  useEffect(() => {
    API.get("private/")
      .then((res) => setData(res.data.message))
      .catch(() => setData("Unauthorized"));
  }, []);
  return (
    <div>
        <div className='w-full py-10 items-center lg:justify-between h-full md:item-center  md:justify-center flex-wrap flex flex-row justify-between' style={{backgroundColor:'#fff7f0'}}>
        
          <div className="justify-left pl-20 flex mt-50   flex-col  ">
            <h1 className="font-bold text-4xl pt-2">Find a perfect property</h1>
            <h1 className="font-bold text-4xl pb-4">Where you'll love to live</h1>
            <p>We help business customize, automate and scale up their ad,<br/> production and delivery</p>
            <div className="flex pt-10 pb-5 justify-around">
              <Button
              label="Rent"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black text-white"
              />
              <Button
              label="Buy"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-300 text-black"
              />
              <Button
              label="Sell"
              name="name"
              onChange={handleChange}
              className="bg-gray-300 text-black"
              />
            </div>
            <form action="">
            <Input
              type="text"
              name="name"
              value={formData.email}
              onChange={handleChange}
              placeholder="City/Street"
            />  
            <Input
              type="number"
              name="name"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Property type"
            />          
            <Input
              type="number"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Price Range"
            />  
            <button className="w-full bg-black py-3 text-white rounded-lg">Search</button>
            </form>
          </div>
          <div>
            <img src={myPic} alt="" className="w-[500px]" />
        </div>
              </div>
          {/* paragraph */}
          <Listing1/>
          {/* cards */}
          <Property1/>
          {/* Information */}
          <Agents1/>
          <Blog1/>
    </div>
  )
}
