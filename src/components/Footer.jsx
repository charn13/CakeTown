import React from 'react'

const Footer = () => {
  return (
   <>
   <footer id="footer ">
	<div className="container">
		<div className="row justify-content-between g-5">

			<div className="col-md-5 footer-logo text-center  mt-5" >
				<img src="http://localhost:5173/src/components/img/logoo.png" className="mt-5 logo"/>
				<p>Bakery is a free HTML CSS Template by Templates Jungle specially crafted for Bakeries.
				</p>
			</div>

			<div className="col-md-5 mt-5 pt-5 ">
				<div className="widget-newsletter mb-5">
					<h4 className="widget-title clr ">Subscribe To Our Newletter</h4>
					<div className="newsletter-button d-flex">
						<input type="text" name="Subscribe" placeholder="Your Email Address"/>
						<button className="btn-hvr-effects p-3" style={{
                          background:"rgb(206 60 131)"
                        }}>Subscribe</button>
					</div>

				</div>

				<div className="working-schedule ">
					<h4 className="widget-title">Our Work Time</h4>
					<div className="time-list d-flex">
						<ul className="list-unstyled">
							<li>Monday - Friday</li>
							<li>8:00am - 8:30 pm</li>
						</ul>
						<ul className="list-unstyled">
							<li>Saturday - Sunday</li>
							<li>10:00am - 16:00 pm</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="col-md-2">
				<div className="quick-links ">
					<h4 className="widget-title clr  pt-5 mt-2">Quick Links</h4>
					<div className="footer-menu">
						<ul className="list-unstyled">
							<li><a href="#">Home</a></li>
							<li><a href="about.html">About us</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="#">Shop</a></li>
							<li><a href="blog.html">Blogs</a></li>
							<li><a href="contact.html">Contact us</a></li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	</div>
</footer>
   
   </>
  )
}

export default Footer
