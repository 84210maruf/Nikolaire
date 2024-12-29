import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: "About Layouts",
    description: "Generated by create next app",
  };

function AboutLayout({ children }) {
    return (
        <div className='p-2'>
            <nav>
                <ul className="flex flex-row gap-6">
                    <li><Link href="/about/mission">Mission</Link></li>
                    <li><Link href="/about/vission">Vission</Link></li>

                </ul>
            </nav>

            {children}
        </div>
    )
}

export default AboutLayout
