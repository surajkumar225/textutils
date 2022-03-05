import React, {useState} from 'react';
// rfc
// import React from 'react'

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // })
  
  let mystyle = {
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'black':'white'
  }





  const [btntext, setBtnText] = useState("Enable Dark mode")

  // const toogleStyle = ()=> {
  //   if(mystyle.color === 'black') {
  //       setMyStyle({
  //           color: 'white',
  //           backgroundColor: 'black',
  //           border: '1px solid white'
  //       })
  //       setBtnText("Enable Light Mode");
  //   }

  //   else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     })
  //     setBtnText("Enable Dark mode");
  //   }
  // }

  return (
    <div className="container" style={mystyle}>
      <h2 className="my-2"> <strong>Messages</strong></h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style = {mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Trinity
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {mystyle}>
            The doctrine of the Trinity is the Christian belief that: There is One God, who is Father, Son, and Holy Spirit. Other ways of referring to the Trinity are the Triune God and the Three-in-One.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style = {mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Walker
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {mystyle}>
            Remember that no matter how cool you think you may be, you’re not cool enough to look down on anyone…ever.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style = {mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Jonathan
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {mystyle}>
            When a great genius appears in the world you may know him by this sign; that the dunces are all in confederacy against him.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {mystyle}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              style = {mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Anonymous
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {mystyle}>
            What did the cop say to his stomach?
            </div>
          </div>
        </div>

        <div className="accordion-item" style = {mystyle}>
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              style = {mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Neo
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {mystyle}>
            You Have To Let It All Go, Neo - Fear, Doubt, And Disbelief.
            </div>
          </div>
        </div>


      </div>
      {/* <div className="conatiner my-3">
      <button onClick={toogleStyle} type="button" className="btn btn-danger">{btntext}</button>
      </div> */}
    </div>
  )
}
