import Head from 'next/head'
import { useRouter } from 'next/router' 
import Link from "next/link";
 
function Header({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      {/* {router.pathname === '/' && <Showcase />} */}

      <div className={styles.container}>{children}</div>
    
    </div>
  )
}

Layout.defaultProps = {
  title: 'ALragihi property',
  description: 'Find the latest properties',
  keywords: 'rents, sell, buy, events',
}


export default Header;
