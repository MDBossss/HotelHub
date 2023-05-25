import React from 'react'

interface Props{
    type: "success" | "fail"
}

const ReservationResult = ({type}:Props) => {
  return (
    <div className="reservation-result">
        {type === "success" ? 
            <div>
                <img src="favicon.png" alt="success" /> 
                <h2>Booked, see you soon!</h2>   
            </div> :
            <div>
                <img src="favicon.png" alt="failed" />
                <h2>Something went wrong, try again!</h2>
            </div>

        }        
    </div>
  )
}

export default ReservationResult