import React from 'react'
 
import Header from '../components/header.js'
import ScrollToTop from '../components/scrollToTop.js'

function User_Manual() {
  return (
    <div>
    <Header/>
      <div className='user-manual'>
        
        <h1 className='user-manual-title'>Installation and Users Manual</h1>
        <h2>Aqua-Sense<br></br>
        Saltwater Aquarium</h2>
        <h3>Model: X</h3>

        <p>*** Please read before setting up your Aqua-Sense Model X ***</p>

        <p>This is a saltwater tank designed for marine plants and animals.<br></br>
        It is the users responsibility to clean the tank as often as necessary to increase the survivability of your ecosystem.<br></br>
        This tank has automated features, but it will not clean itself.<br></br> 
        Partial water changes should occur once bi-weekly.<br></br>
        If this is not feasible, try to change the water AT LEAST once a month.<br></br>
        For tanks with high popluations or a tank with any species who excretes often, weekly water changes are recommended.<br></br>
        Additionally, the food and pH buffer for your tank are NOT included.<br></br>
        The food and pH buffer should be purchased separately and are dependent on the species you wish to introduce to your tank.</p>

        <p>Most marine fish, coral, marine inverts/plants and live rock are very intolerant to sudden changes in the oxygen levels, salinity and pH of the water.<br></br>
        It is imperative to consistently monitor the status of your tank to ensure a safe environment for all inhabitants.</p>

        <p>*** Continue reading for additional instructions and safety precautions ***</p>

        <p>Do not open the waterproof box that contains the sensors.<br></br> 
        If any problems should arise, please contact Aqua-Sense via email using the link on the homepage.<br></br>
        Take care when changing the water to avoid getting water near the sensor box, though it is waterproof, you should still be cautious.</p>

      </div>
      <ScrollToTop/>
    </div>
  )
}

export default User_Manual




