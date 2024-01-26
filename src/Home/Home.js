import React from 'react'
import styles from './Home.module.css'
import { Cookies } from '@/common/cookies';
import { useRouter } from 'next/navigation';

export const Home = () => {
  const router = useRouter();
  if (!Cookies.hasActiveSession()) {
    router.push('/')
  }
  return (
    <div>
        <h1 className='mx-5 my-5 text-center'>Welcome...</h1>  
    </div>
  )
}

