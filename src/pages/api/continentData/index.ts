import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {

  const continentData = [
    {
      id: 1,
      continent: 'America do Norte',
      banner: 'https://images.unsplash.com/photo-1434828927397-62ea053f7a35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia a officia eveniet doloribus, tempora odio ab ea, saepe reiciendis veniam repellat iusto iste cupiditate id at debitis itaque nulla!',
      info: {
        countries:50,
        languages: 60,
        cities: 27
      },
      cities:[
        {
          cityName: 'Vancouver',
          photo: 'https://lp-cms-production.imgix.net/2021-04/GettyRF_612004360.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1',
          country: 'Canada',
          flag: 'https://icons.iconarchive.com/icons/wikipedia/flags/128/CA-Canada-Flag-icon.png'
        },
        {
          cityName: 'Cidade do Mexico',
          photo: 'https://spguia.melhoresdestinos.com.br/system/fotos_local/fotos/29066/show/museo-del-palacio-de-bellas-artes.jpg',
          country: 'Mexico',
          flag: 'https://cdn.countryflags.com/thumbs/mexico/flag-400.png'
        }
      ]
  },
  {
    id: 2,
    continent: 'America do Sul',
    banner: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia a officia eveniet doloribus, tempora odio ab ea, saepe reiciendis veniam repellat iusto iste cupiditate id at debitis itaque nulla!',
    info: {
      countries:50,
      languages: 60,
      cities: 27
    },
    cities:[
      {
        cityName: 'Rio de Janeiro',
        photo: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        country: 'Brasil',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1080px-Flag_of_Brazil.svg.png'
      },
      {
        cityName: 'Bueno Aires',
        photo: 'https://images.unsplash.com/photo-1589909634237-717751180967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        country: 'Argentina',
        flag: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.countryflags.com%2Fthumbs%2Fargentina%2Fflag-round-250.png&imgrefurl=https%3A%2F%2Fwww.countryflags.com%2Fargentina-flag-icon%2F&tbnid=w4tFPM7NA_ZKjM&vet=12ahUKEwjs4oGf95zxAhWOR8AKHRTaB1MQMygAegUIARDGAQ..i&docid=HTlKQAnQl-_IRM&w=250&h=250&q=argentina%20flag%20icon&ved=2ahUKEwjs4oGf95zxAhWOR8AKHRTaB1MQMygAegUIARDGAQ'
      }
    ]

  },
  {
    id: 3,
    continent: 'Asia',
    banner: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia a officia eveniet doloribus, tempora odio ab ea, saepe reiciendis veniam repellat iusto iste cupiditate id at debitis itaque nulla!',
    info: {
      countries:50,
      languages: 60,
      cities: 27
    },
    cities:[
      {
        cityName: 'Xangai',
        photo: 'https://images.unsplash.com/photo-1501621185719-221c3312e3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        country: 'China',
        flag: 'https://cdn.icon-icons.com/icons2/107/PNG/512/china_18230.png'
      },
      {
        cityName: 'Pequim',
        photo: 'https://images.unsplash.com/photo-1566455121867-a59951c0bfda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        country: 'China',
        flag: 'https://cdn.icon-icons.com/icons2/107/PNG/512/china_18230.png'
      }
    ]

  },
  {
    id: 4,
    continent: '??frica',
    banner: 'https://images.unsplash.com/photo-1605499420107-6e77e7146168?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia a officia eveniet doloribus, tempora odio ab ea, saepe reiciendis veniam repellat iusto iste cupiditate id at debitis itaque nulla!',
    info: {
      countries:50,
      languages: 60,
      cities: 27
    },
    cities:[
      {
        cityName: 'Cidade do Cabo',
        photo: 'https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80',
        country: 'Africa',
        flag: 'https://cdn.countryflags.com/thumbs/south-africa/flag-400.png'
      },
      {
        cityName: 'Pretoria',
        photo: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
        country: 'Africa',
        flag: 'https://cdn.countryflags.com/thumbs/south-africa/flag-400.png'
      }
    ]

  },
  {
      id: 5,
      continent: 'Europe',
      banner: 'https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      text: 'A Europa ??, por conven????o, um dos seis continentes do mundo. Compreendendo a pen??nsula ocidental da Eur??sia, a Europa geralmente divide-se da ??sia a leste pela divis??ria de ??guas dos montes Urais, o rio Ural, o mar C??spio, o C??ucaso, e o mar Negro a sudeste',
      info: {
        countries:50,
        languages: 60,
        cities: 27
      },
      cities:[
        {
          cityName: 'Londres',
          photo: 'https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
          country: 'Reino Unido',
          flag: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F13%2FUnited-kingdom_flag_icon_round.svg%2F2048px-United-kingdom_flag_icon_round.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnited-kingdom_flag_icon_round.svg&tbnid=4hOxcTEWn8H8tM&vet=12ahUKEwiUv-ib8ZzxAhV6TBUIHSGHDDsQMygAegUIARC4AQ..i&docid=mPzcXBI5BpRRDM&w=2048&h=2048&q=reino%20unido%20flag%20icon&ved=2ahUKEwiUv-ib8ZzxAhV6TBUIHSGHDDsQMygAegUIARC4AQ'
        },
        {
          cityName: 'Paris',
          photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80',
          country: 'Fran??a',
          flag: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ficon-library.com%2Fimages%2Ffrance-icon%2Ffrance-icon-19.jpg&imgrefurl=https%3A%2F%2Ficon-library.com%2Ficon%2Ffrance-icon-19.html&tbnid=XSUslek5sDgpsM&vet=12ahUKEwiL7O7E8ZzxAhVHXBUIHWZfC5MQMygHegUIARDZAQ..i&docid=VFliOfhE1CIbBM&w=512&h=512&q=fraca%20flag%20icon%20vector&ved=2ahUKEwiL7O7E8ZzxAhVHXBUIHWZfC5MQMygHegUIARDZAQ'
        },
        {
          name: 'Roma',
          photo: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          country: 'Italia',
          flag: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.countryflags.com%2Fthumbs%2Fitaly%2Fflag-round-250.png&imgrefurl=https%3A%2F%2Fwww.countryflags.com%2Fitaly-flag-vector%2F&tbnid=OMiiABqliUYIKM&vet=12ahUKEwiazZ_a8ZzxAhXRGcAKHVrrC3sQMygBegUIARDPAQ..i&docid=W9Qt3z3o1CKewM&w=250&h=250&q=italy%20flag%20icon%20vector&ved=2ahUKEwiazZ_a8ZzxAhXRGcAKHVrrC3sQMygBegUIARDPAQ'
        },
        {
          name: 'Praga',
          photo: 'https://images.unsplash.com/photo-1562624475-96c2bc08fab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          country: 'Republica Tcheca',
          flag: 'https://cdn.countryflags.com/thumbs/czech-republic/flag-400.png'
        },
        {
          name: 'Amsterd??',
          photo: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          country: 'Holnada',
          flag: 'https://cdn.countryflags.com/thumbs/netherlands/flag-400.png'
        }
      ]
  },
  {
    id: 6,
    continent: 'Oceania',
    banner: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia a officia eveniet doloribus, tempora odio ab ea, saepe reiciendis veniam repellat iusto iste cupiditate id at debitis itaque nulla!',
    info: {
      countries:50,
      languages: 60,
      cities: 27
    },
    cities:[
      {
        cityName: 'Sydney',
        photo: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        country: 'Austr??lia',
        flag: 'https://cdn.icon-icons.com/icons2/1531/PNG/512/3253495-australia-icon-flag_106771.png'
      },
    ]

  },
]
  return response.json(continentData)
}
