import { useState } from "react"

import MainBanner from "./components/MainBanner/MainBanner"
import Players from "./components/Players/Players"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  const [coins, setCoins] = useState(0);

  const increaseCoins = () => {
    setCoins(coins + 70000000);
  }
  return (
    <>
      <div className="mx-auto " >
        <Header coins={coins}></Header>
        <MainBanner increaseCoins={increaseCoins}></MainBanner>
        <Players coins={coins} setCoins={setCoins}></Players>
        <Footer></Footer>
      </div>
   
    
      
    </>
  )
}

export default App
