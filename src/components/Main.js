import React from "react";
function Main(props){
    return(
        <div className="main">
            <div className="first">
               <img src={props.imgeUrl} 
                 alt="myimg"
                //  style={{width:"100px",height:"100px"}}
                className="img"
               />
            </div>
            <section className="second">
                <div className="links">
                    <h5 className="location">{<i className="fa-solid fa-location-dot" style={{color:"red"}}></i>} {props.location}</h5>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer" className="link">View on google map</a>
                </div>
                <h3 className="title">{props.title}</h3>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <h6 className="description">{props.description}</h6>
            </section>
        </div>
    )
}

export default Main