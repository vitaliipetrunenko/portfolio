
import React from 'react';
import * as axios from 'axios';
import styl from './PeoplePage.module.css';


function PeoplePage1(props) {

   



    console.log(props.users);
    if (props.users.length ===0){
        /*props.setUsers(
            [
                { id: 0, followed: true,name: "Oleg 1", avatar: null },
                { id: 1, followed: true,name: "Oleg 2", avatar: null },
                { id: 2, followed: false,name: "Oleg 3", avatar: null },
                { id: 3, followed: true,name: "Oleg 4", avatar: null }
            ]
        )*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            props.setUsers(response.data.items);
            alert(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        })
    }
    
  
    return (
        <div className={styl.PeoplePage}>
           

            {props.users.map( el => <div>
                <div> {el.name} </div>
                {el.followed 
                ? <button onClick={()=>{props.unfollow(el.id)}}>Unfollow</button>
                 : <button onClick={()=>{props.follow(el.id)}}>Follow</button>
                 }

              </div>  
            )}
            
            
            


        </div>
        
    );
}
class PeoplePage extends React.Component {

   


    componentDidMount(){
        console.log("did")

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
            console.log(response.data.items)

        })
       /* this.props.setUsers(
            [
                { id: 0, followed: true,name: "Oleg 1", avatar: null },
                { id: 1, followed: true,name: "Oleg 2", avatar: null },
                { id: 2, followed: false,name: "Oleg 3", avatar: null },
                { id: 3, followed: true,name: "Oleg 4", avatar: null }
            ]
        )*/
    }

    onPageChange = (pageIndex) => {
        this.props.setPage(pageIndex);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageIndex}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            console.log(response.data.items)
        })
    }

    render(){

        let pagesCount= Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i);
        }

        return <div className={styl.PeoplePage}>
            <div className={styl.PageSelectWrap}>
                {pages.map(p =>{

                    return <span onClick={(e)=>{ this.onPageChange(p)}} className={this.props.currentPage === p && styl.selectedPage}>{p}</span>
                })}
            </div>
           

            {this.props.users.map( el => <div>
                <div> {el.name} </div>
                {el.followed 
                ? <button onClick={()=>{this.props.unfollow(el.id)}}>Unfollow</button>
                 : <button onClick={()=>{this.props.follow(el.id)}}>Follow</button>
                 }

              </div>  
            )}
            
            
            


        </div>
        
                }




    


}

export default PeoplePage;