import React from 'react'
import UserHeader from './UserHeader'

export default function UserHome() {
  const token_data=localStorage.getItem("token_key")
  console.log(token_data)
  return (
    <>
    <UserHeader/>
      <h2>home page</h2>
    </>
  )
}
