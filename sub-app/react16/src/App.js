import React, { lazy, Suspense,useState,useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Divider } from 'antd';
import {GlobalContext,initState } from './Context'
import 'antd/dist/antd.min.css';
import './App.css';

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react16' : '/'}>
      <nav>
        <Link to="/">Home</Link>
        <Divider type="vertical" />
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App(props) {
  // const {onGlobalStateChange,setGlobalState} = props.global;
  // const [data,setData] = useState(null);
  // useEffect(()=>{
  //   onGlobalStateChange(value =>{
  //     setData(value)
  //   },true)
  // },[])
  // const obj = {data,setGlobalState}
  return (
    <div className="app-main">
      <LibVersion />
      <HelloModal />

      <Divider />

      <RouteExample />
    </div>
  );
}
