import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Player = () => {
    const {q} = useParams()
    const [songData, setSongData] = useState()
    const navigate = useNavigate()
    // const [song, setSong] = useState()

    let api = `https://saavn.me/search/songs?query=${q}`
    const getSongData = async () => {
        let response = await fetch(api)
        let data = await response.json()
        setSongData(data?.data?.results[0])
        // fetchSong(songData?.downloadUrl[songData?.downloadUrl?.length - 1]?.link)
        // console.log(song)
    }

    // const fetchSong = async (s) => {
    //     let response = await fetch(s)
    //     let data = await response.blob()
    //     console.log(data)
    //     const fr = new FileReader()
    //     fr.readAsDataURL(data)
    //     fr.onload = () => {
    //         setSong(fr.result);
    //     }
    // }

    useEffect(() => {
        getSongData();
    }, []);
  return (
    <div className='player'>
      <img src={songData?.image[songData?.image.length - 1].link} height="250" width="250" id="pli" style={{ borderRadius: "7px"}}/>
      <h3 style={{ textAlign: "center" }} dangerouslySetInnerHTML={{
        __html: songData?.name
      }}></h3>
      <h4 style={{ textAlign: "center" }} dangerouslySetInnerHTML={{
        __html: songData?.primaryArtists
      }}></h4>
      <audio src={songData?.downloadUrl[songData?.downloadUrl?.length - 1].link} controls autoPlay controlsList='nodownload' onCanPlay={(e) => e.target.play()}></audio>
      {/* <audio src={song} controls></audio> */}
      <button type="button" className='btn-danger' onClick={() => {
        navigate("/")
      }}>Go Back</button>
    </div>
  )
}

export default Player
