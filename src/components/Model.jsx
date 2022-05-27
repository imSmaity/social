import React from 'react'
import './style/model.css';

const Model = ({list,popup,setIsPopup}) => {
    const {setPopupList}=popup
  return (
        <>
            <table className='list'>
                <tbody>
                {
                    list.map(item=>{

                        return(
                            <tr key={item.id} onClick={()=>{
                                    setPopupList(item.list)
                                    setIsPopup(false)
                                }
                            } data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <td style={{color:item.color}}>{item.title}</td>
                            </tr>
                        )

                    })
                }
                </tbody>
            </table>
        </>
    ) 
}

export default Model