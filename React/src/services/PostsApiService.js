//This is the api service file for handling users' posts (functions, not storage)
//Storage is going to be handled by REDUX
//Below is dummy data for user accounts.

const myDummyData = [

    {
        id: 2,
        firstName: 'Corbin',
        lastName: 'Creedon'
    },
    {
        id: 1,
        firstName: 'Orkun',
        lastName: 'Ozekin'
    },

    {
        id: 3,
        firstName: 'Sonali',
        lastName: 'Najera'
    },

    {
        id: 4,
        firstName: 'Cody',
        lastName: 'Moody'
    },

    {
        id: 5,
        firstName: 'Tim',
        lastName: 'Hammes'
    }
]


const PostsApiService = {
    getDummyData: () => {
        return myDummyData
    }
}

export default PostsApiService
