const data = [
    {
      id:1,
      src:'bicicleta-ruta-1',
      alt:'Bicicleta Ruta',
      name:'Bicicleta Ruta',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:3000,
      category:'Ruta'
    },
    {
      id:2,
      src:'bicicleta-ruta-2',
      alt:'Bicicleta Ruta',
      name:'Bicicleta Ruta',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:3200,
      category:'Ruta'
    },
    {
      id:3,
      src:'bicicleta-ruta-3',
      alt:'Bicicleta Ruta',
      name:'Bicicleta Ruta',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:2900,
      category:'Ruta'
    },
    {
      id:4,
      src:'bicicleta-ruta-4',
      alt:'Bicicleta Ruta',
      name:'Bicicleta Ruta',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:3100,
      category:'Ruta'
    },
    {
      id:5,
      src:'bicicleta-ruta-5',
      alt:'Bicicleta Ruta',
      name:'Bicicleta Ruta',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:3400,
      category:'Ruta'
    },
    {
      id:6,
      src:'bicicleta-mtb-1',
      alt:'Bicicleta MTB',
      name:'Bicicleta MTB',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:2000,
      category:'MTB'
    },
    {
      id:7,
      src:'bicicleta-mtb-2',
      alt:'Bicicleta MTB',
      name:'Bicicleta MTB',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:2200,
      category:'MTB'
    },
    {
      id:8,
      src:'bicicleta-mtb-3',
      alt:'Bicicleta MTB',
      name:'Bicicleta MTB',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:2400,
      category:'MTB'
    },
    {
      id:9,
      src:'bicicleta-mtb-4',
      alt:'Bicicleta MTB',
      name:'Bicicleta MTB',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:2500,
      category:'MTB'
    },
    {
      id:10,
      src:'bicicleta-mtb-5',
      alt:'Bicicleta MTB',
      name:'Bicicleta MTB',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:2800,
      category:'MTB'
    },
    {
      id:11,
      src:'asiento-1',
      alt:'asiento',
      name:'Asiento',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:100,
      category:'Repuestos'
    },
    {
      id:12,
      src:'asiento-2',
      alt:'asiento',
      name:'Asiento',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:130,
      category:'Repuestos'
    },
    {
      id:13,
      src:'asiento-3',
      alt:'asiento',
      name:'Asiento',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:160,
      category:'Repuestos'
    },
    {
      id:14,
      src:'freno-1',
      alt:'freno',
      name:'Freno',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:300,
      category:'Repuestos'
    },
    {
      id:15,
      src:'freno-2',
      alt:'freno',
      name:'Freno',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:350,
      category:'Repuestos'
    },
    {
      id:16,
      src:'freno-3',
      alt:'freno',
      name:'Freno',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:390,
      category:'Repuestos'
    },
    {
      id:17,
      src:'bolso-1',
      alt:'bolso',
      name:'Bolso-1',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:390,
      category:'Accesorios'
    },
    {
      id:18,
      src:'bolso-2',
      alt:'bolso',
      name:'Bolso-2',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:390,
      category:'Accesorios'
    },
    {
      id:19,
      src:'bolso-3',
      alt:'bolso',
      name:'Bolso-3',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      price:390,
      category:'Accesorios'
    }
  ]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 1000)
    })
}