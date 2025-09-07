'use client'
import useSWR from 'swr'
import axios from 'axios'
const fetcher = url => axios.get(url, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }).then(r=>r.data)
export default function Dashboard(){
  const { data } = useSWR((process.env.NEXT_PUBLIC_BACKEND || '') + '/api/appointments?patient=demo', fetcher)
  return (<div className='space-y-4'><h1 className='text-2xl font-bold'>Dashboard</h1><div className='bg-white p-6 rounded shadow'>{data?.appointments ? data.appointments.map(a=> (<div key={a.id} className='p-2 border-b'>{a.datetime || a.date} — {a.name}</div>)) : 'Loading...'}</div></div>)
}
