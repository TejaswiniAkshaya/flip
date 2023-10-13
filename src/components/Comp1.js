import React from 'react'

export default function Comp1() {
  return (
    <>
     <header>
          <div class="header-left">
           <a href="#">Flipkart</a>
           <div class="header-left-p">
           <p><a href="#">Explore</a> <span>Plus<i class="fas fa-plus"></i></span></p>
        </div>
        </div>
          <div class="header-center">
        <input class="header-center-input" type="text" placeholder=" Search for products,Brands and more"/><i class="fas fa-search"></i>
          </div>
          <div class="header-right">
            <a class="active" href="#">Login</a>
            <a href="#">more<i class="fas fa-sort-down"></i></a>
            <a href="#"><i class="fas fa-shopping-cart"></i>cart</a>
          </div>
     </header>

    </>
  );
}
