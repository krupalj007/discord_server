"use client";

import { useEffect, useRef, useState } from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Cross, X } from 'lucide-react';
// import { LampContainer } from './ui/lamp';
// import { motion } from 'framer-motion';


interface LandingPageProps {
    children: React.ReactNode;
}

const words = [
    {
      text: "Where you can collaborate",
      className: "text-gray-500 dark:text-gray-500",
    },
  ];
  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  const people = [
    {
      name: 'Kishan Kevadiya',
      role: 'Student | At SSCCM',
      imageUrl:
        'https://imgs.search.brave.com/yKsJ5OacMg2C_1TQSOFTW1LC2yO5kVXuhljGE_-csIs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbGV0dGVyLWst/cTNwYjRteTl5MjI3/Z2lwNi5qcGc',
    },
    {
      name: 'Krupal Solanki',
      role: 'Student | At SSCCM',
      imageUrl:
        'https://imgs.search.brave.com/U7XSE3Cepk6_L4btwwPpH2RBm25wZAxqg88wBUMvlFI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/enl4d2FyZS5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvdGVhc2VyX2Nh/cmRfc21hbGwvcHVi/bGljLzIwMjItMDIv/RHJ1cGFsJTIwTW9k/dWxlJTIwRGV2ZWxv/cG1lbnQuanBnP2l0/b2s9ZlU3WVpwS0c',
    },
   
  ]

const LandingPage = ({ children }: LandingPageProps) => {
    const [showChildren, setShowChildren] = useState(false);

    // const myRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (myRef.current) {
    //             myRef.current.style.top = "-100%";
    //         }
    //     }, 3000);
    // }, []);

    
    


    return (

         
<div>

        


{/* first */}





<div className="relative bg-gradient-to-b from-white to-blue-300 h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% + 18rem)] sm:w-[36.125rem] w-[18.125rem] h-[calc(100vh + 10rem)] rounded-full animate-pulse"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="max-w-2xl px-6 py-32 sm:py-48 lg:py-56 text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our co-partner of <span className='border-b border-green-500'>Discord Server</span>.{' '}
              <a href="#Leader" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read Leadership <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className='h-full'>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Create an <span className="text-green-400">invite-only</span> place where you belong.
            </h1>
            <span className="mt-6 text-sm leading-8 text-gray-600 ">
              <TypewriterEffectSmooth words={words} />
            </span>
            {!showChildren && (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => setShowChildren(true)}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </button>
                <a href="#about-us" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            )}
            {showChildren && (
              <div className="transition absolute inset-0 flex justify-center items-center backdrop-filter backdrop-blur-md ">
                <div className='h-full w-full flex items-center justify-center'>
                <X
                className='absolute top-10 right-20 cursor-pointer hover:rotate-90 text-green-800 transition'
                onClick={() => setShowChildren(false)}
                />
                  {children}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>














        {/* second */}

        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id='about-us'>
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

                {/* About me & my bro */}

                <div className="relative bg-gradient-to-b from-white to-blue-300 h-screen overflow-hidden" id='Leader'>
  <div className="absolute inset-0 z-0 backdrop-filter backdrop-blur-md">
    <div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] w-[36.125rem] h-[calc(100vh+20rem)] rounded-full"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>

  <div className="relative z-10 flex justify-center items-center h-full">
    <div className="max-w-2xl flex px-6 py-32 sm:py-48 lg:py-56 text-center">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>





    {/* footer  */}

    <footer className="relative bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50 bg-gradient-to-b from-black to-gray-900" />
            <div className="relative z-10 flex justify-center items-center h-full text-white">
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center mb-8">
                        <div className="md:mr-8 mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2 text-highlight">Address</h3>
                            <p>1234 Example Street, City, Country</p>
                        </div>
                        <div className="md:mr-8 mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2 text-highlight">Phone</h3>
                            <p>(123) 456-7890</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-highlight">Email</h3>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out mb-6">Contact Us</button>
                    <p className="text-lg text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non efficitur justo, et cursus nisi. Donec euismod libero eget ligula pulvinar ullamcorper.</p>
                    <p className="text-sm text-gray-400">Developed by <span className="text-highlight">Kishan Kevadiya & Krupal Solanki</span></p>
                </div>
            </div>
        </footer>

        </div>
    );
};

export default LandingPage;
