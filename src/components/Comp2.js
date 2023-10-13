import React from 'react'
import img1 from '../flipkart_images/hp1.png'
import img2 from '../flipkart_images/hp2.png'
import img3 from '../flipkart_images/hp3.png'
import img4 from '../flipkart_images/hp3.png'
import img5 from '../flipkart_images/hp3.png'
import img6 from '../flipkart_images/hp3.png'
import img7 from '../flipkart_images/hp3.png'
import img8 from '../flipkart_images/hp3.png'
import img9 from '../flipkart_images/hp3.png'
export default function Comp2() {
  return (
    <>
    <section>
    <div className="category-row">
        <div className="category-col">
            <img src={img1} alt=""/>
            <h5>Top Offers</h5>
        </div>
        <div className="category-col">
            <img src={img2} alt=""/>
            <h5>grocery</h5>
        </div>
        <div class="category-col">
            <img src={img3} alt=""/>
            <h5>mobile</h5>
        </div>
        <div class="category-col">
            <img src={img4} alt=""/>
            <h5>fashion</h5>
        </div>
        <div class="category-col">
            <img src={img5} alt=""/>
            <h5>electronics</h5>
        </div>
        <div class="category-col">
            <img src={img6} alt=""/>
            <h5>home</h5>
        </div>
        <div class="category-col">
            <img src={img7} alt=""/>
            <h5>appliances</h5>
        </div>
        <div class="category-col">
            <img src={img8} alt=""/>
            <h5>travel</h5>
        </div>
        <div class="category-col">
            <img src={img9} alt=""/>
            <h5>Beauty,Toys&More</h5>
        </div>

    </div>
</section>
    </>
  )
}
