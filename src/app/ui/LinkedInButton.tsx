"use client"

import Image from 'next/image'
import { FC } from 'react'

export const LinkedInButton: FC = ({
    width = 300,
    height = 80,
}: {
    width?: number
    height?: number
}) => {

    const handleClick = async () => {
        const res = await fetch('/api/auth')
        const url = await res.text()

        // OPEN NEW TAB
        window.open(url)
    }

    return (
        <a onClick={handleClick} className='cursor-pointer'>
            <Image src="/assets/linkedin.png" alt="LinkedIn" width={width} height={height} />
        </a>
    )
}