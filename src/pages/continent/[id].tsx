import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { api } from '../../axios/axios'
import { Flex, Box, Text, Stack } from '@chakra-ui/react'
import CityBox from '../../components/CityBox/CityBox'

interface itensProps {
  id: number
  continent: string
  banner: string
  text: string
  info: {
    countries: string,
    languages: string,
    cities: string
  },
  cities: [{
    cityName: string
    photo: string
    country: string
    flag: string
  }]
}

interface continentProps {
  continent: itensProps
}

export default function continent({ continent }: continentProps) {
  console.log(continent)
    return (
      <Flex
        display='flex'
        flexDirection='column'
        >
        <Box 
          position='relative'
          backgroundColor='black'
          w='100%'
          h='500px'
        >
          <Box
            w='100%'
            h='500px'
            backgroundImage={continent.banner}
            backgroundRepeat='norepeat'
            backgroundPosition='center'
            backgroundSize='cover'
            opacity='0.7'
            >
          
          </Box>
            <Text
              position='absolute'
              color='white'
              fontSize={['2rem','3rem']}
              bottom='2rem'
              left='3rem'
              >
              {continent.continent}
            </Text>
        </Box>
        <Flex
          display='flex'
          justifyContent='center'
          alignItems='center'
          maxWidth='1140px'
          flexWrap='wrap'
          margin='0 auto'
          p='2rem'
        >
          <Text
            maxWidth='500px'
            p='1rem'
            textAlign='justify'
          >
            {continent.text}
          </Text>

          <Stack
            display='flex'
            direction='row'
            w='300px'
            spacing='1rem'
            p='1rem'
            justifyContent='center'
            alignItems='center'
          >
            <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='1rem'
            >
                <Text
                  fontSize='2rem'
                  fontWeight='bold'
                  color='orange'
                >{continent.info.countries}</Text>
                <Text
                  fontWeight='bold'
                >países</Text>
            </Box>
            <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='1rem'
            >
                <Text
                  fontSize='2rem'
                  fontWeight='bold'
                  color='orange'
                >{continent.info.languages}</Text>
                <Text
                  fontWeight='bold' 
                >línguas</Text>
            </Box>
            <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            p='1rem'
            >
                <Text
                  fontSize='2rem'
                  fontWeight='bold'
                  color='orange'
                >{continent.info.cities}</Text>
                <Text
                  fontWeight='bold'
                >cidades +100</Text>
            </Box>

          </Stack>


        </Flex>

          <Text
            marginLeft='3rem'
            fontSize='1.5rem'
          >
            Cidades +100
          </Text>
          <Box
            display='flex'
            justifyContent='center'
            w='100%'
            p='2rem'
            flexWrap='wrap'
          >
            {
              continent.cities.map( city => {
                return(
                  <>
                    <CityBox image={city.photo} cityName={city.cityName} country={city.country} flag={city.flag}/>
                  </>
                )
              })
            }
          </Box>
      </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data }  = await api.get(`continentData`)
    
    const paths = data.map((continent) => {
      return {
        params: {
          id: continent.id.toString(),
        },
      }
    })

    return {
      paths,
      fallback: 'blocking',
    }
  }

export const getStaticProps: GetStaticProps = async (ctx) => {
    const id = Number(ctx.params.id) - 1
    const { data: continent } = await api.get(`/continentData/${id}`)
    
    return {
    props: {
      continent
    },
    revalidate: 60 * 60 * 6, // 6 hours
    }
}