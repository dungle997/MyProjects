import LoadAtm from '../LoadingAtm/LoadAtm'
import './DndAtm.scss'
import {useState, useEffect, useRef} from 'react'
import {DeleteFilled, UserOutlined} from '@ant-design/icons'
import {Typography} from 'antd'
import {deleteAtm} from '../../redux/loadAtmSlice'
import {useDispatch} from 'react-redux'

function DndAtm({listAtm}) { 
    const {Text, Title} =  Typography
    const [list, setList] = useState(listAtm)
    useEffect(()=>{
        setList(listAtm)
    }, [listAtm])
    const dragItem = useRef();
    const dragOverItem = useRef();


    const dragStart = (e, position) => {
        dragItem.current = position;
     
        // console.log(e.target.innerHTML);
    };
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    //    console.log(dragOverItem)
        // console.log(e.target.innerHTML);
    };
    const drop = (e) => {
        const copyListItems = [...list];
       
        const dragItemContent = copyListItems[dragItem.current];
        
        copyListItems.splice(dragItem.current, 1);
       
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };
    const dispatch = useDispatch() 
    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteAtm(id))
    }
    return ( 
        <>
            {list && list.map((atm, index) => {
                // console.log(atm)
                return(
                    <div className="atm"
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        onDragOver={(e) => e.preventDefault()}
                        draggable
                        key={atm.id}
                    >
                        <div className="atm__button--delete" onClick={()=> handleDelete(atm.id)}>
                            <DeleteFilled />
                        </div>
                        <div className="atm__image">
                            <div style={{fontSize: "80px"}}>
                                <UserOutlined />
                            </div>
                        </div>
                        <div className="atm__status">
                            <Title level={2} style={{color: "pink"}}>{atm.status}</Title>
                        </div>
                        <div className="atm__name">
                            <Title level={3}>{atm.name}</Title>
                        </div>
                        <div className="atm__username">
                            <Title level={5}>{atm.client}</Title>
                        </div>
                        
                    </div>
                )
            })}
        </>
    );
}



export default DndAtm;

     