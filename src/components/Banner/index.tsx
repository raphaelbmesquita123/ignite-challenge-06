import { Flex, Image, Text } from '@chakra-ui/react'

export default function Banner() {
    return (
        <Flex
            display='flex'
            justifyContent={['center', 'space-around']}
            alignItems='center'
            position="relative"
            bg='orange'
            h="370px"
            backgroundImage='./Background.svg'
            backgroundRepeat='norepeat'
            backgroundPosition='center'
            backgroundSize='cover'
            p='1rem'
            >
                <Flex
                    display='flex'
                    flexDirection='column'
                    p='1rem'>
                    

                    <Text
                        fontSize={['20px', '2rem']}
                        fontWeight='500'
                        lineHeight={['30px','54px']}
                        color='gray.100'
                        >
                        5 Continentes,
                        infinitas possibilidades.
                    </Text>

                    <Text
                        fontSize={['14px','20px']}
                        lineHeight={['21px', '30px']}
                        marginTop='0.5rem'
                        color='gray.100'
                        >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                    </Text>
                </Flex>

                <Image 
                    display={['none', 'none','block']}
                    src="./Airplane.png" 
                    alt="worldtrip" 
                    marginTop='120px'
                >
            </Image>
        </Flex>
    )
}
