import React from 'react'


type HeaderNavigationMenuContent = {
    title: string
    subtitle: string
}
const HeaderNavigationMenuContent = ({title, subtitle} : HeaderNavigationMenuContent) => {
  return (
    <div className='flex flex-col space-y-1 w-full'>
        <div className='font-bold'>
            {title}
        </div>
        <div className='text-sm'>
            {subtitle}
        </div>
    </div>
  )
}

export default HeaderNavigationMenuContent