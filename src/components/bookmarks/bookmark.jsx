import React from 'react'
import "./bookmark.css"

 function Bookmarked(props) {
        return ( 
            <div className="card sm-4 mt-5 bg-dark text-white" style={{width: "18rem", display:'inline-flex'  }}>
            <iframe className='ifram'  src={props.url} title={props.title} frameborder="3" alt="https://news.fnal.gov/wp-content/uploads/2020/02/2020-02-11_5e42c8469d971_White_background-scaled.jpg"></iframe>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.content}</p>
              <button className="btn btn-warning" onClick={()=>{props.onDelete(props.index)}}>Delete {props.title} ...</button>
              
               </div>
          </div>
  )
}

export default Bookmarked;