import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from "../components/Main";
import Demo1 from '../Demos/Demo1/Demo1';
import Demo2 from '../Demos/Demo2/Demo1';
import Demo3 from '../Demos/Demo3/Demo1';
import Demo4 from '../Demos/Demo4/Demo1';
export default function Routing() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main/>} />
            <Route path="/demo1" element={<Demo1/>} />
            <Route path="/demo2" element={<Demo2/>} />
            <Route path="/demo3" element={<Demo3/>} />
            <Route path="/demo4" element={<Demo4/>} />
        </Routes>
    </>
  )
}
