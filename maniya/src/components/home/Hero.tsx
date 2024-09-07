import React from "react";
import { AiOutlineCheck } from "react-icons/ai";


// Common styles
const buttonStyle =
  "inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";

function Hero15() {
  return (
    <div>
      <section className="py-12 overflow-hidden bg-white sm:py-16 lg:pb-20 xl:pt-24 xl:pb-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl sm:tracking-tight">
                Transform Your Communication with Maniya Bot
              </h1>
              <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                Maniya Bot offers blockchain-secured communication tools to
                enhance your web experience with fast, secure, and reliable
                messaging.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  title=""
                  className={`${buttonStyle} bg-blue-600 border border-transparent hover:bg-blue-700 focus:ring-blue-700`}
                  role="button"
                >
                  Explore Maniya Bot
                </a>
              </div>

              <ul className="mt-10 space-y-4">
                <li className="flex items-center text-gray-900">
                  <AiOutlineCheck className="w-6 h-6 mr-2 text-blue-600" />
                  Blockchain-secured messaging for ultimate security.
                </li>

                <li className="flex items-center text-gray-900">
                  <AiOutlineCheck className="w-6 h-6 mr-2 text-blue-600" />
                  Fast and efficient communication tools.
                </li>

                <li className="flex items-center text-gray-900">
                  <AiOutlineCheck className="w-6 h-6 mr-2 text-blue-600" />
                  Built for developers and users seeking secure communication.
                </li>
              </ul>
            </div>

            <div>
              <div className="relative mx-auto">
                <img
                  className="w-full mx-auto md:scale-150 sm:mb-20"
                  src="https://www.auraui.com/memeimage/manwithoutbg.png"
                  alt="AuraUI Demo"
                />
                <div className="md:absolute top-80 right-[-50px] bg-gray-900 rounded-br-none sm:-translate-x-16 xl:-translate-x-24 rounded-2xl sm:scale-100">
                  <div className="px-4 py-5 sm:p-6">
                    <blockquote>
                      <p className="text-base font-normal leading-6 text-white">
                        Maniya Bot has transformed how we handle secure
                        communication. The platform&apos;s efficiency and
                        security are unmatched.
                      </p>
                    </blockquote>
                    <p className="mt-4 text-base font-semibold text-white">
                      Jamie Lee
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-400">
                      Lead Developer - Blockchain Innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero15;
