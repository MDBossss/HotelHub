import React from 'react'
import Recents from '../../Recents/Recents'

const RecentSection = () => {
  return (
    <div className="recent-wrapper container" id='Recent Posts'>
    <div className="recent">
        <h1>Recent posts</h1>
        <Recents/>
    </div>
</div>
  )
}

export default RecentSection