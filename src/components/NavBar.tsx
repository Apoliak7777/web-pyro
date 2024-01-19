'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useEffect, useRef, useState } from 'react';

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isScrolled = window.scrollY > 120;
    setScrolled(isScrolled);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`isolate fixed left-0 right-0 top-0 px-16 w-full z-[9999]`}>
      <nav className={`main-nav nav-controller transform-gpu will-change-transform max-w-[1620px] w-full relative mx-auto backdrop-blur-xl rounded-full p-2 mt-4 flex flex-row items-center gap-4 overflow-hidden transition-all duration-[550ms] ${scrolled ? "!max-w-[750px] !p-1 !px-8 !mt-0 !rounded-t-none bg-[#ffffff08] border-[1px] border-[#ffffff08] border-solid" : "bg-[#ffffff05] border-[1px] border-[#ffffff00] border-solid"
        }`}>
        <Link className='shrink-0 p-4 w-fit font-bold text-sm' href="/">
          <div className='h-8'>
            <Logo />
          </div>
        </Link>
        <Link className='shrink-0 p-4 w-fit font-bold text-sm' href="/coming-soon">
          Games
        </Link>
        <Link className='shrink-0 p-4 w-fit font-bold text-sm' href="/coming-soon">
          Pricing
        </Link>
        <Link className='shrink-0 p-4 w-fit font-bold text-sm' href="/coming-soon">
          Support
        </Link>

        <div className={`h-[16px] shrink-0 ml-auto w-[1px] bg-[#ffffff29] ${scrolled ? 'opacity-100 mr-2' : 'opacity-0'} `}></div>

        <a className='shrink-0 p-4 w-fit font-bold text-sm' rel='noopener noreferrer' target='_blank' href="https://billing.pyro.host/index.php/client/login/">
          Billing
        </a>

        <a className='shrink-0 p-4 w-fit font-bold text-sm' rel='noopener noreferrer' target='_blank' href="https://panel.pyro.host/">
          Go to Panel
        </a>

        <div className={`glow-controller transition-all duration-[750ms] ${scrolled ? "opacity-0" : "opacity-100"
          }`}>
          <div aria-hidden tabIndex={-1} className='select-none pointer-events-none w-[300px] h-[1px] absolute bottom-0 right-[4%]' style={{
            background: 'radial-gradient(62.87% 100% at 50% 100%, rgb(219 99 99 / 62%) 0%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
          <div aria-hidden tabIndex={-1} className='select-none pointer-events-none w-[200px] h-[1px] absolute top-0 left-[3%]' style={{
            background: 'radial-gradient(62.87% 100% at 50% 100%, rgb(219 99 99 / 62%) 0%, rgba(255, 255, 255, 0) 100%)'
          }}></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar