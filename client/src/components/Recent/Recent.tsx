import {AiOutlineClockCircle} from "react-icons/ai";
import { RecentModel } from '../../types/model';

interface Props{
    recent: RecentModel
}

const Recent = ({recent}:Props) => {
  return (
    <div className="recent-item">
        <div className="top">
            <img src={recent.image} alt="location" />
        </div>
        <div className="bottom">
            <div className="info">
                <p className='date'>{recent.date}</p>
                <div className="read-time">
                    <AiOutlineClockCircle className='icon'/>
                    <p>{recent.readTime}</p>
                </div>
            </div>
            <h3>{recent.title}</h3>
            <p>{recent.description}</p>
        </div>
    </div>
  )
}

export default Recent