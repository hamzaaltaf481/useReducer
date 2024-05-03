import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import data from './data';

export default function Home() {
  return (
    <>
        <Navbar title="Smart Phones" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ml-4">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
