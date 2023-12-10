import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const [query, setQuery] = useState("");
    const link = document.querySelector('link[rel="icon"]');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Musico - Roop Majumder"
        link.setAttribute("type", "image/svg+xml")
        link.setAttribute("href", "/logo.svg")
    }, [])

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()} className='inputgroup'>
            <div className="inside">
                <label htmlFor="#sni" id='snl'>Enter song name: </label>
                <input type="text" id='sni' placeholder='Enter song name...' value={query} onChange={(e) => {setQuery(e.target.value)}}/>
            </div>
            <button type="submit" className='btn' onClick={() => {
                if(query==null||query===null||query==""||query==="") {
                    alert("Enter a valid name!")
                    return;
                }
                navigate("/song/"+query)
                }
            }>Search</button>
        </form>
    </div>
  )
}

export default Body
