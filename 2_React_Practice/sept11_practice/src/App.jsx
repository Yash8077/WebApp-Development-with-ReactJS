import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tablu from './table'
import { Image1 } from './image'
import ImageSlider from './imageSlider'
import ManualImageSlider from './ManualImageSlider'
import ProfileCard from './ProfileCard'
function App() {
  const [count, setCount] = useState(0)
  const Profile=[{
    name:"Yash Mishra",
    bio:"A great dev"
  },
  {
    name:"Vansh",
    bio:"Jhoothi Tareef"
  }]
  return (
    <>
      <Tablu name={["Yash","Vansh"]} company={["MS","GO"]}/>
      <Image1 />
      <ImageSlider />
      <ManualImageSlider />
      {Profile.map((data,index)=>{
        return (<ProfileCard name={data.name} bio={data.bio}/>);
      })}
    </>
  )
}

export default App;
