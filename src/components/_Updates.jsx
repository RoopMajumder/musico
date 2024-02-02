import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Updates = () => {
    const navigate = useNavigate()

    const listOptions = {
      done: {
        textDecoration: "line-through"
      },
      none: {
        textDecoration: "none"
      },
      notGoingToBeAdded: {
        textDecoration: "line-through",
        color: "red"
      }
    }
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div className="info-container" style={{overflowY: "scroll"}}>
            <div className="title" style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}}>
                <img src={logo} height={50} width={50} />
                <h2 style={{textAlign: "center"}}>Musico</h2>
            </div>
            <br />
            <p>Musico is a powerful music player. With many songs, Musico is one of the awesome apps in the category of Music.</p>
            <br />
            <p>Musico is made by <a href="https://instagram.com/roop_majumder5/" style={{fontWeight: 700, textDecoration: "none", color: "black"}}>Roop Majumder</a> from <a href="https://www.instagram.com/technical_earth_studios/"  style={{fontWeight: 700, textDecoration: "none", color: "black"}}>Technical Earth Studios</a>.</p>
            <br />
            {/* updates */}
            <h3>-- Updates --</h3>
            <ul style={{listStyle: "inside", marginLeft: "10px"}}>
                {/* <li>Added the Updates Menu.</li> */}
                {/* <li>Added the option that when song is playing the logo and title will be shown.</li> */}
                {/* <li>Disabled song downloading.</li> */}
                {/* <li>Added option to share song.</li> */}
                {/* <li>Added information about unavailability of Songs.</li> */}
                {/* <li>Added search results page for better experience.</li> */}
                <li>Updated the User Interface (UI).</li>
                <li>Added a Splash Screen.</li>
                <li>Updated our logo.</li>
            </ul>
            <br />
            {/* coming soon */}
            <h3>-- Coming Soon --</h3>
            <ul style={{listStyle: "inside", marginLeft: "10px"}}>
                <li>Lyrics for supported songs.</li>
                <li style={listOptions.notGoingToBeAdded}>Option to embed song to HTML.</li>
                <li>Option to like songs.</li>
            </ul>
            <br />
            {/* ending */}
            <h3>Thanks for using our app ❤</h3>
        </div>
        <button type="button" className='btn-danger' onClick={() => {
          navigate("/")
        }}>Go Back</button>
    </div>
  )
}

export default Updates
