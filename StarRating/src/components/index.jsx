
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

export default function StarRating({noOfStars = 5}){

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function HandleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function HandleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function HandleMouseLeave(){
        setHover(rating)
    }


    return(
        <div className='container'>
            <h1>Star Rating</h1>
            <div className="star-rating">            
            {
                [...Array(noOfStars)].map((_,index) => {

                    index += 1

                    return(
                        <FaStar 
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => HandleClick(index)}
                            onMouseMove={() => HandleMouseEnter(index)}
                            onMouseLeave={() => HandleMouseLeave()}
                            size={40}
                        />
                    )
                })
            }
            </div>
        </div>
    )


}
