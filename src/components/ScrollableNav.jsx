import React, { Component } from 'react';
import { Navbar } from "react-bootstrap"
import { useState, useEffect } from "react"
import ScrollableNavProfile from "./ScrollableNavProfile";



import './ScrollableNav.css'

class ScrollableNav extends React.Component {
  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

  render(){
  return (

    <div className={`Nav ${this.state.nav && 'Nav__white' }`} >
    
    <ScrollableNavProfile/>
    
    </div>
  )}
}
export default ScrollableNav;