import React from 'react'
import { Button } from '../ui/button'

const Section1 = () => {
  return (
    <div className='flex flex-col w-full bg-background'>
        <div className='max-w-4xl mx-auto px-4 py-3 text-center'>
            <div className='inline-block px-4 py-2 mb-1 rounded-full bg-pink-100 text-pink-800 text-sm font-medium'>
                Plus d'une centainre de personnes connectes
            </div>
            <h1 className='text-4xl md:text-4xl font-bold font-serif mb-6'>
                Seet designer bu la nex
            </h1>
            <p className='text-xl text-muted-foreground mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laudantium autem esse officiis perferendis, incidunt ut voluptatum natus nemo fugiat maxime cum corporis excepturi at rerum facere quod assumenda quisquam?
            </p>

            <Button size={"lg"} className='bg-foreground text-white hover:bg-foreground-80 rounded-full'
            >
                En savoir plus
            </Button>
        </div>
    </div>
  )
}

export default Section1