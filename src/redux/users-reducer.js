// INITIAL STATE
let initialState = {
    users: [
    /*
        {
            id: 1,
            photo: `${usericon}`,
            name: "John Doyle",
            intro: "I'm a cool guy",
            followed: 1,
            location: {
                country: "United Kingdom",
                city: "London"
            }
        }, {
            id: 2,
            photo: `${usericon}`,
            name: "Mark Wimbledon",
            intro: "Business man",
            followed: 1,
            location: {
                country: "USA",
                city: "Maiami"
            }
        }, {
            id: 3,
            photo: `${usericon}`,
            name: "Andrea Nuki",
            intro: "Hi guys!",
            followed: 0,
            location: {
                country: "USA",
                city: "Maiami"
            }
        }, {
            id: 4,
            photo: `${usericon}`,
            name: "Buka Nuka",
            intro: "Hi guys!",
            followed: 0,
            location: {
                country: "USA",
                city: "Maiami"
            }
        }, {
            id: 5,
            photo: `${usericon}`,
            name: "ALina Dukale",
            intro: "Ladybird",
            followed: 1,
            location: {
                country: "USA",
                city: "Maiami"
            }
        }, {
            id: 6,
            photo: `${usericon}`,
            name: "Mika Tukani",
            intro: "Firefly",
            followed: 0,
            location: {
                country: "United Kingdom",
                city: "Colcester"
            }
        }, {
            id: 7,
            photo: `${usericon}`,
            name: "Bulek Mukin",
            intro: "Hi guys!",
            followed: 1,
            location: {
                country: "Nothern Ireland",
                city: "Belfast"
            }
        }, {
            id: 8,
            photo: `${usericon}`,
            name: "Kila Moore",
            intro: "Hi guys!",
            followed: 0,
            location: {
                country: "USA",
                city: "Maiami"
            }
        }, {
            id: 9,
            photo: `${usericon}`,
            name: "Victoria Mline",
            intro: "Hi guys!",
            followed: 0,
            location: {
                country: "USA",
                city: "Maiami"
            }
        }, {
            id: 10,
            photo: `${usericon}`,
            name: "Diana Opin",
            intro: "Ladybird",
            followed: 1,
            location: {
                country: "USA",
                city: "Maiami"
            }
        }, {
            id: 11,
            photo: `${usericon}`,
            name: "Lowrence Folk",
            intro: "Firefly",
            followed: 0,
            location: {
                country: "United Kingdom",
                city: "Colcester"
            }
        }, {
            id: 12,
            photo: `${usericon}`,
            name: "Liuba Binki",
            intro: "Hi guys!",
            followed: 1,
            location: {
                country: "Nothern Ireland",
                city: "Belfast"
            }
        }*/
    ],
    pageSize: 20,
    totalUsersCount: 50,    
    currentPage: 1,
    isFetching: true
};
const LOAD_USERS = 'LOAD_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

// REDUCER
const usersReducer = (state = initialState, action) => {
   
    switch(action.type){
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userID) {                        
                        return {...u, followed: 1};
                    }
                    return u;
                })
            }
        }        
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userID) {                        
                        return {...u, followed: 0};
                    }
                    return u;
                })
            }
        }
        case LOAD_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.number
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default: 
            return state;
    }
}

export default usersReducer;

// ACTION CREATORS
export const loadUsers_AC = (users) => ({type: LOAD_USERS, users});
export const follow_AC = (userID) => ({type: FOLLOW, userID});
export const unfollow_AC = (userID) => ({type: UNFOLLOW, userID});
export const setPage_AC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount_AC = (number) => ({type: SET_TOTAL_USERS_COUNT, number});
export const setFetching_AC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});