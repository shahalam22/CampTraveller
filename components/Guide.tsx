import Image from 'next/image'
import React from 'react'

function Guide() {
  return (
    <section className='flexCenter flex-col'>
        <div className='padding-container max-container w-full pb-24'>
            <Image 
                src='/images/camp.svg'
                alt='camp'
                width={50}
                height={50}
            />
            <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
                We are here for you
            </p>
            <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
                <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide you to Easy Path</h2>
                <p className='regualer-16 text-gray-30 xl:max-w-[520px]'>
                    Only with us, you can find the best camping spots in the world. We will guide you to the best camping spots in the world. Because we are the best camping spot provider in the world. We will guide you to the best camping spots in the world. Because we are the best camping spot provider in the world.
                </p>
            </div>
        </div>

        <div className='flexCenter max-container relative w-full'>
            <Image 
                src='/images/boat.png'
                alt='boat'
                height={580}
                width={1440}
                className='w-full object-cover object-center 2xl:rounded-5xl'
            />
            <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border top-50 shadow-md md:left-[5%] lg:top-20'>
                <Image 
                    src='/images/meter.svg'
                    alt='meter'
                    height={158}
                    width={16}
                />
                <div className='flexBetween flex-col'>
                    <div className='flex w-full flex-col'>
                        <div className='flexBetween w-full'>
                            <p className='regular-16 text-gray-20'>Destination</p>
                            <p className='bold-16 text-green-50'>48 min</p>
                        </div>
                        <p className='bold-20 mt-2'>Aguas Colienutes</p>
                    </div>
                    <div className='flex w-full flex-col'>
                        <p className='regular-16 text-gray-20'>Start Track</p>    
                        <p className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Guide