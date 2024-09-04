const sampleListings = [
  {
     title: "Hotel Tanarika",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
       filename: "listingimage",
       url: "https://res.cloudinary.com/dagf9db1e/image/upload/v1725361167/wanderlust_DEV/msk6gg8lunntfqca4ixs.avif",
    },
    price: 1500,
    rating:4.8,
    address: "varangaon road",
    location: " Bhusawal",
    phone: 9370848915 ,
    features:["AC","Free WiFi"],
  },
  {
     title: "Hotel Aaditya Palace",
    description:
      "Basic rooms with a/c in a modest budget hotel featuring a vegetarian restaurant",
    image: {
       filename: "listingimage",
       url: "https://res.cloudinary.com/dagf9db1e/image/upload/v1725361290/wanderlust_DEV/czthd7rgb8aawtqfxmkl.avif",
    },
    price: 1760,
    rating:3.7,
    address: "Behind Pandurang TheatreJamner Road, Tulsi Nagar, Bhusawal, Maharashtra 425201",
    location: " Bhusawal",
    phone: 2582226755 ,
  },
  {
     title: "Hotel Premier - Hotel in Saket Society",
    description:
      "Amenities consist of a lobby lounge, meeting space and a vegetarian restaurant. Breakfast, parking and Wi-Fi are available.",
    image: {
       filename: "listingimage",
       url: "https://res.cloudinary.com/dagf9db1e/image/upload/v1725361526/wanderlust_DEV/eocu5jjf10bgju8t1rmp.jpg" ,
    },
    price: 1847,
    rating:3.9,
    address: "Saket Society, Jamner Rd, near Nahata College, Shri Ram Housing Society, Bhusawal, Maharashtra 425201",
    location: " Bhusawal",
    phone: 9325375802,
  },
  {
      title: "Hotel Palkhi",
     description:
       "A relaxed bar/restaurant with exposed-brick walls serves vegetarian and non-vegetarian dishes. There are also indoor and outdoor event spaces..",
     image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dagf9db1e/image/upload/v1725361760/wanderlust_DEV/uxpbsdd641i4ex1bkkib.jpg" ,
     },
     price: 1457,
     rating:3.6,
     address: "No.6, National Highway, , Opp. MIDC Main Gate,, Sundar Nagar, Bhusawal, Maharashtra 425201",
     location: " Bhusawal",
     phone: 9923270224,
   },
   {
      title: "Hotel Jawahar Palace",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dagf9db1e/image/upload/v1725361885/wanderlust_DEV/mv1fsmxknidrdq8kw6ue.avif"  ,
     },
     price: 1987,
     rating:3.8,
     address: "2QQJ+2GG, Jamner Rd, Near Axis Bank, Bhavani Peth, Hanuman Nagar, Bhusawal, Maharashtra 425201",
     location: " bhusawal",
     phone: 258241216,
   },
   {
      title: "Hotel aryaniwas railway station bhusawal",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dagf9db1e/image/upload/v1725362043/wanderlust_DEV/lbaccxqiim4vdqpix3ej.jpg" ,
     },
     price: 1789,
     rating:4.6,
     address: "Modern Rd, aryaniwas, Bhusawal, Maharashtra 425201",
     location: " Bhusawal",
     phone: 4,
   },
   {
      title: "Hotel Radha Krishna",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\radha krishna.webp" ,
     },
     price: 2014,
     rating:4.0,
     address: "Asian Highway, 46, Varangaon Rd, Near Lal jain Mandir, Sakari Phata, Bhusawal, Maharashtra 425201",
     location: " Bhusawal",
     phone:7447407405,
   },
   {
      title: "Paresh Holiday Resort",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images.zip\images\paresh.webp" ,
     },
     price: 2651,
     rating:3.6,
     address: "Nimgaon Bk, Maharashtra 425003",
     location: " Bhusawal",
     phone:3,
   },
   {
      title: "THE FOUR SEASONS RECREATION",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\four.webp" ,
     },
     price: 2666,
     rating:4.3,
     address: "Ajanta Road, Plot No X-20, MIDC Area, Jalgaon, Maharashtra 425003",
     location: " Jalgoan",
     phone:4,
   },
   {
      title: "Hotel Royal Palace",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\ROYAL.webp" ,
     },
     price: 3166,
     rating:3.9,
     address: "43, Mahabal Rd, Jai Nagar, Ramdas Colony, Jalgaon, Maharashtra 425002",
     location: " Jalgoan",
     phone:8275440044,
   },
   {
      title: "Hotel Chandan",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\chandan.webp" ,
     },
     price: 1200,
     rating:4.4,
     address: "215/216, Station Rd, Navi Peth, Jaikisan Wadi, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:4,
   },
   {
      title: "New Hotel Shalimar",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\shalimar.webp" ,
     },
     price: 969,
     rating:3.6,
     address: "Bhaskar Market, M. J. College Road, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:2572233627,
   },
   {
      title: "Hotel Tourist Resort",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\tourist.jpg" ,
     },
     price: 1013,
     rating:3.5,
     address: "2H77+Q9J, Tourist Complex,Nehru Chouk, Station Rd, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:2572222481,
   },
   {
      title: "Hotel Silver Palace",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\silver.webp" ,
     },
     price: 3702,
     rating:4.0,
     address: "Station Rd, Navi Peth, Jaikisan Wadi, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:2572232888,
   },
   {
      title: "Hotel K.P Pride",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\k.p pride.webp" ,
     },
     price: 2851,
     rating:3.9,
     address: "Station Rd, Navi Peth, Jaikisan Wadi, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:2572229378,
   },
   {
      title: "Kaka Recidency",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\kaka.jpg" ,
     },
     price: 900,
     rating:3.7,
     address: "305, near Zilla Parishad, Navi Peth, Chowk, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:2572236397,
   },
   {
      title: "Hotel Minerva",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\minevar.webp" ,
     },
     price: 1668,
     rating:3.9,
     address:"Bus stand, plot no.8,9,11 north of new, Gandhi nagar, near natraj theater, Jilha Peth, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:2572220081,
   },
   {
      title: "Hotel Kewal",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\KEWAL.webp" ,
     },
     price: 1557,
     rating:3.4,
     address:"246, Station Rd, Navi Peth, Jaikisan Wadi, Jalgaon, Maharashtra 425001",
     location: " Jalgoan",
     phone:4,
   },
   {
      title: "The Imperia Residency Hotel",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\IMPERIA.webp" ,
     },
     price: 897,
     rating:3.8,
     address:"Maharashtra, Ayodhya Nagar, Old MIDC, Jalgaon, Maharashtra 425003",
     location: " Jalgoan",
     phone:9168665008,
   },
   {
      title: "Hotel Murli Manohar",
     description:
       "Popular amenities",
     image: {
      filename: "listingimage",
      url: "C:\Users\samruddhi chaudhari\Downloads\wanderlust data.js\images\MURLI.webp" ,
     },
     price: 3999,
     rating:3.8,
     address:"Ajanta chowk, Jalgaon, Maharashtra 425001•",
     location: " Jalgoan",
     phone:25224678,
   },
];

 module.exports = { data: sampleListings };
