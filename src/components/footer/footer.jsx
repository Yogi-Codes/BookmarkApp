import { useState } from "react";





function  Foot(props)
{

  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [Uri, setUri] = useState("")


  function onChnageHandlerT(e)
  {

setTitle(e.target.value)


  }
  function onChnageHandlerD(e)
  {

setDesc(e.target.value)


  }
  function onChnageHandlerU(e)
  {

setUri(e.target.value)


  }

  const addT = (e) => {
    e.preventDefault();
    if (!Title || !Desc) {
        alert("Title or Description cannot be blank");
    }
    else {
        props.submit({Title, Desc,Uri});
        setTitle("");
        setDesc("");
        setUri("");
    }
} 

return ( 
<div>
<nav className="navbar navbar-dark bg-dark fixed-bottom " style={{border: "1px solid black", position:"relative" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" >Copyright ©2022 BookmarkApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Bookmark Creation</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
         
         
          <li className="nav-item dropdown">
           
            <ul className="dropdown-menu dropdown-menu-dark">
              
              
             
              
            </ul>
          </li>
        </ul>
        <form>
  <div className="form-group">
    <label htmlFor="bookmarkTitle">Bookmark Title</label>
    <input type="Title" className="form-control" id="title"  placeholder="Enter Title" value={Title} onChange={onChnageHandlerT}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="bookmarkTitle">Bookmark Url</label>
    <input type="Title" className="form-control" id="title"  placeholder="Enter Url" value={Uri} onChange={onChnageHandlerU}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Bookmark Description</label>
    <textarea className="form-control" id="description" rows="3" value={Desc} onChange={onChnageHandlerD}></textarea>
  </div>
  <br />
  <button type="submit" className="btn btn-primary btn-warning"  onClick={addT}><h2>+</h2></button>
</form>
      </div>
    </div>
  </div>
</nav>

</div>





);

    
}



export default Foot;