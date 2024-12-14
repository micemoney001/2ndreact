import React from 'react'
import './App.css'
import HiState from './HiState'
import Mayor from './Mayor'
import Conditionalstatement from './Conditionalstatement'
import Tenaryoperatop from './Tenaryoperatop'
import Stock from './Stock'
import Arrayassignment from './Arrayassignment'
import Crudassignment from './crudassignment'


function App() {


  return (
    <>

      <Tenaryoperatop />


      <div className='ojo'>
        <p>Why Choose Smile?</p>

        <div className='ist'>
          <div className='koko'>
            <Mayor textt={'Best 4G Network'} twoo={`Enjoy SuperFast internet across Nigeria with 4G LTE data and superClaer  voice services.`} />
          </div>
          <div className='ioioi'>
            <Mayor textt={'24X7 Help & Support'} twoo={'Our virtual chat assistant & Customer Care service is available to help you 24/7'} />
          </div>
          <div className='popo'>
            <Mayor textt={'BestValue'} twoo={'Get the BestValue for your money our Data and Voice services.'} />

          </div>
        </div>
      </div>

      <Conditionalstatement />





      <br /><br />




      <HiState />
      <br /><br /><br />

      <Stock/>
      <Arrayassignment/>
      <br /><br />
      <Crudassignment/>
    </>
  )
}

export default App
