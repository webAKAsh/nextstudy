import React from 'react'
import Dlayout from "../components/layouts/Dlayout"
import { useSession, getProviders, getSession } from "next-auth/react";
import Login from '../components/Login';

export default function Settings({providers}){
  const { data: session } = useSession();

  if (!session) return <Login providers={providers} />;
  return (
    <div>Settings</div>
  )
}

Settings.Layout = Dlayout

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}