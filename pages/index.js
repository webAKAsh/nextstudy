import Head from 'next/head'
import { useSession, getProviders, getSession } from "next-auth/react"
import Login from '../components/Login'

export default function Index({providers}) {

  const { data : session } = useSession()

  if(!session) return <Login providers={providers}/>
  return (
    <div>
      <Head>
        <title>Celetel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='flex justify-center items-center'>
          <h1 className='font-semibold text-4xl w-full h-screen text-center text-gray-500'>
            Welcome to celetel
          </h1>
        </div>
    </div>
  )
}

export async function getServerSideProps(context){
  const providers = await getProviders()
  const session = await getSession(context)

  return{
    props:{
      providers,session
    }
  };
}