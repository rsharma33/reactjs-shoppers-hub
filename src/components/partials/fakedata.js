import { siteConfig } from '../../config';

function abcd(){
  let prodlist = [];
  fetch(siteConfig.prodData)
  .then(results => {
    return results.json();
  }).then(data => {
    prodlist.push(data);
  });
  return prodlist;
}
const ItemList1 = abcd();

/* =========================
  Static data for testing
========================= */
const ItemList2 = [
  {
    "prod_id": "5cec25e933fc3a4ed7e94ee0",
    "prod_name": "Stevens",
    "guid": "e8150ba7-6f90-4b4b-9241-7db0fefbcace",
    "prod_incart": false,
    "prod_category": "Furniture",
    "prod_price": 802,
    "prod_reviews": 207,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Furniture",
      "medium": "http://placehold.it/900x500?text=Furniture",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990522/Furniture/Furniture/medium/Furniture_15.jpg"
    },
    "prod_rating": 3,
    "prod_color": "green",
    "prod_shortdesc": "ut laboris est Lorem voluptate...",
    "prod_longdesc": "magna nisi veniam labore qui ullamco est nulla tempor commodo culpa consectetur dolore non amet cillum veniam exercitation non ad"
  },
  {
    "prod_id": "5cec25e93760b0a09ef4260b",
    "prod_name": "Jordan",
    "guid": "3d0f708c-1bcb-467c-9566-223fec22d016",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 488,
    "prod_reviews": 292,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_2.jpg"
    },
    "prod_rating": 2,
    "prod_color": "blue",
    "prod_shortdesc": "adipisicing voluptate minim incididunt et...",
    "prod_longdesc": "eiusmod aliquip laboris et officia amet eu non enim mollit proident anim sint id deserunt excepteur nisi cupidatat dolor velit"
  },
  {
    "prod_id": "5cec25e99f215b3986ec89ab",
    "prod_name": "Flynn",
    "guid": "f77e09d5-bc8c-4a03-bf22-168d26d767ee",
    "prod_incart": false,
    "prod_category": "Clothing",
    "prod_price": 1855,
    "prod_reviews": 148,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Clothing",
      "medium": "http://placehold.it/900x500?text=Clothing",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990412/Clothing/Clothing/medium/Dresses_17.jpg"
    },
    "prod_rating": 5,
    "prod_color": "blue",
    "prod_shortdesc": "officia ullamco nulla mollit anim...",
    "prod_longdesc": "laboris proident commodo culpa et deserunt ut voluptate ut ex in eu quis id consequat eiusmod deserunt amet occaecat excepteur"
  },
  {
    "prod_id": "5cec25e99bc1a93d2e5638f1",
    "prod_name": "Teresa",
    "guid": "2728d6a4-5f53-42d8-b2cf-09062aa273d4",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 1521,
    "prod_reviews": 211,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_3.jpg"
    },
    "prod_rating": 4,
    "prod_color": "green",
    "prod_shortdesc": "nulla adipisicing excepteur laborum minim...",
    "prod_longdesc": "id eu dolore eu proident ullamco anim adipisicing reprehenderit duis sunt quis ipsum irure incididunt tempor minim veniam ad labore"
  },
  {
    "prod_id": "5cec25e9195940f2ca7d0e15",
    "prod_name": "Mayo",
    "guid": "e339b056-e171-4fb5-8c31-48e31cabbe47",
    "prod_incart": false,
    "prod_category": "Furniture",
    "prod_price": 1527,
    "prod_reviews": 486,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Furniture",
      "medium": "http://placehold.it/900x500?text=Furniture",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990522/Furniture/Furniture/medium/Furniture_15.jpg"
    },
    "prod_rating": 1,
    "prod_color": "blue",
    "prod_shortdesc": "ea cillum adipisicing incididunt dolore...",
    "prod_longdesc": "aliquip ullamco cillum enim aliquip adipisicing magna adipisicing laborum aliquip proident commodo ipsum irure esse cupidatat voluptate consequat ullamco exercitation"
  },
  {
    "prod_id": "5cec25e99fe58baa4bba7fe3",
    "prod_name": "Leanna",
    "guid": "7bb7c095-d0d0-4ea8-af45-58207884b580",
    "prod_incart": false,
    "prod_category": "Furniture",
    "prod_price": 418,
    "prod_reviews": 98,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Furniture",
      "medium": "http://placehold.it/900x500?text=Furniture",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990522/Furniture/Furniture/medium/Furniture_5.jpg"
    },
    "prod_rating": 2,
    "prod_color": "blue",
    "prod_shortdesc": "excepteur id nisi ea ut...",
    "prod_longdesc": "eu ad consectetur voluptate fugiat et veniam reprehenderit dolor fugiat culpa et dolor quis magna ad velit sunt est reprehenderit"
  },
  {
    "prod_id": "5cec25e905e82113fb7e3765",
    "prod_name": "Gray",
    "guid": "e8e175f5-53df-43ad-a8f0-c51a6eb6b4be",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 1675,
    "prod_reviews": 262,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_7.jpg"
    },
    "prod_rating": 1,
    "prod_color": "green",
    "prod_shortdesc": "nulla laborum nulla laboris proident...",
    "prod_longdesc": "officia Lorem eiusmod in labore occaecat esse commodo eu non esse ad ad pariatur tempor pariatur anim fugiat aliquip amet"
  },
  {
    "prod_id": "5cec25e940bf8285b3b6da7c",
    "prod_name": "Houston",
    "guid": "33649c9d-7032-4b38-9528-16db70a5f9ed",
    "prod_incart": false,
    "prod_category": "Furniture",
    "prod_price": 262,
    "prod_reviews": 347,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Furniture",
      "medium": "http://placehold.it/900x500?text=Furniture",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990522/Furniture/Furniture/medium/Furniture_13.jpg"
    },
    "prod_rating": 2,
    "prod_color": "green",
    "prod_shortdesc": "commodo irure labore sint dolor...",
    "prod_longdesc": "consequat irure eu minim dolor voluptate sit sit occaecat ea ea ipsum adipisicing elit labore quis cupidatat officia voluptate eu"
  },
  {
    "prod_id": "5cec25e90572c709aab3ac59",
    "prod_name": "Stacy",
    "guid": "f74c87f7-cc81-4224-9e93-3070303dd8d3",
    "prod_incart": false,
    "prod_category": "Clothing",
    "prod_price": 284,
    "prod_reviews": 456,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Clothing",
      "medium": "http://placehold.it/900x500?text=Clothing",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990412/Clothing/Clothing/medium/Dresses_9.jpg"
    },
    "prod_rating": 3,
    "prod_color": "blue",
    "prod_shortdesc": "veniam aute nisi ipsum duis...",
    "prod_longdesc": "amet labore duis aliquip ut reprehenderit occaecat est sint nostrud labore mollit amet sit adipisicing minim mollit enim excepteur adipisicing"
  },
  {
    "prod_id": "5cec25e918f40dddf242b48b",
    "prod_name": "Conley",
    "guid": "371c494a-a76d-4aec-a7bd-21e259f4a53d",
    "prod_incart": false,
    "prod_category": "Furniture",
    "prod_price": 304,
    "prod_reviews": 75,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Furniture",
      "medium": "http://placehold.it/900x500?text=Furniture",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990522/Furniture/Furniture/medium/Furniture_5.jpg"
    },
    "prod_rating": 1,
    "prod_color": "blue",
    "prod_shortdesc": "sint velit deserunt eu qui...",
    "prod_longdesc": "adipisicing anim cillum id anim mollit cillum consequat nostrud dolore incididunt culpa ea cupidatat nostrud occaecat nostrud sunt cillum reprehenderit"
  },
  {
    "prod_id": "5cec25e9f74441c61b9726e5",
    "prod_name": "Maude",
    "guid": "bccb938e-6ed2-4560-87ed-ba099466cf45",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 484,
    "prod_reviews": 450,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_6.jpg"
    },
    "prod_rating": 5,
    "prod_color": "brown",
    "prod_shortdesc": "non exercitation deserunt irure eu...",
    "prod_longdesc": "proident excepteur minim ea ut et aliqua eiusmod ut velit id non commodo nostrud cupidatat labore exercitation laboris aliqua est"
  },
  {
    "prod_id": "5cec25e9a15295ca15233da8",
    "prod_name": "Marci",
    "guid": "41146442-0f1c-44f8-9785-e07a916a8b7d",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 1937,
    "prod_reviews": 301,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_5.jpg"
    },
    "prod_rating": 4,
    "prod_color": "blue",
    "prod_shortdesc": "duis ullamco enim enim duis...",
    "prod_longdesc": "fugiat anim sunt velit aliqua nisi ad laboris ad adipisicing dolore do do qui reprehenderit nisi enim do eiusmod pariatur"
  },
  {
    "prod_id": "5cec25e954429e005d0ca404",
    "prod_name": "Delaney",
    "guid": "e6956a98-00a2-4b40-886e-56d5601fa0ba",
    "prod_incart": false,
    "prod_category": "Furniture",
    "prod_price": 1616,
    "prod_reviews": 324,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Furniture",
      "medium": "http://placehold.it/900x500?text=Furniture",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990522/Furniture/Furniture/medium/Furniture_6.jpg"
    },
    "prod_rating": 2,
    "prod_color": "blue",
    "prod_shortdesc": "aute occaecat in veniam reprehenderit...",
    "prod_longdesc": "mollit Lorem qui reprehenderit occaecat minim fugiat dolor proident labore enim ipsum velit culpa ullamco consectetur tempor amet ea anim"
  },
  {
    "prod_id": "5cec25e913c13891ab89d58d",
    "prod_name": "Selena",
    "guid": "72c10cc3-0c01-49fd-958f-abe4d15ac0ad",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 973,
    "prod_reviews": 221,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_2.jpg"
    },
    "prod_rating": 1,
    "prod_color": "blue",
    "prod_shortdesc": "ut ex cillum proident amet...",
    "prod_longdesc": "ullamco fugiat proident adipisicing fugiat reprehenderit esse officia anim laborum amet sunt dolor mollit reprehenderit quis occaecat reprehenderit tempor enim"
  },
  {
    "prod_id": "5cec25e9880bf360517a704e",
    "prod_name": "Mcdonald",
    "guid": "e7d20811-0d1c-4563-b12a-5eb6894f0799",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 434,
    "prod_reviews": 5,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_3.jpg"
    },
    "prod_rating": 5,
    "prod_color": "green",
    "prod_shortdesc": "qui commodo cupidatat est duis...",
    "prod_longdesc": "proident irure enim deserunt culpa culpa enim consectetur eiusmod ea dolor quis quis laborum laboris aliquip velit dolore deserunt laboris"
  },
  {
    "prod_id": "5cec25e921b1cc9e8663878a",
    "prod_name": "Joan",
    "guid": "95e50d75-35b3-4c8b-a328-5bddfd1b359d",
    "prod_incart": false,
    "prod_category": "Clothing",
    "prod_price": 385,
    "prod_reviews": 13,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Clothing",
      "medium": "http://placehold.it/900x500?text=Clothing",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990412/Clothing/Clothing/medium/Dresses_5.jpg"
    },
    "prod_rating": 1,
    "prod_color": "green",
    "prod_shortdesc": "adipisicing veniam nostrud anim est...",
    "prod_longdesc": "veniam do irure sit officia occaecat sunt ut aliqua fugiat sint velit magna incididunt officia proident pariatur culpa Lorem anim"
  },
  {
    "prod_id": "5cec25e95016d47530982d69",
    "prod_name": "Luz",
    "guid": "17afecb6-1155-487d-b70f-b25f68d1c621",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 1668,
    "prod_reviews": 188,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_1.jpg"
    },
    "prod_rating": 3,
    "prod_color": "blue",
    "prod_shortdesc": "ad eu amet ex elit...",
    "prod_longdesc": "magna sint culpa fugiat labore ex fugiat Lorem culpa excepteur esse non nisi aute proident magna magna velit enim nisi"
  },
  {
    "prod_id": "5cec25e98820172adee6fd4a",
    "prod_name": "Humphrey",
    "guid": "da03a76b-2ee8-4e63-8ea4-a335baf9425e",
    "prod_incart": false,
    "prod_category": "Clothing",
    "prod_price": 1814,
    "prod_reviews": 334,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Clothing",
      "medium": "http://placehold.it/900x500?text=Clothing",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990412/Clothing/Clothing/medium/Dresses_2.jpg"
    },
    "prod_rating": 5,
    "prod_color": "green",
    "prod_shortdesc": "excepteur cillum magna quis nostrud...",
    "prod_longdesc": "ut proident dolore id magna eu aute minim officia irure minim nostrud aliquip non ex do esse deserunt reprehenderit laboris"
  },
  {
    "prod_id": "5cec25e94f9081e955a1d510",
    "prod_name": "Celeste",
    "guid": "6ca6eea5-e1ee-4de5-9b43-fb921f8f3cd4",
    "prod_incart": false,
    "prod_category": "Shoes",
    "prod_price": 339,
    "prod_reviews": 387,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Shoes",
      "medium": "http://placehold.it/900x500?text=Shoes",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990596/Shoes/Shoes/medium/Shoes_9.jpg"
    },
    "prod_rating": 5,
    "prod_color": "green",
    "prod_shortdesc": "elit minim sint culpa voluptate...",
    "prod_longdesc": "non incididunt commodo tempor eu proident excepteur excepteur esse voluptate culpa consequat ea sunt reprehenderit do id ad officia ea"
  },
  {
    "prod_id": "5cec25e937c3e6649e855d94",
    "prod_name": "Mccullough",
    "guid": "cffb3caa-3d9a-4c57-a0bd-8012074e2cd1",
    "prod_incart": false,
    "prod_category": "Furniture",
    "prod_price": 1815,
    "prod_reviews": 213,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Furniture",
      "medium": "http://placehold.it/900x500?text=Furniture",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990522/Furniture/Furniture/medium/Furniture_1.jpg"
    },
    "prod_rating": 4,
    "prod_color": "brown",
    "prod_shortdesc": "laboris dolor amet irure incididunt...",
    "prod_longdesc": "sit laborum nostrud incididunt sint amet Lorem deserunt labore nulla voluptate exercitation laborum esse adipisicing et reprehenderit enim enim velit"
  },
  {
    "prod_id": "5cec25e9b41fd05295002803",
    "prod_name": "Hobbs",
    "guid": "655c4771-d716-4f7d-b8df-0f532a66ffb7",
    "prod_incart": false,
    "prod_category": "Clothing",
    "prod_price": 892,
    "prod_reviews": 16,
    "prod_image": {
      "large": "http://placehold.it/900x500?text=Clothing",
      "medium": "http://placehold.it/900x500?text=Clothing",
      "small": "https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990412/Clothing/Clothing/medium/Dresses_12.jpg"
    },
    "prod_rating": 5,
    "prod_color": "brown",
    "prod_shortdesc": "aliqua irure minim consectetur tempor...",
    "prod_longdesc": "velit mollit pariatur magna consequat nisi minim ullamco velit ad aliqua elit nostrud irure ut velit aute magna aliquip est"
  }
];


export { ItemList1, ItemList2 };
