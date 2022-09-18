import './DefaultLayout.scss'
// import Header from '../common/Header'

function DefaultLayout( {children} ) {
    return (  
        <div className="default">
            {/* <Header /> */}
            <div className="container">
                <div className='content'>
                        {children}
                </div>
            </div>              
        </div>
    );
}

export default DefaultLayout;