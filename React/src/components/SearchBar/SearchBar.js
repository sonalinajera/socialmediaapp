import React, { useContext, useState, useEffect } from 'react'
import SearchResults from '../../routes/SearchResults/SearchResults'

/*The Sevice file from which the "users" JSON which carries the firstNames to 
display as search results and allow the user to click to go to the selected user's profile. 
*/
import PostsApiService from '../../services/PostsApiService'
import './SearchBar.css'



const SearchBar = (props) => {

    const [search, setSearch] = useState('')
    const [friends, setFriends] = useState([])
    const [searching, setSearching] = useState(false)


    useEffect(() => {
        const dummyData = PostsApiService.getDummyData()
        console.log(dummyData)
        setFriends(dummyData)
    }, [])


    //display the results when searching, hide them afterwards.
    const toggleSearching = (ev) => {
        if (ev.target.value.length) {
            setSearching(true)
        }
        else {
            setSearching(false)
        }
    }

    //Get user's input and store that in the "search" property in the state
    const updateSearch = (event) => {
        setSearch(event.target.value.substr(0, 20).toLowerCase())
    }

    //Display only the results whose letters are included within the searched word(user's input)
    let filteredFriends = friends.filter(
        (friend) => {
            return friend.firstName.toLowerCase().indexOf(search) !== -1;
        }
    )


    return (
        <>

            <div className="search-bar-and-results">

                <input value={search} className="form-control" type="text" placeholder="Search" onChange={(ev) => {
                    updateSearch(ev)
                    toggleSearching(ev)
                }} />
                {!searching ? '' : <SearchResults filteredFriends={filteredFriends} />}
            </div>

        </>
    )


}

export default SearchBar
