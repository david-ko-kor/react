import React,{useEffect,useState} from 'react'

function App() {
  const[state,setState] =useState([])
  useEffect(()=>{
     fetch('/api').then(res=>res.json()).then(data=>setState(data))
  },[])

console.log(state)

  const submithandler = (()=>{
    fetch('/data',{
      method:'POST',
      body:JSON.stringify({
        user:'goremi1'
      }),
      headers: {
        'Content-Type': 'application/json' // 이 부분 추가
      }
    }).then(res =>res.json()).then((data => console.log(data)))
  })


  return (
   <>
 {state.members && state.members.length > 0 && (
  <h1 onClick={submithandler}>{state.members[0]}</h1>
)}
   </>
  );
}

export default App;
