import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'


type FeatureItem = {
    title: string;
    icon: string;
    description: string;
}


const FeatureItem = ({title, icon, description}:FeatureItem) => {
    return (
        <li className='flex w-full flex-1 flex-col items-start mb-10'>
            <div className='rounded-full p-4 lg:p-7 bg-green-50'>
                <Image src={icon} alt='map' height={28} width={28}/>
            </div>
            <h2 className='bold-20 lg:bold-32 mt-5 capitalized'>{title}</h2>
            <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg:none'>{description}</p>
        </li>
    )
}


function Features() {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
        <div className='max-container padding-container relative flex w-full justify-end'>
            <div className='flex flex-1 lg:min-h-[900px]'>
                <Image 
                    src='https://shahalam22.github.io/CampTraveller/phone.png'
                    alt='phone'
                    height={1000}
                    width={440}
                    className='feature-phone'
                />
            </div>

            <div className='z-20 flex w-full flex-col lg:w-[60%]'>
                <div className='relative'>
                    <Image 
                        src='https://shahalam22.github.io/CampTraveller/camp.svg'
                        alt='camp'
                        height={50}
                        width={50}
                        className='absolute laft-[-5px] top-[-28px] w-10 lg:w-[50px]'
                    />
                    <h2 className='bold-40 lg:bold-64'>Our Features</h2>
                </div>
                <ul className='mt-10 grid grid-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
                    {FEATURES.map((feature) => (
                        <FeatureItem 
                            key={feature.title}
                            title={feature.title}
                            icon={feature.icon}
                            description={feature.description}
                        />
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Features