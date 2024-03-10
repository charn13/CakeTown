import { useState } from "react";
import React from 'react'
import { Header, Footer } from "../components";

const Home = () => {
    const [cards, setCards] = useState([
        {
            id:1 , Name:"Sprinkled Donuts" ,img:"https://demo.templatesjungle.com/bakery/images/cake-item1.jpg"
        },
        {
            id:2 , Name:"Black Forest Cupcake" ,img:"https://demo.templatesjungle.com/bakery/images/cake-item3.jpg"
        },
        {
            id:3 , Name:"Marcarons with Berries" ,img:"https://demo.templatesjungle.com/bakery/images/cake-item4.jpg"
        },
        
        {
            id:5 , Name:"Dora Dounts" ,img:"https://demo.templatesjungle.com/bakery/images/cake-item2.jpg"
        },
      ]);



  return (
<>
    <Header />
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner hght ">
    <div className="carousel-item active home1img">
    <div className="container p-5 mt-5  ">
        <div className="row">
            <div className="col-md-7  home1div">
                 <h4 className='p-2'>FRESHLY BAKED</h4>
                 <h1 className='p-1 home1h1'>Muffins and Pastries</h1>
                 <p className='p-1 font-3 home1p'>A gorgeous selection of our favorites for a client to send as a new year’s gift. A gorgeous	selection of our favorites for a client to send as a new year’s gift.</p>

            </div>
        </div>
       </div>
    </div>
    <div className="carousel-item home2img ">
    <div className="container p-5 mt-5  ">
        <div className="row">
            <div className="col-md-7  home1div">
                 <h4 className='p-2'>FRESHLY BAKED</h4>
                 <h1 className='p-1 home1h1'>Order Custom Cakes</h1>
                 <p className='p-1 font-3 home1p'>A gorgeous selection of our favorites for a client to send as a new year's gift. A gorgeousselection of our favorites for a client to send as a new year's gift.</p>

            </div>
        </div>
       </div>
      
    </div>
    <div className="carousel-item home3img">
    <div className="container p-5 m-auto  ">
        <div className="row">
            <div className="col-md-7  home1div">
                 <h4 className='p-2'>Delicious cupcakes</h4>
                 <h1 className='p-1 home1h1'>Muffins and Pastries</h1>
                 <p className='p-1 font-3 home1p'>A gorgeous selection of our favorites for a client to send as a new years gift. A gorgeous	selection of our favorites for a client to send as a new year’s gift.</p>

            </div>
        </div>
       </div>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
     {/* section about us */}

              
       
        
     <div className="container pt-4 mt-4">
     <div className="row">
           <h1 className="text-center py-5">Best Product</h1>
   
   {cards.map(card => (
    <div className='col-md-3 m-auto' key={card.id} >
        <img src={card.img} alt={card.Name} className="w-100 cardimg" />
        <p className="text-center home1p p-3 ">{card.Name}</p>
    </div>
))}
</div>
        </div>
     {/* section about us End */}
  
  {/* section next */}
    <div className="container-fluid home3">
    <div className="container">
    <div className="row mt-5 m-auto">
        
            <div className="col-md-6 p-5 mt-5">
                <h1>Our Special Chocolate Mousse</h1>
                <p className="">All of our products are made from scratch using family recipes with the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.

</p>
           
            </div>
        </div>
    </div>
    </div>


  {/* section next end */}

     <div className="container-fluid bg-light p-5 mt-5 brandc">
     <div className="container">
        
          
            <ul className="d-flex list-unstyled justify-content-between flex-wrap row ">
					<li className=" col-md-2 pt-3"><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/baker.svg" className="brandImg w-100 pt-3"/></a></li>
					<li className=" col-md-2 pt-3"><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/bakery.svg" className="brandImg w-100 pt-3"/></a></li>
					<li className=" col-md-2 pt-3"><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/thebakery.svg" className="brandImg w-100 pt-3"/></a></li>
					<li className=" col-md-2 pt-3"><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/breadcookies.svg" className="brandImg w-100 pt-3"/></a></li>
					<li className=" col-md-2 pt-3"><a href="#"><img src="https://demo.templatesjungle.com/bakery/images/bakery.svg" className="brandImg w-100 pt-3"/></a></li>
				</ul>
            
       

     </div>
     </div>

 
    <Footer />
</>
  )}
export default Home