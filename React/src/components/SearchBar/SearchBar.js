import React, { useContext, useState, useEffect } from 'react'
//The component that should display the results. (Currently not being used 1/1/2021 1:26 pm CT)
import SearchResults from '../../routes/SearchResults/SearchResults'

/*The Sevice file from which the "users" JSON which carries the names to 
display as search results and allow the user to click to go to the selected user's profile. 
*/
import PostsApiService from '../../services/PostsApiService'
import './SearchBar.css'
//This is the third party library component that handles the search functionality and displays the results. 
import { useCombobox } from 'downshift'
//MDBCol is the searchbar wrapper. It is styled in the css file.
import { MDBCol } from "mdbreact";


const SearchBar = (props) => {

    const [search, setSearch] = useState('')
    const [inputItems, setInputItems] = useState([])
    const [friends, setFriends] = useState([])

    const [searching, setSearching] = useState(false)

    useEffect(() => {
        const dummyData = PostsApiService.getDummyData()
        console.log(dummyData)
        setFriends(dummyData)
    }, [])


    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({ inputValue }) => {
            setInputItems(
                friends.filter(friend =>
                    friend.name.toLowerCase().startsWith(inputValue.toLowerCase()),
                ),
            )
        },
    })

    const toggleSearching = () => {
        setSearching(true);
    }

    return (


        <div className="search-bar-and-results">
            <MDBCol md="6">
                <div className="active-pink-3 active-pink-4 mb-4" {...getComboboxProps()}>
                    <input onChange={() => toggleSearching()} className="form-control" type="text" placeholder="Search" {...getInputProps()} />
                </div>
            </MDBCol>

            {/*This is the results (Unless SearchResults component can be integrated in"*/}
            {searching ? <ul className="search-results"{...getMenuProps()}>
                {isOpen &&
                    inputItems.map((item, index) => (
                        <li className="search-result-item"
                            style={
                                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
                            }
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                            {item.name}
                        </li>

                    ))}
            </ul> : <ul className="search-results-hidden"{...getMenuProps()}>
                    {isOpen &&
                        inputItems.map((item, index) => (
                            <li className="search-result-item"
                                style={
                                    highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
                                }
                                key={`${item}${index}`}
                                {...getItemProps({ item, index })}
                            >
                                {item.name}
                            </li>

                        ))}
                </ul>}

        </div>
    )



    //Button for the code above
    {/* <button
                        type="button"
                        {...getToggleButtonProps()}
                        aria-label={'toggle menu'}
                    >
                        &#8595;
                     </button> */}

    // const updateSearch = (event) => {
    //     setSearch(event.target.value.substr(0, 20).toLowerCase())
    // }


    // console.log(friends)

    // Filter through the friends list to find the name that includes letter that the user starts typing
    // let filteredFriends = friends.filter(
    //     (friend) => {
    //         return friend.name.toLowerCase().indexOf(search) !== -1;
    //     }
    // )


    // return (
    //     <div className="search-bar-and-results">
    //         <form className="form-inline my-2 my-lg-0">
    //             <input value={search} onChange={ev => updateSearch(ev)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //         </form>
    //         <ul {...getMenuProps()}>
    //             {
    //                 isOpen && inputItems.map((item, index) => {
    //                     <span key={item.id} {...getItemProps({ item, index })} onClick={() => setSearch(item.name)}>
    //                         <li style={highlightedIndex === index ? { background: "#ede" } : {}}>
    //                             <h4>{item.name}</h4>
    //                         </li>
    //                     </span>
    //                 })
    //             }
    //         </ul>
    //         <SearchResults filteredFriends={filteredFriends} />
    //     </div>
    // )
}

export default SearchBar
