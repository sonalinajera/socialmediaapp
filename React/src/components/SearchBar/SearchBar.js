import React, { useContext, useState, useEffect } from 'react'
import SearchResults from '../../routes/SearchResults/SearchResults'

/*The Sevice file from which the "users" JSON which carries the firstNames to 
display as search results and allow the user to click to go to the selected user's profile. 
*/
import PostsApiService from '../../services/PostsApiService'
import './SearchBar.css'
import { Autocomplete } from 'react-materialize'
import M from "materialize-css"
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


const SearchBar = (props) => {


    const [friends, setFriends] = useState([])

    useEffect(() => {
        const dummyData = PostsApiService.getDummyData()
        console.log(dummyData)
        setFriends(dummyData)
    }, [])




    return (
        <div className="search-bar-and-results">
            <Autocomplete
                id="Autocomplete-1"
                options={{
                    data: {
                        "orkunn": null
                    },
                    onAutocomplete: () => console.log("This is where we redirect to the clicked friend's profile")
                }}
                placeholder="Search"
            />
        </div>
    )
}

export default SearchBar


/////////KEEP THIS HERE IN CASE WE WANNA SWITCH BACK TO VANILLA


//const [searching, setSearching] = useState(false)
// const [search, setSearch] = useState('')

//display the results when searching, hide them afterwards.
//  const toggleSearching = (ev) => {
//     if (ev.target.value.length) {
//         setSearching(true)
//     }
//     else {
//         setSearching(false)
//     }
// }

// //Get user's input and store that in the "search" property in the state
// const updateSearch = (event) => {
//     setSearch(event.target.value.substr(0, 20).toLowerCase())
// }

// //Display only the results whose letters are included within the searched word(user's input)
// let filteredFriends = friends.filter(
//     (friend) => {
//         return friend.firstName.toLowerCase().indexOf(search) !== -1;
//     }
// )


{/* <input value={search} className="form-control" type="text" placeholder="Search" onChange={(ev) => {
                    updateSearch(ev) 
                    toggleSearching(ev)
                }} /> */}
                // {!searching ? '' : <SearchResults filteredFriends={filteredFriends} />}