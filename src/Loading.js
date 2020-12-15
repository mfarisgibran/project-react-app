import React from 'react'
import { Preloader, Puff } from 'react-preloader-icon'

export default function Loading() {
  return (
    <Preloader
      use={Puff}
      size={50}
      strokeWidth={6}
      strokeColor="#262626"
      duration={2000}
    />
  )
}
