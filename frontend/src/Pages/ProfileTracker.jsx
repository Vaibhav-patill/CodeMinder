import ProfileCard from '@/Components/ProfileCard'
import React from 'react'
import { Outlet } from 'react-router-dom'

function ProfileTracker() {
  return (
    <div className='pt-20'>
      <ProfileCard/>
      
      <Outlet/>
    </div>
  )
}

export default ProfileTracker
