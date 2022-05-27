import React, { useState } from 'react'
import axios from 'axios'

const Model2 = ({popupList,setIsPopup}) => {
    const [isAlert,setIsAlert]=useState(false) 

    const setRecord=(r)=>{
        axios.post('http://localhost:8000/report',{report:r,pId:''})
        .then(()=>{
            setIsAlert(true)
            setIsPopup(false)
        })
    }
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body list2">
                        {
                            popupList.map(item=>{
                                return(
                                    <div key={item.id} onClick={()=>{
                                            setRecord(item.id)
                                        }
                                    } className='modal-header' data-bs-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#exampleModalCenter">{item.title}</div>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
            {
                isAlert&&
                <div className='alert'>
                    <img src="https://www.clipartmax.com/png/full/62-624281_check-circle-ring-correct-right-mark-character-check-mark-icon-png.png" alt="..." />
                    <div>Thanks for letting us know</div>
                    <div>Your feedback is important in helping us keep the Instagram community safe.</div>
                    <button onClick={()=>setIsAlert(false)} id='close'>Close</button>
                </div>
            }
        </>
    )
}

export default Model2