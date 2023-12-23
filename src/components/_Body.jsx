import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg"
// import { FaSearch } from 'react-icons/fa'

const Body = () => {
    const [query, setQuery] = useState("");
    const link = document.querySelector('link[rel="icon"]');
    const navigate = useNavigate();
    // const [darkTheme, setDarkTheme] = useState(false)

    useEffect(() => {
        document.title = "Musico - Roop Majumder"
        link.setAttribute("type", "image/svg+xml")
        link.setAttribute("href", logo)
    }, [])

  return (
    <div
    // style={{position: "relative"}}
    >
        {/* <button className="btn" onClick={() => setDarkTheme(!darkTheme)}></button> */}
        <form onSubmit={(e) => e.preventDefault()} className='inputgroup'>
            <div className="inside">
                <label htmlFor="#sni" id='snl'>Enter song name: </label>
                {/* <FaSearch style={{border: "1px solid #A1A1A1", padding: "100px"}}/> */}
                <input type="text" id='sni' placeholder='Enter song name...' value={query} onChange={(e) => {setQuery(e.target.value)}}/>
            </div>
            <div className="btn-group">
            <button type="submit" className='btn' onClick={() => {
                if(query==null||query===null||query==""||query==="") {
                    alert("Enter a valid name!")
                    return;
                }
                navigate("/search/"+query)
                }
            }>Search</button>
            <button type="button" className='btn' onClick={() => {
                navigate("/updates")
            }}>Updates</button>
            </div>
        </form>
    </div>
  )
}

// export 
export default Body
