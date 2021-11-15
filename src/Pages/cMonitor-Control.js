import React from 'react'
 
import Header from '../components/header.js'
import Timer from '../components/clock.js'
import GetData from '../components/getData.js'
import Counter from '../components/tempCounter.js'
import Light from '../components/lightButtons.js'

function Monitor_Control() {
  return (
    <div>
      <Header/>
      <Timer/>
      <GetData/>
      <Counter/>
      <Light/>
    </div>
  )
}
 
export default Monitor_Control


