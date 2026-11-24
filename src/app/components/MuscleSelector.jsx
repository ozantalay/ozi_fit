'use client'

import Model from 'react-body-highlighter'

import React from 'react'

export default function MuscleSelector() {
    const handeleClick=(data)=>{
        console.log(data);
    }
  return (
    <div className='w-72'>
        <Model type='anterior' onClick={handeleClick}/>
    </div>
  )
}
