import * as path from 'path';
import multer from 'multer';


const categoryStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/upload/category'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("category data pic uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const extname = path.extname(file.originalname);

    const imageName = `cat_${timestamp}${img}`;
    cb(null, imageName);
  }
});

const profileStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/upload/profile'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("Profile pic uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const extname = path.extname(file.originalname);

    const imageName = `profile_${timestamp}${img}`;
    cb(null, imageName);
  }
});

const areaStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/upload/area'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("Area pic uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `area_${timestamp}${img}`;
    cb(null, imageName);
  }
});

const bathroomStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/upload/property'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("Property pic uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `property_${timestamp}${img}`;
    cb(null, imageName);
  }
});


const multiplepropertyStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/upload/property'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("Property pic uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `propertyimg_${timestamp}${img}`;
    cb(null, imageName);
  }
});

const blogUploadsStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/upload/blog'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("Blog pic uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `blog_${timestamp}${img}`;
    cb(null, imageName);
  }
});


// Define storage for uploaded images
const imageStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("imageUpload API Hited");
    const img = file.originalname;
    const timestamp = Date.now();

    const imageName = `img_${timestamp}${img}`;
    cb(null, imageName);
  }
});










const vehicleStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/upload/category'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("category data pic uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const extname = path.extname(file.originalname);

    const imageName = `Vehical_${timestamp}${img}`;
    cb(null, imageName);
  }
});

const invoiceStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/categoryUploads');
  },
  filename: function (req, file, cb) {
    console.log("req.body:", req.body); // Log to see the full body
    console.log("Invoice uploaded");
    const img = file.originalname;
    const booking_id = req.body.booking_id;
    console.log("booking_id in filename function:", booking_id); // Debug line
    const imageName = `BookingInvoice_${img}`;
    cb(null, imageName);
  }
});







const docStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/docUploads'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("deal media uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `doc_${timestamp}${img}`;
    cb(null, imageName);
  }
});


// Create multer instance for image uploads
const imageUpload = multer({ 
  storage: imageStorage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept image files
    } else {
      cb(new Error('File type not allowed. Please upload an image.'), false);
    }
  },
});

// Define storage for general file uploads
const fileStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    console.log("fileUpload API Hited");
    const timestamp = Date.now();
    const extname = path.extname(file.originalname);
    const fileName = `file_${timestamp}${extname}`;
    cb(null, fileName);
  }
});



//--------- user Post storage folder ------------ 

const postStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/post_img_vid'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("Post pics uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const extname = path.extname(file.originalname);

    const imageName = `post_${timestamp}${img}`;
    cb(null, imageName);
  }
});



const thumbnailStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/thumbnail'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("Thumnail  uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `thumbnail_${timestamp}${img}`;
    cb(null, imageName);
  }
});


const folderStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/folders_imgs'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("folder Image uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `ffolder_${timestamp}${img}`;
    cb(null, imageName);
  }
});


const boardStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/board'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("board  uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `board_${timestamp}${img}`;
    cb(null, imageName);
  }
});


const chatStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/chat_img_vid'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("chat media  uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `chat_${timestamp}${img}`;
    cb(null, imageName);
  }
});


const groupchatStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/groupchat'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("groupchat media  uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `chat_${timestamp}${img}`;
    cb(null, imageName);
  }
});


const ticketStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/ticket_img'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("ticket_img  uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `ticket_${timestamp}${img}`;
    cb(null, imageName);
  }
});




const userThreadStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/complains'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("complain img uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `complain_${timestamp}${img}`;
    cb(null, imageName);
  }
});

const countryStorage = multer.diskStorage({  
  destination: function (req, file, cb) {
    cb(null, 'public/images/icons'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    console.log("country img uploaded");
    const img = file.originalname;
    const timestamp = Date.now();
    const imageName = `country_${timestamp}${img}`;
    cb(null, imageName);
  }
});



//------- store with same name as country code for flag
const countryflagStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/icons'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    const countryCode = req.body.country_code;
    const ext = file.originalname.split('.').pop(); // Get the file extension (e.g. 'png')
    const imageName = `${countryCode}.${ext}`;
    cb(null, imageName);
  }
});









// Create multer instance for general file uploads
const categoryUploads = multer({ storage: categoryStorage });
const profileUpload = multer({ storage: profileStorage });
const areaUploads  = multer({ storage: areaStorage });
const bathroomUploads  = multer({ storage: bathroomStorage });
const multiplepropertyUploads  = multer({ storage: multiplepropertyStorage });
const blogUploads  = multer({ storage: blogUploadsStorage });



const fileUpload = multer({ storage: fileStorage });

const docUploads = multer({ storage: docStorage });

const vehicleUploads = multer({ storage: vehicleStorage });
 
const invoiceUploads = multer({ storage: invoiceStorage });

const postUploads = multer({ storage: postStorage });

const thumbnailUploads = multer({ storage: thumbnailStorage });

const folderimgUploads  = multer({ storage: folderStorage });

const boardimgUploads  = multer({ storage: boardStorage });

const chatUploads  = multer({ storage: chatStorage });

const groupchatUploads  = multer({ storage: groupchatStorage });

const ticketUploads  = multer({ storage: ticketStorage });

const countryUploads  = multer({ storage: countryStorage });

const userThreadUploads  = multer({ storage: userThreadStorage });

export { categoryUploads, profileUpload, areaUploads, bathroomUploads, multiplepropertyUploads, blogUploads, 
  
  imageUpload, fileUpload , vehicleUploads,  docUploads ,  postUploads , 
  thumbnailUploads , folderimgUploads , boardimgUploads ,chatUploads , groupchatUploads , 
  ticketUploads ,  countryUploads, userThreadUploads,invoiceUploads};
