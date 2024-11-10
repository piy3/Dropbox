import {File} from 
import cloudinary from 'cloudinary'

const imageupload = async (req,res)=>{
    try{
            const {name,email} = req.body;
        const file = req.files.imagefile;
        if(!file || !name || !email ){
            res.status(404).json({
                message:"All fields are required."
            })
        }
        console.log(file);
        const supportedFormats = ["jpeg","png","jpg"]
        const currentformat = file.name.split('.')
        const currformat = currentformat[currentformat.length-1].toLowerCase();
        if(!(supportedFormats.includes(currformat))){
            res.status(404).json({
                success:false,
                message:"Invalid file format.Only Jpeg,png and jpg are supported."
            })
        }

        try{
            const cloud  = await uploadonCloudinary(file,'Files')
                    console.log(cloud.url)

                try{
                    const entry =await File.create({
                    name, 
                    email,
                    imageurl:cloud.url
                })
                    res.status(200).json({  
                        success:true,
                        data:entry,
                        message:"entry in db successfull."
                    })
                }catch(err){
                    res.status(500).json({
                        success:false,
                        message:("ERROR",err.message)
                    })
                }
                
                    res.status(200).json({
                        success:true,
                        data:cloud,
                        message:"Image Uploading Successfull."
                    })

        }
        catch(err){
            console.log(err);
        }

        
    }catch(err){
        res.status(500).json({
            success:false,
            message:("ERROR",err.message)
        })
    }
    
}