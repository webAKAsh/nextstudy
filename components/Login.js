import React from 'react'
import { signIn } from "next-auth/react"
import Image from 'next/image'

const Login = ({providers}) => {
  return (
    <div className='flex justify-center items-center mx-2 bg-blue-200 rounded-b-[90%]'>
        <div className='flex justify-center flex-col items-center max-w-xl'>
            <Image src="/main_logo.svg" alt='celetel' width="300px" height="200px"/>
            <div className='max-w-xl'>
                <h1 className='p-2 text-3xl font-bold'>
                    All your <span className='text-blue-600'>Company Campaigns</span> in one place
                </h1>
                <p className='p-2'>
                    The world&#39;s most innovative companies build communication solutions using Celetel applications and APIs. Get started today and talk to your customers over any channel, for any use case, anywhere in the world.
                </p>
            </div>

            {Object.values(providers).map((provider) => (
                <div key={provider.name} className="flex justify-center items-center my-6">
                    <button onClick={() => signIn(provider.id, {callbackUrl : "/Home"})} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Login