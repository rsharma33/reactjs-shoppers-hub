const siteConfig = {
  siteName: 'Shoppers Hub',
  baseUrl: window.location.origin.toString(),
  prodData: 'https://next.json-generator.com/api/json/get/4k0GfGS3I',
  categElement: [
    { 'name': 'Clothing', 'url': '/category/clothing'},
    { 'name': 'Shoes', 'url': '/category/shoes'},
    { 'name': 'Furniture', 'url': '/category/furniture'}
  ],
  tempLargeImages: [
    'https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990412/Clothing/Clothing/Dresses_9_xypolk.jpg',
    'https://res.cloudinary.com/mycloudshoppershub/image/upload/v1557990412/Clothing/Clothing/Dresses_8_y0nljp.jpg'
  ],
};

const siteNav = [
  { 'name': 'Home', 'url': '/', 'target':'_self'},
  { 'name': 'About', 'url': '/about', 'target':'_self'}
];

export { siteConfig, siteNav }
