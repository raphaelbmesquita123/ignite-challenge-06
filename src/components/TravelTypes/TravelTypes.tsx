import { Flex, Box, Text } from '@chakra-ui/react'
import IconTravelTypes from './iconTravelTypes'

export default function TravelTypes() {
    return (
        <Box>
            <Flex
                displa='flex'
                justifyContent='space-around'
                flexWrap='wrap'
                w='100%'
                p={['1rem 1rem','5rem 1rem']}
                >
                <IconTravelTypes img='./cocktail1.png' alt='cocktail' text='vida noturna'/>
                <IconTravelTypes img='./surf1.png' alt='surf' text='praia'/>
                <IconTravelTypes img='./building1.png' alt='cocktail' text='moderno'/>
                <IconTravelTypes img='./museum1.png' alt='cocktail' text='clássico'/>
                <IconTravelTypes img='./earth1.png' alt='cocktail' text='e mais...'/>
            </Flex>
            <Text
                margin='auto auto'
                fontSize={[ '1.5rem', '2rem']}
                maxWidth='839px'
                textAlign='center'
                p='1rem 2rem'
            >
                Vamos nessa? Então escolha seu continente
            </Text>
        </Box>
    )
}
