import React from 'react'
import p1 from '../flipkart_images/p1.jpeg'
import p2 from '../flipkart_images/p2.jpeg'
import p3 from '../flipkart_images/p3.jpeg'
import p4 from '../flipkart_images/p4.jpeg'
import p5 from '../flipkart_images/p5.jpeg'
import p6 from '../flipkart_images/p6.jpeg'
import p7 from '../flipkart_images/p7.jpeg'
export default function Comp4() {
  return (
    <>
    <section>
    <div class="card">
        <div class="common-heading">
            <div class="common-heading-left">
             <h1>Best Battery Phones</h1>
             <h2>More than 4000mAh</h2>
            </div>
            <div class="common-heading-right">
              <button>view all</button>
            </div>
        </div>
        <div class="common-row">
            <div class="common-col">
                <img src={p1} alt="mobile"/>
                <h3>Poco m2 pro</h3>
                <h4>5000mAh Bttery</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>13999</h6>
            </div>
            <div class="common-col">
                <img src={p2} alt="mobile"/>
                <h3>techo spark</h3>
                <h4>4500mAh Bttery</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>14999</h6>
            </div>
            <div class="common-col">
                <img src={p3} alt="mobile"/>
                <h3>vivio</h3>
                <h4>5000mAh Bttery</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>15999</h6>
            </div>
            <div class="common-col">
                <img src={p4} alt="mobile"/>
                <h3>samsung</h3>
                <h4>5500mAh Bttery</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>23999</h6>
            </div>
            <div class="common-col">
                <img src={p5} alt="mobile"/>
                <h3>realme</h3>
                <h4>5000mAh Bttery</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>13999</h6>
            </div>
            <div class="common-col">
                <img src={p6} alt="mobile"/>
                <h3>oppo pro</h3>
                <h4>5200mAh Bttery</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>18999</h6>
            </div>
            <div class="common-col">
                <img src={p7} alt="mobile"/>
                <h3>samsung</h3>
                <h4>5000mAh Bttery</h4>
                <h6>Now<i class="fas fa-rupee-sign"></i>11999</h6>
            </div>
            
        </div>
    </div>
</section>

    </>
  )
}
