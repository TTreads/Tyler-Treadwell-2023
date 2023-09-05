import Link from 'next/link'

function NavTabs(props: any) {
    return (<div className="mt-2">
        <div className="">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                    {props.tabs.map((tab: any) => (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className={
                                tab.current
                                    ? 'border-[#282C32] text-[#282C32] w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium'
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