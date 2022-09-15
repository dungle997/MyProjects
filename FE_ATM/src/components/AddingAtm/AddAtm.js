import {UserOutlined} from '@ant-design/icons' 
import {Input, Button} from 'antd'
import './AddAtm.scss'
import {useState} from 'react'
import {addDatasAtm} from '../../redux/loadAtmSlice'
import {useDispatch} from 'react-redux'
import headerSlice from '../../redux/headerSlice'
function AddAtm() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const handleOnchange = (e) => {
        setInput(e.target.value)
    }
    const handleCreate = (e) => {
        dispatch(addDatasAtm(input))
        dispatch(headerSlice.actions.statusAddAtm(false))
        setInput('')
    }
    const handleCancel = () => {
        dispatch(headerSlice.actions.statusAddAtm(false))
        setInput('')
    }
    return (   
       
            <div className="atm atm--border">
                <div className="atm__add--header">
                    {/* <div className="atm__button--delete" onClick={handleDelete}>
                        <DeleteFilled />
                    </div> */}
                    <div className="atm__image">
                        <div style={{fontSize: "80px"}}>
                            <UserOutlined />
                        </div>
                    </div>
                    <Input placeholder="ATM name" onChange={handleOnchange} value={input}/>  
                </div>    
                <div className="atm__add--footer">
                    <div className="atm__button--cancel">
                        <Button 
                            primary="default" 
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                    <div className="atm__button--create">
                        <Button 
                            primary="default"
                            onClick = {handleCreate}
                        >
                            Create
                        </Button>
                    </div>
                </div>

            </div>
       
        )
}

export default AddAtm
;