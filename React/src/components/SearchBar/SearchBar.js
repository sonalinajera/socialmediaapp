import React, { useContext, useState, useEffect } from 'react';
import SearchResults from '../../routes/SearchResults/SearchResults';
/*The Sevice file from which the "users" JSON which carries the firstNames to 
display as search results and allow the user to click to go to the selected user's profile. 
*/
import PostsApiService from '../../services/PostsApiService';
import './SearchBar.css';
//Do NOT delete the next line. "M" is necessary for using materialize css.
import M from "materialize-css";
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import config from '../../config';
import { useHistory } from "react-router-dom";

const SearchBar = (props) => {
    //friends is an array of user objects that the current user needs to search for their friends.
    const [friends, setFriends] = useState([]);
    const [search, setSearch] = useState('');


    //router props history to change the URI.
    let history = useHistory();

    //populate the friends in the state as soon as the component renders.
    useEffect(() => {
        getAllUser();
    }, [])


    //getAllUsers
    const getAllUser = () => {
        axios.get(`${config.API_ENDPOINT}/api/getAllUsers`)
            .then((res) => {
                if (res) {
                    setFriends(res.data);
                }
            })
    }




    //Autocomplete is a component from a 3rd party library called 'react-autocomplete'.
    return (
        <section className="search-bar-and-results">
            <Autocomplete
                getItemValue={(item) => item.firstName + ' ' + item.lastName}
                items={friends}
                shouldItemRender={(item, search) => item.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1
                    || item.lastName.toLowerCase().indexOf(search.toLowerCase()) !== -1}

                renderItem={(item, isHighlighted) =>
                    <div key={item.userId} style={{ background: isHighlighted ? 'lightgray' : 'orange' }}>
                        {/*This is where we grab the item's(friend's) id to redirect to that friend's page*/}
                        <span onClick={() => {
                            console.log(item)
                            //set the url to route to the selected user's profile.
                            history.push(`/user/profile/${item.userId}`)
                        }}>{item.firstName} {item.lastName}</span>
                    </div>
                }
                inputProps={{ placeholder: "Find your friends" }}
                value={search}
                onChange={(e) => setSearch(e.target.value.substr(0, 20).toLowerCase())}
                onSelect={(value) => {
                    setSearch(value)
                    console.log(value)

                }}
            />
        </section>
    )
}
export default SearchBar

