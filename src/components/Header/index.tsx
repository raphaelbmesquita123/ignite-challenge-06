import { Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
    return (
        <Flex
            as='header'
            w="100%"
            h='100px'
            bg='white'>
                <Link href='/'>
                    <Image 
                        src="./Logo.svg" 
                        alt="worldtrip" 
                        margin='auto auto'
                        h='50%'
                        cursor='pointer'
                        />
                </Link>
        </Flex>
    )
}
