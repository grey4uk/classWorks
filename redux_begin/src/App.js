import React from 'react';
import {connect} from 'react-redux';
import { increment, decrement } from './redux/actions';



const App = props => {
  console.log(props);
  return (
    <div style={{width:200, margin: "auto"}}>
    <button onClick={()=>(props.increment(10))}>INCREMENT</button>
    <h2>{props.count}</h2>
    <button onClick={()=>(props.decrement(10))}>DECREMENT</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return{count:state
    }}
 

const mapDispatchToProps =({
increment,
decrement
}
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
