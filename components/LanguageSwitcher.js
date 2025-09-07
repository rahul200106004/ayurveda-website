'use client'
import { useRouter } from 'next/navigation'
export default function LanguageSwitcher(){
  const router = useRouter()
  const change = (lng) => { router.push('/', { locale: lng }) }
  return (<div className='flex gap-2'><button onClick={()=>change('en')} className='text-sm'>EN</button><button onClick={()=>change('hi')} className='text-sm'>HI</button></div>)
}
