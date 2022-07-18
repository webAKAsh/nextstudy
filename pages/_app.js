import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Default from '../components/layouts/Default'
import App from 'next/app'
import { Provider } from "react-redux"
import store from "../redux/app/store"

class MyApp extends App{
  render(){
    const {Component, pageProps : {session, ...pageProps}} = this.props;
    const Layout = Component.Layout || Default

    return(
      <SessionProvider session={session}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </Provider>
      </SessionProvider>
    )
  }
}

export default MyApp
