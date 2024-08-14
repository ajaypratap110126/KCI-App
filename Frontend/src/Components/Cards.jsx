import React from 'react'

function Cards({items}) {
    console.log("Cards data:",items);
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img src={items.image} alt="Shoes" />
  </figure>
  <div className="card-body dark:bg-slate-900 dark:text-white dark:border rounded">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary">{items.category}</div>
    </h2>
    <p>{items.Title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-5 py-4 duration-200">₹{items.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-5 py-4 duration-200">Buy Now!</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards;
