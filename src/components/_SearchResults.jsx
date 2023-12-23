import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SearchResults = () => {
    const { q } = useParams()
    const searchRef = useRef(null)
    const [searchData, setSearchData] = useState([])
    const [searchText, setSearchText] = useState(q)
    const navigate = useNavigate()

    let api = `https://saavn.me/search/songs?query=${searchText}`
    const getSearchResults = async () => {
        let response = await fetch(api)
        let data = await response.json()
        // console.log(data)
        setSearchData(data.data.results)
        // fetchSong(songData?.downloadUrl[songData?.downloadUrl?.length - 1]?.link)
        // console.log(searchData)
    }

    useEffect(() => {
        getSearchResults()
        searchRef.current.value = q
    }, [searchText])
  return (
    <div className='searchPage'>
        <form className="search" onSubmit={(e) => {
            e.preventDefault()
            setSearchText(searchRef.current.value); 
            navigate("/search/"+searchRef.current.value)
            }}>
            <label htmlFor="#s" id='lsr'>Search: </label>
            <input type="text" ref={searchRef} id='s' onChange={(e) => {searchRef.current.value = e.target.value}}/>
            <button type='submit' className='btn' id='srb'>Search</button>
            <button type='submit' className='btn-icon' id='sirb'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg></button>
        </form>
        <div className="searchResults">
            {searchData?searchData?.map((song, key) => {
                return <Link to={"/id/"+song.id} style={{textDecoration: "none", color: "black"}} key={key}>
                    <div className="searchQuerySongDiv">
                        <img src={song?.image[song?.image?.length - 1]?.link} alt="" className="img" width={50}/>
                        <div className="info">
                            <h3 dangerouslySetInnerHTML={{__html: song?.name}}></h3>
                            <h4 dangerouslySetInnerHTML={{__html: song?.primaryArtists}}></h4>
                        </div>
                    </div>
                </Link>
            }):<></>}
        </div>
        <button className='btn-danger'onClick={() => {
            navigate("/")
        }}>Go Back</button>
    </div>
  )
}

export default SearchResults
