function Loading() {
  return (
    // <div className='w-full h-screen bg-white/20 fixed z-1000 gap-3 top-0 left-0 text-white flex items-center justify-center'>
    //   <div className="bg-custom-orange rounded-full h-5 w-5"></div>
    //   <div className="bg-custom-orange rounded-full h-3 w-3 opacity-50"></div>
    //   <div className="bg-custom-orange rounded-full h-5 w-5"></div>
    // </div>
    <div className="dots w-full h-screen bg-white/20 fixed z-1000 top-0 left-0 text-white flex items-center justify-between">
      <div className="bg-custom-orange"></div>
      <div className="bg-custom-orange mx-3"></div>
      <div className="bg-custom-orange"></div>
    </div>
  )
}

export default Loading