import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Navbar from '../components/Navbar';
import { SWRConfig } from 'swr'
import fetcher from '../hooks/swrFetch'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{fetcher}}>
          <Navbar/>
          <Component {...pageProps} />
      </SWRConfig>
    </> 
         )
}

export default MyApp
