import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Header, Post } from './components'
import './home.css'

const Home = () => {
    const [user,setUser]=useState({data:{},isLoading:true})

    useEffect(()=>{
        axios.post('http://localhost:8000/users',{id:'suman'})
        .then(res=>{
            setUser({data:res.data,isLoading:false});
        })
    },[])

    return (
        <div className='container1'>
            <Header/>
            {
                user.isLoading?
                <center>
                    <img 
                        src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" 
                        style={{width:'5rem',height:'5rem'}} 
                        alt="loading" 
                    />
                </center>:
                <Post user={user.data}/>

            }
        </div>
    )
}

export default Home