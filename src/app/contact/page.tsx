import React from 'react'
import { navbarData } from '../shared/LinkData'
import ComingSoon from '../shared/coming-soon'

export default function About() {
  return (
    <div className="text-black">
        <h2 className="text-3xl font-semibold my-12 text-center">{navbarData[3].label}</h2>
        <ComingSoon />
    </div>
  )
}
