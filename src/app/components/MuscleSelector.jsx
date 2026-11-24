'use client'

import Model from 'react-body-highlighter'

import React, { useState } from 'react'

export default function MuscleSelector() {

    const [selectedMuscle,setSelecdetMuscle]=useState(null)

    const handleClick=(data)=>{
        console.log(data);
        setSelecdetMuscle(data.muscle)
    }
  return (
    <div className='w-72'>
        <Model type='anterior' onClick={handleClick}/>
        <p className='mt-4'>
            Seçilen:{selectedMuscle ?? 'Henüz Yok'}
        </p>
    </div>
  )
}
