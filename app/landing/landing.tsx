"use client";

import { useEffect, useRef, useState } from 'react';
// import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Cross, X } from 'lucide-react';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Boxes } from '@/components/ui/background-boxes';
import { SparklesCore } from '@/components/ui/sparkles';
// import { LampContainer } from './ui/lamp';
// import { motion } from 'framer-motion';

interface LandingPageProps {
    children: React.ReactNode;
}

const words = [
    {
      text: "'Join lively, engaging chat discussions.' | 'Expand your network, meet professionals.'",
      className: "text-[15px] text-gray-500 dark:text-gray-500",
    },
  ];
  const links = [
    { name: 'Server Management', href: '#' },
    { name: 'Channel Integration', href: '#' },
    { name: 'Audio Stream', href: '#' },
    { name: 'Video Stream', href: '#' },
    { name: 'Share Screen', href: '#' },
  ]
  const stats = [
    { name: 'Technology', value: '15+' },
    { name: 'Working Times', value: '80 Hours' },
    { name: 'Hours per week', value: '15+' },
    { name: 'Visited People', value: 'Unlimited' },
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
    const [writer, setWriter] = useState(false);

    useEffect(()=> {

      setTimeout(() => {
        setWriter(true)
      }, 4900);
     
    },[])

   

    return (     
<div>


{/* Animation  */}

<div id="loader">
      <h1>COMMUNITY ✌️ BUILDING </h1>
      <h1>ENTERTAINMENT <span>👌</span></h1>
      <h1>COLLABORATION 🤝</h1>
      
      <div className="w-[40rem] h-40 absolute bottom-44">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
</div>


{/* first */}
{/* bg-gradient-to-b from-white to-blue-300 */}
<div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
<Boxes />

<div className="relative h-screen overflow-hidden">
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
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our co-partner of <span className='border-b border-green-500'>Discord Server</span>.{' '}
              <a href="#Leader" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                View Leadership <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className='h-full'>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Create an <span className="text-green-400">invite-only</span> place where you belong.
            </h1>
            <span className="mt-6 leading-8 text-gray-600" style={{ fontSize: "0.875rem" }}>
             {writer ? <TypewriterEffectSmooth words={words} /> : "Collaborate on projects, share ideas." }
            </span>
            {!showChildren && (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => setShowChildren(true)}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </button>
                <a href="#about-us" className="text-sm font-semibold border-b-2 border-indigo-400 leading-6 text-indigo-400">
                  Learn more <span aria-hidden="true">🏹</span>
                </a>
              </div>
            )}
            {showChildren && (
              <div className="transition absolute inset-0 flex justify-center items-center backdrop-filter backdrop-blur-md ">
                <div className='h-full w-full flex items-center justify-center transition-transform duration-500'>
                <X
                className='absolute top-10 right-20 cursor-pointer hover:rotate-90 text-white transition-transform duration-500'
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

</div>

        {/* second */}

        <div className="relative h-screen isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id='about-us'>
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
           Swami Sahjjanand Collage Of Computer Science
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
              <div key={stat.name} className="flex flex-col-reverse justify-center">
                <dt className="text-base leading-7 text-yellow-300 border-b-2 border-yellow-100">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

                {/* About me & my bro */}

                <div className="relative bg-gradient-to-b from-white to-gray-600 h-screen overflow-hidden" id='Leader'>
  <div className="absolute inset-0 z-0 backdrop-filter backdrop-blur-md">
    {/* <!-- Animated SVG Background --> */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute left-0 top-0 z-0">
      <path fill="#FF80B5" fill-opacity="0.3" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,186.7C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
    {/* <!-- End of Animated SVG Background --> */}
    <div id='ClipPath' className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#2e267e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] w-[36.125rem] h-[calc(100vh+20rem)] rounded-full" />
  </div>

  <div className="relative z-10 flex justify-center items-center h-full">
    <div className="max-w-2xl flex flex-col items-center px-6 py-32 sm:py-48 lg:py-56 text-center">
      <h2 className="text-3xl font-bold border-b-2 border-gray-500 tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Ready to become a part of our thriving community? Join us on Discord today and connect with like-minded individuals who share your passions and interests. Let's build something incredible together!
      </p>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-12">
        {people.map((person) => (
          <div key={person.name} className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>






    {/* footer  */}

    <footer className="relative bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50 bg-gradient-to-b from-black to-gray-900 border border-green-500 shadow" />
            <div className="relative z-10 flex justify-center items-center h-full text-white">
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl font-bold text-green-400  mb-8">Contact Us</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center mb-8">
                        <div className="md:mr-8 mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2 text-highlight">Address</h3>
                            <p>Shihor, Sanosara-364230</p><hr />
                            <p>Dhasa Junction-Bhavngar</p><hr />
                        </div>
                        <div className="md:mr-8 mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2 text-highlight">Phone</h3>
                            <p>+91 9328072705</p><hr />
                            <p>+91 97143 65330</p><hr />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-highlight">Email</h3>
                            <p>kishankevadiya122345@gmail.com</p> <hr />
                            <p>krupalj007@gmail.com</p><hr />
                        </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out mb-6"><a href="mailto:kishankevadiya12345@gmail.com">Contact Us</a></button>
                    <p className="text-lg text-gray-300 mb-4">We envision a community where individuals from diverse backgrounds can come together to share their interests, ideas, and experiences. With Kishan and Krupal at the helm, we strive to create a welcoming environment where everyone feels valued and respected.</p>
                    <p className="text-sm text-gray-400">Developed by <span className="text-highlight">Kishan Kevadiya & Krupal Solanki</span></p>
                </div>
            </div>
        </footer>

{/* <footer className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
							<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
						</svg>
					</div>
					<span className="self-center text-2xl font-semibold">Brand name</span>
				</a>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Category</p>
				<ul>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
				</ul>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Category</p>
				<ul>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-600">Link</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2024 All rights reserved</span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
						<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer> */}

        </div>
    );
};

export default LandingPage;
