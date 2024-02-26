import { Children, useState, useRef, useEffect } from "react";
import './App.css'
function App() {
const childRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0) 
  const [currentPage, setCurrentPage] = useState(1)
  const handleScroll = (event:any) => {
    const scrollY = event.currentTarget.scrollTop 
    setScrollTop(scrollY);
      if(scrollY >= (clientHeight-100)){
        if(scrollY % (clientHeight-100) === 0){
          setCurrentPage(currentPage+1)
        }
      }
  };
  useEffect(()=>{
    setClientHeight(childRef.current?.clientHeight as number)
  },[childRef])

  useEffect(()=>{
    // api login here
    console.log(currentPage)
  },[currentPage])



  return (
    <div className="parent">
      <p>{scrollTop}</p>
      <div className="child" onScroll={handleScroll} ref={childRef}>
        {[...Array(100)].map((a,idx)=>{
          return <p key={idx} style={{height:100}}>a</p>
        })}
      </div>
    </div>
  )
}

export default App
