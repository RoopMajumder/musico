import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { host } from '../configs/api'
import { mostTrending } from '../configs/trending'

const Trending = () => {
  // const [trendingData, setTrendingData] = useState([])

  // useEffect(() => {
  //   const getTrendingData = async () => {
  //     let api = `${host}/playlists?id=1179495885`
  //     let response = await fetch(api)
  //     let data = await response.json()
  //     setTrendingData(data.data.songs)
  //   }
  //   getTrendingData()
  // }, [])
  return (
    <div className="trendingsPage">
      <div className="trendingCont">
            {mostTrending?mostTrending?.map((song, key) => {
                if(key > 4) return;
                return <Link to={"/id/"+song.id} style={{textDecoration: "none", color: "black"}} key={key}>
                    <div className="trendingSongDiv">
                        <img src={song?.cover} alt="" className="img" width={50}/>
                        <div className="info">
                            <h3 dangerouslySetInnerHTML={{__html: song?.title}}></h3>
                            <h4 dangerouslySetInnerHTML={{__html: song?.artists}}></h4>
                        </div>
                    </div>
                </Link>
            }):<></>}
        </div>
    </div>
  )
}

export default Trending
