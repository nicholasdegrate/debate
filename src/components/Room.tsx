import React from 'react'
import { Box, Button, Flex, Input } from '@chakra-ui/react'

export function Room() {
    return (
        <Flex
            flexDirection={'column'}
            justifyContent={'space-between'}
            bg={'orange'}
            h={'100%'}
            w={'100%'}
            p={'3em'}
        >
            <Box></Box>
            <Flex>
                <Input />
                <Button></Button>
            </Flex>
        </Flex>
    )
}
