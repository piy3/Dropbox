import { truncate } from 'fs';
import React, { useState } from 'react'
import DropboxContent from '@/app/components/dropboxContent'


function ConnectDropbox() {
    const [Content,setContent] = useState(false);
    const showContent = ()=>{
        setContent((true));
    }
  return (
      <>
    {!Content?(
             <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold">Connect to your dropbox</h1>
            <button onClick={showContent} className="border-white border-2 p-2 mt-3 hover:border-green-400 rounded-md">Connect</button>
    </div>
    ):
    // <div className=' h-full'>content is here.</div>
    <DropboxContent />
}
</>
   
  )
}

export default ConnectDropbox