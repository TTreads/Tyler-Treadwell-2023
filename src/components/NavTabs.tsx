'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
function NavTabs(props: any) {

    const [CurrentLink, setCurrentLink] = useState(false)
    const SelectTab = () => {
        console.log("link clicked")
    };

    useEffect(() => {
        let currentURL = window.location.href
        let lastParam = currentURL.split("/").pop()
        console.log(lastParam)
    }, [])

    return (<div className="mt-2">
        <div className="">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs" id="MainTabs">
                    {props.tabs.map((tab: any) => (
                        <Link
                            onClick={SelectTab}
                            key={tab.name}
                            href={tab.href}
                            className={
                                tab.current
                                    ? 'border-[#282C32] text-[#282C32] w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium'
                            }
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    </div>)
}


export default NavTabs;