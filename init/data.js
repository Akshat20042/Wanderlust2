const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      disc:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      img:{
        url: "https://images.unsplash.com/photo-1720544422609-70a7ff1a3ac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
        filename: "demo"
      },
      
      price: 1500,
      loc: "Malibu",
      ctry: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      disc:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      img:{
        filename: "demo",
        url: "https://images.unsplash.com/photo-1720692393334-c2301df7e0c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"},
      
      price: 1200,
      loc: "New York City",
      ctry: "United States",
    },
    {
      title: "Mountain Retreat",
      disc:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      img:{
        filename: "demo",
        url: "https://images.unsplash.com/photo-1720697022909-a7eead3d9eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"},
      
      price: 1000,
      loc: "Aspen",
      ctry: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      disc:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      img:{
        filename: "demo",
        url: "https://images.unsplash.com/photo-1719856985083-dd1abdb21990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 2500,
      loc: "Florence",
      ctry: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      disc:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720143029515-139f2e68905c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 800,
      loc: "Portland",
      ctry: "United States",
    },
    {
      title: "Beachfront Paradise",
      disc:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719596882743-0cbdb296a65c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 2000,
      loc: "Cancun",
      ctry: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      disc:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1682001370529-878ec33a474f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 900,
      loc: "Lake Tahoe",
      ctry: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      disc:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719856981183-8e2bd3a76bf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 3500,
      loc: "Los Angeles",
      ctry: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      disc:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719856985084-0a2391fef461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 3000,
      loc: "Verbier",
      ctry: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      disc:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719856980495-f8058210e006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 4000,
      loc: "Serengeti National Park",
      ctry: "Tanzania",
    },
    {
      title: "Historic Canal House",
      disc:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719917227086-851efb1eb6b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 1800,
      loc: "Amsterdam",
      ctry: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      disc:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719658414203-83fdaf1bdb33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 10000,
      loc: "Fiji",
      ctry: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      disc:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720247524001-46a6ec33c60b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 1200,
      loc: "Cotswolds",
      ctry: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      disc:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720247521887-e9b8a5f6842a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 2200,
      loc: "Boston",
      ctry: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      disc:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720246120552-f6c874f995ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 1800,
      loc: "Bali",
      ctry: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      disc:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720126860309-f4d0220c3b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 1500,
      loc: "Banff",
      ctry: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      disc:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720246184277-ff441a806e49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 1600,
      loc: "Miami",
      ctry: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      disc:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720116761658-36d649168871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 3000,
      loc: "Phuket",
      ctry: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      disc:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720122974798-25b3ac334ee4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 4000,
      loc: "Scottish Highlands",
      ctry: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      disc:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719922326745-0ba9484d02e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 5000,
      loc: "Dubai",
      ctry: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      disc:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719900626418-1f1e41acc853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 1100,
      loc: "Montana",
      ctry: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      disc:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1720067413281-328fdb9a381f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 2500,
      loc: "Mykonos",
      ctry: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      disc:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719922327837-71b82ca0a086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 750,
      loc: "Costa Rica",
      ctry: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      disc:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719913030647-bfc2a9c36d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      
      price: 1600,
      loc: "Charleston",
      ctry: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      disc:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      img: {
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719835835004-67685f0c802e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},

      price: 2000,
      loc: "Tokyo",
      ctry: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      disc:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719835588960-88d90f9f66c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      price: 1200,
      loc: "New Hampshire",
      ctry: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      disc:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1491738726357-683388052ea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D"},
      price: 6000,
      loc: "Maldives",
      ctry: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      disc:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1718358810029-5394de14abe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      price: 4000,
      loc: "Aspen",
      ctry: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      disc:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      img:{
        filename: "demo",
        url:"https://images.unsplash.com/photo-1719800053351-959620fca955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
      price: 1800,
      loc: "Costa Rica",
      ctry: "Costa Rica",
    },
  ];
  
module.exports = { data: sampleListings  };     // passed as object