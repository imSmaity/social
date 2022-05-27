import React, { useState } from 'react'
import Model from './Model'
import Model2 from './Model2'
import './style/post.css'
import chat from '../assets/chat.png'
import save from '../assets/save.png'
import share from '../assets/share.png'


const popup=[
  {
    id:1,
    title:'Report',
    subTitle:'Why are you reporting this post?',
    color:'red',
    list:[
      {
        id:1,
        title:'It\'s spam',
        subTitle:'',
        color:'black',
        list:[]
      },
      {
        id:2,
        title:'Nudity or sexual activity',
        subTitle:'',
        color:'black',
        list:[]
      },
      {
        id:3,
        title:'Hate speech or symbols',
        subTitle:'',
        color:'black',
        list:[]
      },
      {
        id:4,
        title:'Bullying or harassment',
        subTitle:'',
        color:'black',
        list:[]
      },
      {
        id:5,
        title:'Scam or fraud',
        subTitle:'',
        color:'black',
        list:[]
      }
    ]
  },
  {
    id:2,
    title:'Unfollow',
    subTitle:'',
    list:[],
    color:'red'
  },
  {
    id:3,
    title:'Go to post',
    subTitle:'',
    list:[],
    color:'black'
  },
  {
    id:4,
    title:'Share to...',
    subTitle:'',
    list:[],
    color:'black'
  },
  {
    id:5,
    title:'Copy Link',
    subTitle:'',
    list:[],
    color:'black'
  },
  {
    id:6,
    title:'Embed',
    subTitle:'',
    list:[],
    color:'black'
  },
  {
    id:7,
    title:'Cancel',
    subTitle:'',
    list:[],
    color:'black'
  }
]



const Top=({user})=>{
  const [isPopup,setIsPopup]=useState(false)
  const [popupList,setPopupList]=useState([])

  const popupOpen=()=>{
    setIsPopup(true)
  }
  return(
    <div className='p-top'>
      <div id='ava'>
        <img src={user.avatar} alt="avatar"  id='avatar'/>
      </div>
      <div id='uid'>{user.id}</div>
      <div id='dot' onClick={popupOpen}>...</div>
      {
        isPopup&&
        <div className='popup'>
          <Model list={popup} setIsPopup={setIsPopup}  popup={{popupList,setPopupList}}/>
        </div>
      }
      <Model2 popupList={popupList} setIsPopup={setIsPopup}/>
    </div>
  )
}
const Buttom=()=>{
  return(
    <div className='post-buttom'>
      
      <div id='1'>
        <img  src="https://img.icons8.com/material-outlined/48/000000/filled-like.png" alt='post'/>
      </div>
      <div id='2'>
       <img  src={chat} alt='post'/>
      </div>
      <div id='3'>
       <img  src={share} alt='post'/>
      </div>
      <div id='4'>
       <img  src={save} alt='post'/>
      </div>
    </div>
  )
}

const Post = ({user}) => {
  return (
    <>
      {
        user.posts.map(post=>{
          return(
            <div className='card' key={post.id}> 
              <Top user={user} />
              <img src={post.image} alt="post" id='p-img'/>
              <Buttom/>
            </div>
          )
        })
      }
    </>
  )
}

export default Post