// wc.tsx
import Head from 'next/head';
import styles from '../styles/wc.module.css'
import MyApp from '../../app/app';
import Maps from '../../../data/toilet.json';


function WCPage() {
  return (
    <div className={styles.div_backgroud}>
      <h1 className={styles.h1_text}>トイレ一覧</h1>

      <Head>
        <title>WC Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      

      <div>

      

        <ul>
          {Maps.map((data, index) => (
            <li key={index}>
              <p>{data.施設名}</p>
              <p>{data.都道府県} {data.市区町村} {data.番地}</p>
              <iframe src={data.Map_iframe} width="300" height="250" style={{ marginRight: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </li>
          ))}
        </ul>
      </div>

      {/* その他のページ内容 */}
    </div>
  );
};

export default WCPage;
