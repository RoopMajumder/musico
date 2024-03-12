import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.svg"
import { host } from '../configs/api'

const PlayerID = () => {
    const {q} = useParams()
    const link = document.querySelector('link[rel="icon"]');
    const [songData, setSongData] = useState()
    const [audioData, setAudioData] = useState()
    const navigate = useNavigate()
    // const [song, setSong] = useState()

    let api = `${host}/songs/${q}`
    const getSongData = async () => {
        let response = await fetch(api)
        let data = await response.json()
        // console.log(data)
        setSongData(data?.data[0])
        // fetchSong(songData?.downloadUrl[songData?.downloadUrl?.length - 1]?.link)
        // console.log(song)
    }

    const setHeader = () => {
      let n = songData?.name
      let r = n;
      if(n.search("&quot;")) {
        r = n.replaceAll("&quot;", "\"")
      }
      document.title = `${r} - Musico`
      link.setAttribute("type", "image/jpeg")
      link.setAttribute("href", songData?.image[songData?.image.length - 1]?.link)
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

    const setAudio = async () => {
      const a = songData?.downloadUrl[songData?.downloadUrl?.length - 1].url
      const response = await fetch(a)
      const data = await response.blob()
      // setAudioData(URL.createObjectURL(data))
      // console.log(URL.createObjectURL(data))
      const fr = new FileReader()
      fr.readAsDataURL(data)
      fr.onload = () => {
        setAudioData(fr.result)
      }
    }

    if(songData) {
      setHeader()
      setAudio()
    }
    else {
      document.title = "Musico - Roop Majumder"
      link.setAttribute("type", "image/svg+xml")
      link.setAttribute("href", logo)
    }

    useEffect(() => {
        getSongData();
    }, []);
  return (
    <div className='player'>
        {
        songData?<>
        <img src={songData?.image[songData?.image.length - 1].url} height="250" width="250" id="pli" style={{ borderRadius: "7px"}}/>
      <h3 style={{ textAlign: "center" }} dangerouslySetInnerHTML={{
        __html: songData?.name
      }}></h3>
      <h4 style={{ textAlign: "center", padding: "0 12px" }} dangerouslySetInnerHTML={{
        __html: songData?.artists?.primary?.map((item, no) => {
          let string = ""
          string += " " + item?.name
          return string
        })
      }}></h4>
      <audio src={
        // songData?.downloadUrl[songData?.downloadUrl?.length - 1].link
        audioData
      } controls autoPlay={true} controlsList='nodownload' onLoadedData={(e) => e.target.play()}></audio>
      {/* <audio src={song} controls></audio> */}
      <div className="btn-group">
        <button type="button" className='btn-danger' onClick={() => {
          navigate("/")
        }}>Go Back</button>
        <button type='button' className='btn' onClick={() => {
            navigator.clipboard.writeText("https://roopmajumder.github.io/musico/#/id/"+songData?.id)
            alert("Link copied to clipboard.")
        }}>Share</button>
        {/* <button type="button" className='btn' onClick={() => {
          navigator.clipboard.writeText(`<iframe src="https://roopmajumder.github.io/musico/#/embed/${songData?.id}" height="550" width="340"></iframe>`)
          alert("Copied Embed.")
        }}>Embed</button> */}
      </div>
        </>:<>
        <h1>No Song Found :(</h1>
        <button type="button" className='btn-danger' onClick={() => {
          navigate("/")
        }}>Go Back</button>
        </>
        }
    </div>
  )
}

export default PlayerID
