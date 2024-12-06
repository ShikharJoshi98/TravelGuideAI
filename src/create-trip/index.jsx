import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '../components/ui/input';
import { SelectBudgetOptions, SelectTravelList } from '../constants/options';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

function CreateTrip() {
  const [place,setPlace] = useState();
  const [formData,setFormData] = useState([]);
  const handleInputChange = (name,value)=>{
      setFormData({
        ...formData,
        [name]:value
      })
  }
  useEffect(()=>{
     console.log(formData)
  },[formData])

  const onGenerateTrip = ()=>{
    if(formData?.noofDays>5&&!formData?.location||!formData?.budget||!formData?.traveler){
      toast("Please fill all Details")
      return ;
    }
    console.log(formData);
  }

  return (

    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10  mt-16'>
       <h2 className='font-bold text-3xl = leading-relaxed px-64'>Tell us your travel preferences</h2>
       <p className='mt-3 text-gray-500 text-xl  leading-relaxed px-64 '>Just provide some basic information, and our trip planner will generate a customized itenary based on your preferences.</p>
       <div className='w-[1500px] flex flex-col gap-10'>
        <div className='mt-20  '>
          <h2 className='text-xl my-3 font-medium  leading-relaxed px-64'>What is destination of choice?</h2>
          <div className='px-60 mt-5'>
          <GooglePlacesAutocomplete
             apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY }
             
             selectProps={{
               place,
               onChange:(v)=>{setPlace(v); handleInputChange('location',v)}
              }}
              />
              </div>
       </div>
       <div >
       <h2 className='text-xl my-3 font-medium  leading-relaxed px-64'>How many days are you planning your trip?</h2>
       <div className=' w-[1500px] px-60 mt-5   '>
        <Input placeholder={'ex. 3'} type="number"
        onChange = {(e)=>handleInputChange('noofDays',e.target.value)}  />
       </div>
       </div>
       <div >
       <h2 className='text-xl my-3 font-medium  leading-relaxed px-64'>What is Your Budget?</h2>
       <div className=' grid grid-cols-3 gap-5 mt-5  w-[1500px] px-60 '>
        {SelectBudgetOptions.map((item,index)=>(
          <div key={index}

          onClick = {(e)=>handleInputChange('budget',item.title)} 
          className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.budget==item.title&&'shadow-lg border-black'}`}>
            <h2 className='text-3xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          </div>
        ))}
       </div>
       </div>
       <div >
       <h2 className='text-xl my-3 font-medium  leading-relaxed px-64'>Who do you plan on traveling with on your next adventure?</h2>
       <div className=' grid grid-cols-3 gap-5 mt-5  w-[1500px] px-60  '>
        {SelectTravelList.map((item,index)=>(
          <div key={index}
          onClick = {(e)=>handleInputChange('traveler',item.people)} 
          className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.traveler==item.people&&'shadow-lg border-black'}`}>
            <h2 className='text-3xl'>{item.icon}</h2>
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
          </div>
        ))}
       </div>
       </div>
       <div className='my-9 flex justify-center '>
        <Button onClick={onGenerateTrip} >Generate Trip</Button>
       </div>
    </div>
    </div>
  )
}

export default CreateTrip