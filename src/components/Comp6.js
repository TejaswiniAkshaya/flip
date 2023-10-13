import React from 'react'
import s1 from '../flipkart_images/s1.jpeg'
import s2 from '../flipkart_images/s2.jpeg'
import s3 from '../flipkart_images/s3.jpeg'
import s4 from '../flipkart_images/s4.jpeg'
import s5 from '../flipkart_images/s5.jpeg'
import s6 from '../flipkart_images/s6.jpeg'
import s7 from '../flipkart_images/s7.jpeg'
export default function Comp6() {
  return (
   <>
   <section>
       <div class="card">
           <div class="common-heading">
            <div class="common-heading-left">
                <h1>Top Deals on Electronics</h1>
                <h2>Up to 70% OFF</h2>
            </div>
            <div class="common-heading-right">
                <button>view all</button>
            </div>
           </div>
           <div class="common-row">
            <div class="common-col col-headphones">
                <img src={s1} alt="mobile"/>
                <h3> Bluetooth Headphones</h3>
                <h4>new lancher</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>399</h6>
            </div>
            <div class="common-col col-headphones">
                <img src={s2} alt="mobile"/>
                <h3>techo speaker</h3>
                <h4>new lancher</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>499</h6>
            </div>
            <div class="common-col col-headphones">
                <img src={s3} alt="mobile"/>
                <h3>true wireless</h3>
                <h4>new lancher</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>159</h6>
            </div>
            <div class="common-col col-headphones">
                <img src={s4} alt="mobile"/>
                <h3>wired hearphones</h3>
                <h4>new lancher</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>239</h6>
            </div>
            <div class="common-col col-headphones">
                <img src={s5} alt="mobile"/>
                <h3>speaker</h3>
                <h4>new lancher</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>139</h6>
            </div>
            <div class="common-col col-headphones">
                <img src={s6} alt="mobile"/>
                <h3>Bluetooth Headphones</h3>
                <h4>new lancher</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>1899</h6>
            </div>
            <div class="common-col col-headphones">
                <img src={s7} alt="mobile"/>
                <h3>Bluetooth Headphones</h3>
                <h4>new lancher</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>999</h6>
            </div>
            
        </div>
       </div>
   </section>
   </>
  )
}
