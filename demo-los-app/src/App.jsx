import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Driver from './Driver'

function App(params) {
    return <>
    <Routes>
        <Route path='/' element={<Driver journey={'prospect'} />} />
        <Route path='/index.html' element={<Driver journey={'prospect'} />} />
        <Route path='/fr-fr'>
            <Route path='charge-cards/apply/personal/:productSlug' element={<Driver journey={'prospect'} />}/>
        </Route>
    </Routes>
    </>
}

export default App;