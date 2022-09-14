import {Fragment} from 'react'
import {Button} from 'antd'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from './routes'
import DefaultLayout from './components/Layout/DefaultLayout'
import MainPage from './components/pages/MainPage'
import Login from './components/pages/Login'

function App() {
    const loggedIn = false
    return (
        <Router>
             <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout
                        if (route.layout){
                            Layout = route.layout
                        } else if (route.layout === null){
                            Layout = Fragment
                        }
                
                        const Page = route.component
                        return  <Route 
                                    key={index} 
                                    path={route.path} 
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                    })}
                </Routes>
             </div>
        </Router>
    
    )
}
export default App;
