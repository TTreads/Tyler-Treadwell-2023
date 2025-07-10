function Footer(props: any) {
    return <footer className='max-w-[640px] m-auto md:p-5'>
        <div className='p-5'>
            <div className='flex-col'><h3 className="text-[20px] font-bold tracking-tight text-[#282C32] leading-tight"><span aria-label='ttrds. Tyler Treadwell Designs'>ttrds.</span></h3></div>
            <div className='md:flex justify-between'>

                <div className='flex-col text-[12px] mt-2 text-left'>
                    <p>Find me on <a target="_blank" className='underline' href='https://www.linkedin.com/in/ttreads/'>LinkedIn</a>, <a target="_blank" className='underline' href="https://dribbble.com/ttreads">Dribbble</a></p>
                    <p>Browse my code on <a target="_blank" className='underline' href="https://github.com/ttreads">GitHub</a></p>
                </div>

                <div className='flex-col text-[12px]  md:text-right'>
                    <p>Built using <a target='_blank' className='underline' href='https://nextjs.org/?via=TylerTreadwell'>Next.js</a></p>
                    <p className='text-[12px]'>&copy; {props.Year} All Rights Reserved</p>
                </div>

            </div>
        </div>
    </footer>
}


export default Footer;