
import React, {createContext,useState,useEffect} from 'react'

const GlobalContext = createContext();


const ContextProvider = (props) => {
    const {onGlobalStateChange,setGlobalState} = props.global;
    const [data,setData] = useState(null);
    useEffect(()=>{
     onGlobalStateChange(value =>{
        setData(value)
      },true)
    },[])
    const obj = {data,setGlobalState};
    return (
      <GlobalContext.Provider value={obj}>
        {props.children}
      </GlobalContext.Provider>
    );
};
  
export {
    GlobalContext,
    ContextProvider,
}
