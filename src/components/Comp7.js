import React from 'react'
import c1 from '../flipkart_images/c1.jpeg'
import c2 from '../flipkart_images/c2.jpeg'
import c3 from '../flipkart_images/c3.jpeg'
import c4 from '../flipkart_images/c4.jpeg'
import c5 from '../flipkart_images/c5.jpg'
import c6 from '../flipkart_images/c6.jpeg'
import c7 from '../flipkart_images/c7.jpeg'

export default function Comp7() {
  return (
    <>
    <section>
    <div class="card">
        <div class="common-heading">
         <div class="common-heading-left">
             <h1>Top Picks On Men's Clothing </h1>
             <h2>Up to 50% OFF</h2>
         </div>
         <div class="common-heading-right">
             <button>view all</button>
         </div>
        </div>
        <div class="common-row">
         <div class="common-col col-men">
             <img src={c1} alt="mobile"/>
             <h3> t-shirt</h3>
             <h4> up to 20% off</h4>
             <h6>Now<i class="fas fa-rupee-sign"></i>399</h6>
         </div>
         <div class="common-col col-men">
             <img src={c2} alt="mobile"/>
             <h3> t-shirt black</h3>
             <h4>up to 20% off</h4>
             <h6>Now<i class="fas fa-rupee-sign"></i>499</h6>
         </div>
         <div class="common-col col-men">
             <img src={c3} alt="mobile"/>
             <h3>cap</h3>
             <h4>up to 20% off</h4>
             <h6>Now<i class="fas fa-rupee-sign"></i>159</h6>
         </div>
         <div class="common-col col-men">
             <img src={c4} alt="mobile"/>
             <h3> cool cap</h3>
             <h4>up to 20% off</h4>
             <h6>Now<i class="fas fa-rupee-sign"></i>239</h6>
         </div>
         <div class="common-col col-men">
             <img src={c5} alt="mobile"/>
             <h3>jeans</h3>
             <h4>up to 20% off</h4>
             <h6>Now<i class="fas fa-rupee-sign"></i>139</h6>
         </div>
         <div class="common-col col-men">
             <img src={c6} alt="mobile"/>
             <h3>shirt</h3>
             <h4>up to 20% off</h4>
             <h6>Now<i class="fas fa-rupee-sign"></i>1899</h6>
         </div>
         <div class="common-col col-men">
             <img src={c7} alt="mobile"/>
             <h3>short</h3>
             <h4>up to 20% off</h4>
             <h6>Now<i class="fas fa-rupee-sign"></i>999</h6>
         </div>
         
     </div>
    </div>
</section>
    </>
  )
}
