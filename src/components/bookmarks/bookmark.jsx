import React from 'react'
import "./bookmark.css"

 function Bookmarked(props) {
  var link;
        
  if(props.url.slice(0,4)=="http"|| props.url.slice(0,5)=="https")
  {
link = props.url
  }
  else{
link = "http://" + props.url

  }
  
  
  
  
  
  
  
  
  return ( 
            <div className="card sm-4 mt-5 bg-dark text-white" style={{width: "18rem", display:'inline-flex'  }}>
              <div>
                
                <img src={"https://www.google.com/s2/favicons?domain=" + props.url+"&sz=256"} alt="" style={{width:"30%", margin: '2em 0'}}/>
              </div>
            
            <div className="card-body" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2018/07/23/19/32/abstract-3557682_960_720.jpg")`}}>
              <h5 className="card-title">{props.title.slice(0,15)}</h5>
              <p className="card-text">{props.content.slice(0,15)}</p>  
              <div className='text-black' style={{display:"flex", justifyContent:"space-evenly"}} >
              <button className='btn btn-warning ' ><a href={link} style={{color:"black",textDecoration: "none"}} target="_blank" rel="noreferrer" sandbox >Visit Site</a></button>
              
              <button className="btn btn-danger" style={{color:"black"}} onClick={()=>{props.onDelete(props.index)}}>Delete</button>
              </div>
               </div>
          </div>
  )
}

export default Bookmarked;