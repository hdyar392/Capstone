import React from 'react'
 
import Header from '../components/header.js'
import MarineCard from '../components/marineCard.js'
import ScrollToTop from '../components/scrollToTop.js'
 
function Guide() {
  return (
    <div>
      <Header/>
      <MarineCard/>
      <ScrollToTop/>
    </div>
  )
}
 
export default Guide


/*
directory can include letter links:
A B C D E etc
so that the user can jump to a section if 
theyre looking for a specific creature.
directory could include a search bar or sory by function
directory should include "back to top" links
<a href="#section-home">Back to top</a> 
*/
