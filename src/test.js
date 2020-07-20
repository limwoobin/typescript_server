const items = [
    {
      name: '생수',
      price: 850,
    },
    {
      name: '신라면',
      price: 900,
    },
    {
      name: '포카칩',
      price: 1500,
    },
    {
      name: '새우깡',
      price: 1000,
    },
  ];

  const itemList = (items) => {
      let i = 0;
      items.map((c) => {
          console.log(++i);
          console.log(c);
      })

      console.log('-----------------------------');
      console.log(items);
  }

  itemList(items);