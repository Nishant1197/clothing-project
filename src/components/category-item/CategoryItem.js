import React from 'react'
import "./CategoryItem.scss"
function CategoryItem({category}) {
  let {title,imageUrl}=category
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop</p>
      </div>
    </div>

  )
}

export default CategoryItem