import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
    type: "success" | "fail"
}

const ReservationResult = ({type}:Props) => {
  return (
    <div className="reservation-result-wrapper">
        {type === "success" ? 
            <div className='result'>
                <img src="/success.svg" alt="success" /> 
                <h2>Booked, see you soon!</h2>   
                <Link to={"/"}><button>Home page</button></Link>
            </div> :
            <div className='result'>
                <img src="/failed.svg" alt="failed" />
                <h2>Something went wrong, try again!</h2>
                <Link to={"/deals"}><button>Try again</button></Link>
            </div>

        }        
    </div>
  )
}

export default ReservationResult