import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Trending = () => {
  const [trendingData, setTrendingData] = useState([])

  useEffect(() => {
    const getTrendingData = async () => {
      let api = "https://saavn.me/playlists?id=1179495885"
      let response = await fetch(api)
      let data = await response.json()
      setTrendingData(data.data.songs)
    }
    getTrendingData()
  }, [])
  return (
    <div className="trendingsPage">
      <div className="trendingCont">
            {trendingData?trendingData?.map((song, key) => {
                if(key > 4) return;
                return <Link to={"/id/"+song.id} style={{textDecoration: "none", color: "black"}} key={key}>
                    <div className="trendingSongDiv">
                        <img src={song?.image[song?.image?.length - 1]?.link} alt="" className="img" width={50}/>
                        <div className="info">
                            <h3 dangerouslySetInnerHTML={{__html: song?.name}}></h3>
                            <h4 dangerouslySetInnerHTML={{__html: song?.primaryArtists}}></h4>
                        </div>
                    </div>
                </Link>
            }):<></>}
        </div>
    </div>
  )
}

export default Trending
