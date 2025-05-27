import React from 'react';


const EAndESection = () => {
  return(
    <div>
      <div className="relative flex flex-col items-center min-h-[150vh] justify-center  bg-black text-white p-20">
        <div className='flex items-end p-20 gap-10'>
          <img src="./images/AmazonPrimeClone.png" alt="amazon" className='w-[40vw]'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit molestias cumque officiis esse ab, consequuntur unde voluptates, quaerat doloribus pariatur id similique ipsum? Distinctio earum exercitationem saepe blanditiis in?</p>
        </div>
        <div className='relative w-full h-full flex items-center justify-center'>
            <div className='absolute -bottom-28 -translate-y-16 -left-[21vw] w-full h-full flex items-center justify-center'>
              <div class="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
                <div class="absolute -left-[11px] top-52 w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
            <div className='absolute -bottom-[8vw] right-[20vw]'>
              <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl font-bold'>01</h1>
                <h2 className='text-4xl font-bold'>Education</h2>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}



const layoutRight = () =>{
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the EAndE Section</h1>
      <p className="text-lg text-gray-700">This is a simple EAndE section layout.</p>
    </div>
  )
}
const layoutLeft = () =>{
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the EAndE Section</h1>
      <p className="text-lg text-gray-700">This is a simple EAndE section layout.</p>
    </div>
  )
}

const layoutBottom = () =>{
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the EAndE Section</h1>
      <p className="text-lg text-gray-700">This is a simple EAndE section layout.</p>
    </div>
  )
}
export default EAndESection;