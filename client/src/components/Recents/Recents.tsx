import React, { useState } from 'react'
import { RecentModel } from '../../types/model';
import Recent from '../Recent/Recent';


    const recent:RecentModel = {
        title: "My trip to Athens",
        description: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...",
        image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        readTime: "5 minutes",
        date: "May 23, 2022"
    }


const Recents = () => {

    const [recents,setRecents] = useState<RecentModel[]>([recent,recent,recent]); // 3 objects in an array to be fetched from the backend

  return (
    <div className="recents-items">
        {recents?.map((recent,key) => (
            <Recent recent={recent}/>
        ))}
    </div>
  )
}

export default Recents