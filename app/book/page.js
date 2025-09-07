'use client'
import { useState } from 'react'
import axios from 'axios'
export default function Book(){
  const [name,setName]=useState(''); const [date,setDate]=useState(''); const [phone,setPhone]=useState(''); const [msg,setMsg]=useState('')
  const submit=async ()=>{
    try{
      const res = await axios.post((process.env.NEXT_PUBLIC_BACKEND || '') + '/api/appointments', { name, date, phone })
      setMsg('Booked: ' + res.data.id)
    }catch(e){ setMsg('Error booking') }
  }
  return (<div className='space-y-4'><h1 className='text-2xl font-bold'>Book Consultation</h1><div className='bg-white p-6 rounded-2xl shadow'><input className='w-full p-3 border rounded' placeholder='Full name' value={name} onChange={e=>setName(e.target.value)}/><input className='w-full p-3 border rounded mt-2' type='datetime-local' value={date} onChange={e=>setDate(e.target.value)}/><input className='w-full p-3 border rounded mt-2' placeholder='Phone' value={phone} onChange={e=>setPhone(e.target.value)}/><div className='mt-4 flex gap-2'><button onClick={submit} className='px-4 py-2 bg-ayuGreen text-white rounded'>Request Consultation</button></div>{msg && <div className='mt-3 text-sm text-green-700'>{msg}</div>}</div></div>)
}
