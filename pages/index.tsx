'use client'
import { useSearchParams } from 'next/navigation'
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
const Home = () => {
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  const [datas, setDatas] = useState<any>()
  const fetchUsers = async () => {
    try {
      const res = await fetch(`http://localhost:3005/?title=${title}`);
      const html = await res.text()
      console.log(html, "h")
      setDatas(html)
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [title])
  //debugger
  return (
    <>

      {/* <p dangerouslySetInnerHTML={{ __html: datas }}></p> */}
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            wellcome Home page
          </p>

        </div>

      </main>
    </>

  );
}

export default Home


