import React from 'react'
import { Flex } from '@chakra-ui/react'
import DashInfo from '../components/DashInfo'
import { Room } from '../components/Room'

const Dashboard = () => {
    return (
        <Flex h={'100%'}>
            <DashInfo />
            <Room />
        </Flex>
    )
}

export default Dashboard
