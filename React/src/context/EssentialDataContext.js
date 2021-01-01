import React, { Component } from 'react';

const EssentialDataContext = React.createContext({
    friendsList: [],
    setSearchFriends: () => { },
})
export default EssentialDataContext

export class EssentialDataProvider extends Component {
    state = {
        friendsList: []
    }

    setSearchFriends = friendsList => {
        this.setState({ friendsList })
    }

    render() {
        const value = {
            friendsList: this.state.friendsList,
            setSearchFriends: this.setSearchFriends
        }

        return (
            <EssentialDataContext.Provider value={value}>
                {this.props.children}
            </EssentialDataContext.Provider>
        )
    }
}