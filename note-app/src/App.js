import './App.css';
import Header from './components/Header/Header'
import NoteList from './components/Note/NoteList'
import Search from './components/Search/Search'
import {nanoid} from 'nanoid'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {reloadNote} from './redux/actions'


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const oldNotes = JSON.parse(localStorage.getItem('react-app-note-data'))
        if (oldNotes){
            console.log(oldNotes)
            dispatch(reloadNote(oldNotes))
        }
    }, [])
    const datas = useSelector(state => state.noteList)
    console.log(datas)
    useEffect(() => {
        console.log('Chay vao day')
        localStorage.setItem('react-app-note-data', JSON.stringify(datas))
        }, [datas])

    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='App'>
                <Header handleDarkMode={setDarkMode}/>
                <Search/>
                <NoteList />
            </div>
        </div>
    )
}
export default App;
