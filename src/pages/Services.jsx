import React from 'react'
import { Header, Footer } from '../components'

const Services = () => {
  return (
    <>
    <Header />

     <div className="container-fluid serv1">
    <div className="container">
        <div className="row">
         <div className="col-12 col-md-12  m-auto p-5">
              <div className='m-auto h-25 text-center p-5'>
             <h1>Services</h1>
             </div>
         </div>
        </div>
    </div>
   </div>


      <div className="container py-5 text-center">
        <div className="row pt-5">
            
      <div className="col-md-4">
        <img src="https://tse1.mm.bing.net/th?id=OIP.1exMTw9ELOY-4OIAv4ektAHaFr&pid=Api&P=0&h=180" alt="" className='w-100 h-75'/>
        <h3 className='pt-3'>Birthday Cakes</h3>
      </div>
      <div className="col-md-4">
        <img src="https://bkmedia.bakingo.com/couple-anniversary-photo-cake-photo2686flav-A.jpg" alt="" className='w-100 h-75' />
        <h3 className='pt-3'>Anniversary Cakes</h3>
      </div>
      <div className="col-md-4">
        <img src="https://bkmedia.bakingo.com/sq-world-of-disney-them0320flav-A_0.jpg" alt="" className='w-100 h-75' />
        <h3 className='pt-3'>Kids Cakes</h3>
      </div>
      
      </div>
      </div>
    <Footer />
    </>
  )
}

export default Services