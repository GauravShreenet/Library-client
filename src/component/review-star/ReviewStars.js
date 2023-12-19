import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const maxStar = 5
export const ReviewStars = ({avgRating = maxStar}) => {
    const fullRating = Math.floor(avgRating)
    const isHalfStar = avgRating > fullRating 
    const emptyStar = isHalfStar ? maxStar - fullRating - 1 : maxStar - fullRating
    // const stars = Array(fullRating).fill("<FaStar className='text-warning' />").reduce((acc, item)=> acc + item,"")

    return (
        <div className='mb-3'>
            <span>
                {Array(fullRating).fill("").map((item, i)=> (<FaStar className='text-warning' />))}
                {isHalfStar && <FaStarHalfAlt className='text-warning' />}
                {Array(emptyStar).fill("").map((item, i)=> (<FaRegStar className='text-warning' />))}
                / {avgRating}
            </span>{" "}
        </div>
    )
}
