import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className='bg-white dark:bg-slate-700'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='https://flowbite.com/' className='flex items-center mb-6'>
              <img
                src='/hero-img.png'
                className='h-8 mr-3'
                alt='FlowBite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                OptimaCompass
              </span>
            </a>
            <div className='max-w-md space-y-4'>
              <div className='flex'>
                <MapPinIcon className='w-6 h-6 mr-3' />
                <p className=''>
                  Address: 1250 Capital of Texas Hwy, South building 3, Suite
                  400, Austin, TX 78746
                </p>
              </div>
              <div className='flex'>
                <SendIcon className='w-4 h-5 mr-3' />
                <p className=''>Support: OCGAdmin@optimacompass.com</p>
              </div>
              <div className='flex'>
                <PhoneIcon className='w-4 h-5 mr-3' />
                <p className=''>Hotline: +1 512 329-5114</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 lg:gap-20 lg:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Quick Links
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='https://flowbite.com/' className='hover:underline'>
                    Home
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Services
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    AML Technology
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Crypto Currencies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Resources
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Contact
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    About Us
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Client Support
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Optima Alerts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                About Us
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Disclaimer
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Pravicy Policy
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Terms of Services
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Carrier
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{" "}
            <a href='https://flowbite.com/' className='hover:underline'>
              Optima Compass
            </a>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
            <a
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <FacebookIcon className='w-4 h-4' />
              <span className='sr-only'>Facebook page</span>
            </a>
            <a
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <LinkedinIcon className='w-4 h-4' />
              <span className='sr-only'>LinkdedIn</span>
            </a>
            <a
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <InstagramIcon className='w-4 h-4' />
              <span className='sr-only'>Instagram page</span>
            </a>
            <a
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <TwitterIcon className='w-4 h-4' />
              <span className='sr-only'>Twitter Page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
