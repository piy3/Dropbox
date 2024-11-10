import React from 'react'

function DropboxContent() {
  return (
    <>
    <div className=' h-full w-full border-2 border-green-400 p-2'>

        <input type='file' className=' border-white border-2 '></input>
        <button className='p-1 px-3 mx-5 border-2 rounded-lg hover:border-green-400'>Create Folder</button>
    </div>
    </>
  )
}

export default DropboxContent