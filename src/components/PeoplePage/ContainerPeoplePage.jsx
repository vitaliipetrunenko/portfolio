import React from 'react';
import { connect } from 'react-redux';
import { createActionFOLLOW, createActionSETUSERS, createActionUNFOLLOW, createActionSETPAGE, createActionSETUSERCOUNT} from './../../redux/state.js'
import PeoplePage from './PeoplePage.jsx';


let mapStateToProps = (state)=> {
    return {
        users: state.userData.users,
        totalUsersCount: state.userData.totalUsersCount,
        currentPage: state.userData.currentPage,
        pageSize: state.userData.pageSize
    }
}


let mapDispatchToProps = (dispatch) =>{
    return {
    follow: (userID) =>{
        
    dispatch(createActionFOLLOW(userID))
    },
    unfollow: (userID) =>{
        
        dispatch(createActionUNFOLLOW(userID))
        },
    setUsers: (users) =>{
        dispatch(createActionSETUSERS(users));
    },
    setPage: (pageIndex) =>{
        dispatch(createActionSETPAGE(pageIndex));
    },
    setTotalUserCount: (count) =>{
        dispatch(createActionSETUSERCOUNT(count))
    }
    }
 }
let ContainerPeoplePage = connect(mapStateToProps,mapDispatchToProps)(PeoplePage);

export default ContainerPeoplePage;