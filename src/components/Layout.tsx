import React from 'react'
import Sidebar from './Sidebar'



const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='d-flex flex-md-row flex-column  ' style={{ height: '100vh' }}>
            <div className='col-md-2 col-12 border rounded '>
                <Sidebar />
            </div>
            <main className='col-md-10 col-12'>
                {children}
            </main>
        </div >
    )
}

export default Layout