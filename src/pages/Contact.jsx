import React from 'react'
import { Header, Footer } from '../components'
const Contact = () => {
  return (
<>
<Header />
<div className="container-fluid serv1">
    <div className="container">
        <div className="row">
         <div className="col-12 col-md-12  m-auto p-5">
              <div className='m-auto h-25 text-center p-5'>
             <h1>Contact Us</h1>
             </div>
         </div>
        </div>
    </div>
   </div>
     <div className="container py-5">
        <div className="row">
            <div className="col-md-6 ">
                <h1>Get in Touch</h1>
                  <div className='py-3'>
                    <h3>Phones/Mail</h3>
                    <a href="tel:+985555888">+91888855888</a>
                    <br />
                    <a href="mailto:info@bakery.com">info@bakery.com</a>
                  </div>
                 
                  <div class="address detail mb-4">
						<h3>Address</h3>
						<ul class="list-unstyled">
							<li><i class="icon icon-map-marker"></i>
								North Melbourne VIC 3051, Australia</li>
							<li><i class="icon icon-map-marker"></i>
								North Melbourne VIC 3051, Australia</li>
						</ul>
					</div>
                    <div class="detail mb-4">
						<h3>Social Links</h3>
						<div class="social-links flex-container">
							<a href="#" class="icon icon-facebook"></a>
							<a href="#" class="icon icon-twitter"></a>
							<a href="#" class="icon icon-pinterest-p"></a>
							<a href="#" class="icon icon-youtube"></a>
							<a href="#" class="icon icon-linkedin"></a>
						</div>
					</div>
            </div>
            <div class="col-md-6 p-0">
				
					
						<h2>Send A Message</h2>
                        <form name="contactform" action="contact.php" method="post" className="contact-form form-group mt-4">
								<div class="text-input flex-container">
								<input type="text" name="name" placeholder="Name" className="form-control name me-3 mb-3"/>
								<input type="text" name="email" placeholder="E-mail" className="form-control mb-3"/>
								</div>
								
                                
                                <button type="submit" name="submit" className="w-100 py-1 bgclr">Submit</button>
								
							</form>
					
					
			
			</div>
        </div>

     </div>

<Footer />
</>
  )
}

export default Contact