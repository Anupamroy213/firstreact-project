import React from 'react';
import './index.css';




let hrs=new Date(2024,2,1,8);
hrs = hrs.getHours();
let greeting='';
const cssStyle={
};

if(hrs>=1 && hrs<12){
    greeting='good morning'
    cssStyle.color="green";
  }
  
  else if(hrs>=12 && hrs<19){
    greeting='good afternoon'
    cssStyle.color="orange";
  }
  else{
    greeting='good night'
    cssStyle.color="black";
  }

function Greeting(){
    
    return <h1 className='heading'>hello sir, <span style={cssStyle}>{greeting}</span></h1>;
    
}

export default Greeting;