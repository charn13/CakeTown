import React from 'react'
import { Header,Footer } from '../components'

const About = () => {
  return (
   <>
   <Header/>
   <div className="container-fluid about1">
    <div className="container">
        <div className="row">
         <div className="col-12 col-md-12 about1 m-auto p-5">
              <div className='m-auto h-25 text-center p-5'>
             <h1>About Us</h1>
             </div>
         </div>
        </div>
    </div>
   </div>
   <div className="container p-5 mt-5">
    <div className="row">
      <div className="col-md-6">
          <img src="https://demo.templatesjungle.com/bakery/images/ceo.jpg" alt=""  className='w-100'/>
      </div>
      <div className="col-md-6 text-center m-auto">
         <h1>Mr X- CEO</h1>
         <p>Mr X is a Friendly, Hardworker and Good Person. Consectetur adipisit slit, sed do eisusmod tempor incididiunt ut labore et dolare manag aliqua. Ut enim ad ut labore et.</p>
      </div>
    </div>
   </div>

   <div className="container-fluid bg-light p-5 mt-5 brandc text-center">
     <div className="container">
        <div className="row">
            <div className="col-nd-12">
              <h1 className='text-center'>Our Team</h1>
            <ul className="d-flex list-unstyled justify-content-between flex-wrap">
					<li><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/team.jpg" className="aboutImg w-100"/></a>
              <div className='py-3'>
                <h3>
                   Team Name
                </h3></div>
          </li>
					<li><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/team1.jpg" className="aboutImg w-100"/></a>
           <div className='py-3'>
                 <h3>
                   Team Name
                </h3>
           </div>
          </li>
					<li><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/team2.jpg" className="aboutImg w-100"/></a>
          <div className='py-3'>
                 <h3>
                   Team Name
                </h3>
           </div>
          </li>
				
					
				</ul>
            </div>
        </div>

     </div>
     </div>

     {/* section start  */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
             <h1>Our Targets</h1>
             <img src="https://demo.templatesjungle.com/bakery/images/flower-bg.jpg" alt="" className='w-100 h-100' />
          </div>
        </div>
      </div>
              
    

     {/* section start end */}


   <Footer/>
   
   </>
  )
}

export default About