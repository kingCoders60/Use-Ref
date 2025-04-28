import React from 'react'
import {useState,useEffect,useRef} from 'react'
import {motion} from 'framer-motion'

const App = () => {
  let val =useRef(0);
  const [count,setCount]=useState(0);
  let btnRef = useRef();

  const handleCare = () =>{
    val.current+=1;
    console.log(val);
    setCount(count+1);
  }
  useEffect(()=>{
    console.log("ye bhi chal gaya")
  },[])

  const changeColor=()=>{
    btnRef.current.style.backgroundColor="red"
  }

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <button ref={btnRef} onClick={handleCare} className="onHover-pointer">Button {count}</button>
        </div>
        <div>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={changeColor}
          >
            Background
          </motion.button>
        </div>
    </div>
  );
}

export default App
