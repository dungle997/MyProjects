import './Search.css'
import {MdSearch} from 'react-icons/md'
import {useDispatch} from 'react-redux'
import {updateSearch} from '../../redux/actions'
function Search({handleSearch}){
    const dispatch = useDispatch()
    const handleOnChange = (e) => {
        dispatch(updateSearch(e.target.value))
    }
    return (
        <div className="search">
            <MdSearch size='1.4em'/>
            <input 
                className="search-input"
                placeholder="Search for your notes ......"
                onChange={handleOnChange}
            />
                


            
        </div>
    )
}

export default Search