import './LoadAtm.scss'
import {DeleteFilled, UserOutlined} from '@ant-design/icons'
import {Typography} from 'antd'
import {deleteAtm} from '../../redux/loadAtmSlice'
import {useDispatch} from 'react-redux'
import {useState, useEffect, useRef} from 'react'


const {Text, Title} =  Typography
function LoadAtm({listAtm,setList, atmName, userName, status, id, index}) {
    // console.log('listAtm', listAtm)
    // console.log(setList)
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        dispatch(deleteAtm(id))
    }
    // console.log('listAtm',listAtm)
    const dragItem = useRef();
    const dragOverItem = useRef();
    

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log('dragItem = ',dragItem)
        console.log(e.target.innerHTML);
      };
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log('dragOverItem = ',dragOverItem)
        // console.log(e.target.innerHTML);
      };
      const drop = (e) => {
        const copyListItems = [...listAtm];
        console.log('mang moi', copyListItems)
        const dragItemContent = copyListItems[dragItem.current];
        console.log('dragItemContent la thang dc chon = ',dragItemContent)
        copyListItems.splice(dragItem.current, 1);
        console.log('copyListItems sau khi xoa thang dc chon = ',copyListItems)
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        console.log('copyListItems sau them thang dc chon vao vi tri thang bi thay the = ',copyListItems)
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
      };

    return (   
        <div className="atm"
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()}
            draggable
        >
            <div className="atm__button--delete" onClick={handleDelete}>
                <DeleteFilled />
            </div>
            <div className="atm__image">
                <div style={{fontSize: "80px"}}>
                    <UserOutlined />
                </div>
            </div>
            <div className="atm__status">
                <Title level={2} style={{color: "pink"}}>{status}</Title>
            </div>
            <div className="atm__name">
                <Title level={3}>{atmName}</Title>
            </div>
            <div className="atm__username">
                <Title level={5}>{userName}</Title>
            </div>
            
        </div>
    )
}

export default LoadAtm;