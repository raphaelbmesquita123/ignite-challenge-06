import { Box, Image, Text } from '@chakra-ui/react'

interface iconTravelTypesProps {
    img: string
    alt: string
    text:string
}

export default function IconTravelTypes({img, alt, text}: iconTravelTypesProps) {
    return (
        <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        p='1rem'>
            <Image 
                src={img}
                alt={alt}
                />
            <Text>
                {text}
            </Text>
        </Box>
    )
}
