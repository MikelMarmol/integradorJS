const productsData = [
    {
      id: 1,
      name: "Camiseta Titular Año 1989",
      bid: 30000,
      info: "Prenda Original",
      category: "futbol",
      cardImg: "imagenesCami/titular1989.png",
    },
    {
      id: 2,
      name: "Camiseta Suplente Año 1992",
      bid: 30000,
      info: "Prenda Original",
      category: "futbol",
      cardImg: "imagenesCami/suplente1992.png",
    },
    {
      id: 3,
      name: "Camiseta Titular Año 1994",
      bid: 28000,
      info: "Prenda Original",
      category: "futbol",
      cardImg: "imagenesCami/titular1994.png",
    },
    {
      id: 4,
      name: "Camiseta Suplente Año 1996",
      bid: 28000,
      info: "Prenda Original",
      category: "futbol",
      cardImg: "imagenesCami/suplente1996.png",
    },
    {
      id: 5,
      name: "Camiseta Titular Año 1998",
      bid: 28000,
      info: "Prenda Original",
      category: "futbol",
      cardImg: "imagenesCami/titular1998.png",
    },
    {
      id: 6,
      name: "Camiseta Suplente Año 1999",
      bid: 29000,
      info: "Prenda Original",
      category: "futbol",
      cardImg: "imagenesCami/suplente1999.png",
    },
    {
      id: 7,
      name: "Camiseta Alternativa Año 1999",
      bid: 29000,
      info: "Prenda Original",
      category: "futbol",
      cardImg: "imagenesCami/alternativa1999.png",
    },
    {
      id: 8,
      name: "Camiseta Titular Año 2000",
      bid: 26000,
      info: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/titular2000.png",
    },
    {
      id: 9,
      name: "Camiseta Suplente Año 2000",
      bid: 26000,
      info: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/suplente2000.png",
    },
    {
      id: 10,
      name: "Camiseta Alternativa Año 2000",
      bid: 26000,
      info: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/alternativagris2000.png",
    },
    {
      id: 11,
      name: "Camistea Alternativa Año 2000",
      bid: 26000,
      info: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/alternativaazul2000.png",
    },
    {
      id: 12,
      name: "Camiseta Alternativa Año 2001",
      bid: 26000,
      info: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/alternativanegra2001.png",
    },
    {
      id: 13,
      name: "Camiseta Titular Año 2003",
      bid: 25000,
      info: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/titular2003.png",
    },
    {
      id: 14,
      name: "Camiseta Alternativa Año 2005",
      bid: 23000,
      info: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/alternativa2005.png",
    },
    {
      id: 15,
      name: "Camiseta Titular Año 2006",
      bid: 23000,
      user: "Prenda Original",
      category: "musica",
      cardImg: "imagenesCami/titular2006.png",
    },
    {
        id: 16,
        name: "Camiseta Suplente Año 2008",
        bid: 21000,
        user: "Prenda Original",
        category: "peliculas",
        cardImg: "imagenesCami/suplente2008.png",
      },
      {
        id: 17,
        name: "Camiseta Titular Año 2011",
        bid: 20000,
        info: "Prenda Original",
        category: "peliculas",
        cardImg: "imagenesCami/titular2011.png",
      },
      {
        id: 18,
        name: "Camiseta Suplente Año 2011",
        bid: 20000,
        info: "Prenda Original",
        category: "peliculas",
        cardImg: "imagenesCami/suplente2011.png",
      },
      {
        id: 19,
        name: "Camiseta Alternativa Año 2011",
        bid: 20000,
        info: "Prenda Original",
        category: "peliculas",
        cardImg: "imagenesCami/alternativa2011.png",
      },
      {
        id: 20,
        name: "Camiseta Suplente Año 2013",
        bid: 19000,
        info: "Prenda Original",
        category: "autos",
        cardImg: "imagenesCami/suplente2013.png",
      },
      {
        id: 21,
        name: "Camiseta Alternativa Año 2013",
        bid: 19000,
        info: "Prenda Original",
        category: "autos",
        cardImg: "imagenesCami/alternativa2013.png",
      },
      {
        id: 22,
        name: "Camiseta Suplente Año 2014",
        bid: 19000,
        info: "Prenda Original",
        category: "autos",
        cardImg: "imagenesCami/suplente2014.png",
      },
      {
        id: 23,
        name: "Camiseta Titular Año 2015",
        bid: 18500,
        info: "Prenda Original",
        category: "autos",
        cardImg: "imagenesCami/titular2015.png",
      },
      {
        id: 24,
        name: "Camiseta Suplente Año 2015",
        bid: 18500,
        info: "Prenda Original",
        category: "autos",
        cardImg: "imagenesCami/suplente2015.png",
      },
      {
        id: 25,
        name: "Camiseta Titular Año 2016",
        bid: 18000,
        info: "Prenda Original",
        category: "politicos",
        cardImg: "imagenesCami/titular2016.png",
      },
      {
        id: 26,
        name: "Camiseta Suplente Año 2016",
        bid: 18000,
        info: "Prenda Original",
        category: "politicos",
        cardImg: "imagenesCami/suplente2016.png",
      },
  ];
  
  //función para dividir los productos en arrays de "size" productos
  const divideProductsInParts = (size) => {
    let productsList = [];
    for (let i = 0; i < productsData.length; i += size)
      productsList.push(productsData.slice(i, i + size))
    return productsList;
  };
  
  //el concepto de ESTADO
  const appState = {
    products: divideProductsInParts(6), 
    currentProductsIndex: 0, 
    productsLimit: divideProductsInParts(6).length,
    activeFilter: null
  };