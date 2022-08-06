
import CusNavbar from "./components/Nav/Nav"
import Foot from "./components/footer/footer"
import  './App.css';
import Bookmarked from "./components/bookmarks/bookmark";
import React ,{ useState,useEffect  } from "react";

function App() {
  let initbookmarks;
  if (localStorage.getItem("bookmarks") === null) {
    initbookmarks = [];
  }
  else {
    initbookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  }

function Submit(val)
{
  
console.log("Adding bookmark ",val);

const bookmark ={
sn: bookmarks.length+1,
title: val.Title,
content: val.Desc,
url:val.Uri


}
setbookmarks([...bookmarks,bookmark]);






  


}

const [bookmarks,setbookmarks] = useState(initbookmarks)
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks])



  function onDelete(index)
  {

console.log("Pressed onDelete");
    setbookmarks(bookmarks.filter((e)=>
    {

return (e.sn !== index)


    }
    
    
    )
    
    )
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  }











  return (


    <div style={{backgroundImage: `url("./lightning.jpg")`, width:"100vw" ,backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'}}>
    
     <CusNavbar title="Bookmark App"/>
     <div className="App">
      <div className="bookmark my-3" style={{minHeight:"86vh",margin:"10px 0" }}>
     {
      bookmarks.map((props) =>
      {

return (


  
  bookmarks.length===0? <h1>No Bookmark present</h1> :
  < Bookmarked title={props.title} content={props.content} key={props.sn} index={props.sn} url={props.url} onDelete={onDelete}/>)})}
    </div>
    <Foot submit={Submit}/>
    </div>
    </div>
  );
}

export default App;
