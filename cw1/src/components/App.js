import React from "react";
import List from './list';
import Counter from './counter/Counter';


const mario = [
  {
    
    title:"Super Mario",
    image:"https://supermariorun.com/assets/img/hero/hero_chara_mario_update_pc.png"
  },
  {
    
    title:"Super Mario Team",
    image:"https://i.ytimg.com/vi/tB7fL5HvneI/hqdefault.jpg"

  }
];

// const App = () => mario.map(mario=><List key={mario.title} {...mario}/>);

const App=()=>{
  return <>
  <Counter/>;
  {
  mario.map(mario=><List key={mario.title} {...mario}/>)
  }
  </>
}

export default App;
