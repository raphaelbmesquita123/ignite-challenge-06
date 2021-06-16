import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'

export default function CityBox ({image, cityName, country, flag}) {
    return (
        <Box
            w='256px'
            h='279px'
            bg='gray.100'
            m='2rem'
            position='relative'
        >
            <Box
                w='100%'
                h='150px'
                backgroundImage={image}
                backgroundRepeat='norepeat'
                backgroundPosition='center'
                backgroundSize='cover'
            />
            <Text
                marginLeft='1rem'
                marginTop='1rem'
                fontWeight='bold'
                fontSize='1.2rem'
            >
                {cityName}
            </Text>
            <Text
                marginLeft='1rem'

            >
                {country}
            </Text>
            <Box
                position='absolute'
                w='40px'
                h='20px'
                right='1rem'
                bottom='1rem'
                backgroundImage={flag}
                backgroundRepeat='norepeat'
                backgroundPosition='center'
                backgroundSize='cover'
            />
            
        </Box>
    )
}
