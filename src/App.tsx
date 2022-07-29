import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './Pages/Dashboard'
import { Box } from '@chakra-ui/react'
import Profile from './Pages/Profile'

function App() {
    return (
        <Box
            h="100vh"
            w={'100%'}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Sidebar />
            <Box bg="whitesmoke" w="80%" h="100%">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Box>
        </Box>
    )
}

export default App
