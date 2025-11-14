function Footer(props: any) {
    return (
        <footer className='max-w-[640px] m-auto md:p-5'>
            <div className='p-5 text-[#282C32] dark:text-gray-100 transition-colors duration-300'>
                <div className='flex-col'>
                    <h3 className="text-[20px] font-bold tracking-tight leading-tight text-[#282C32] dark:text-gray-50">
                        <span aria-label='ttrds. Tyler Treadwell Designs'>ttrds.</span>
                    </h3>
                </div>
                <div className='md:flex justify-between'>

                    <div className='flex-col text-[12px] mt-2 text-left text-gray-600 dark:text-gray-300'>
                        <p>
                            Find me on <a target="_blank" className='underline hover:opacity-80' href='https://www.linkedin.com/in/ttreads/'>LinkedIn</a>,{' '}
                            <a target="_blank" className='underline hover:opacity-80' href="https://dribbble.com/ttreads">Dribbble</a>
                        </p>
                        <p>Browse my code on <a target="_blank" className='underline hover:opacity-80' href="https://github.com/ttreads">GitHub</a></p>
                    </div>

                    <div className='flex-col text-[12px] md:text-right text-gray-600 dark:text-gray-300 mt-4 md:mt-0'>
                        <p>Built using <a target='_blank' className='underline hover:opacity-80' href='https://nextjs.org/?via=TylerTreadwell'>Next.js</a></p>
                        <p className='text-[12px]'>&copy; {props.Year} All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;
