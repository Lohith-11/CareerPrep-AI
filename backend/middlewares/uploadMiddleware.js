const multer=require("multer");

//Configure storage

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/");  //Directory to save uploaded files
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`);  //Unique filename
    },
});

//File filter
const fileFilter=(req,file,cb)=>{
    const allowedTypes=["image/jpeg","image/png","image/jpg"];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(new Error("Only .jpg, .jpeg and .png files are allowed"),false);
    }
};

const upload=multer({storage,fileFilter});

module.exports=upload;