import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
// import reportWebVitals from './reportWebVitals';

// const name="Anupam";
// const curDate= new Date().toLocaleDateString();
// const curTime= new Date().toLocaleTimeString();

const root = ReactDOM.createRoot(document.getElementById('root'));

// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/300/300";

// const img3="https://picsum.photos/400/300";

root.render(
 <>
      {/* <h1>Hello my name is {name}
      </h1>
      <p>
      current date is ={curDate}
      </p>
      current time is ={curTime}
      
      <p>
        
      </p> */}


      {/* <h1 contentEditable="true">Hello my name is {name} */}
      {/* </h1> */}
{/* <h1 className='heading'>my photo gallery</h1>
        <div className='images'>

      <img src ={img1} alt="random photos"></img>
      <img src ={img2} alt="random photos"></img>
      <img src ={img3} alt="random photos"></img>
        </div> */}




<App/>

 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
