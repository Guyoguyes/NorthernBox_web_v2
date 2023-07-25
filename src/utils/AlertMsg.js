import React, {useState} from 'react'
import {Alert, AlertIcon, AlertTitle, AlertDescription,} from '@chakra-ui/react'

const contentStyle = {
    maxWidth: "600px",
    width: "90%"
};

function AlertMsg({title, icon,  message, status}){
    return(
        <Alert
            status={status}
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                {title}
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export default AlertMsg;