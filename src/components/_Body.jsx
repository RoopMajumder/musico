import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg"
import Trending from './_Trending';
// import { FaSearch } from 'react-icons/fa'

const Body = () => {
    const [query, setQuery] = useState("");
    const searchRef = useRef('')
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
    className='bodyDiv'
    >
        {/* <button className="btn" onClick={() => setDarkTheme(!darkTheme)}></button> */}
        
        {/* <form onSubmit={(e) => e.preventDefault()} className='inputgroup'>
            <div className="inside">
                <label htmlFor="#sni" id='snl'>Enter song name: </label>
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
        </form> */}
        <form className="search" style={{display: 'flex', justifyContent: "center", alignItems: "center", gap: "5px", width: "98%"}} onSubmit={(e) => {
            e.preventDefault()
            if(searchRef.current.value==null||searchRef.current.value===null||searchRef.current.value==""||searchRef.current.value==="") {
                alert("Enter a valid name!")
                return;
            }
            setQuery(searchRef.current.value);
            navigate("/search/"+searchRef.current.value)
            }}>
            {/* <img src={logo} height={50} width={50} style={{marginRight: "20px"}} alt="" /> */}
            <label htmlFor="#s" id='lsr'>Search: </label>
            <input type="text" placeholder='Search...' ref={searchRef} id='s' onChange={(e) => {searchRef.current.value = e.target.value}}/>
            <button type='submit' className='btn' id='srb'>Search</button>
            <button type='submit' className='btn-icon' id='sirb'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg></button>
        </form>
        <div className="ts">
            <h2 style={{marginBottom: "10px"}}>Top #5</h2>
            <Trending />
        </div>
        <button type="button" className='btn' onClick={() => {
                navigate("/updates")
        }}>Updates</button>
    </div>
  )
}

// export 
export default Body
