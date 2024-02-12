// wc.tsx
import Head from 'next/head';
import Map_iframe from '../../data/iframe.json';
import Opendata from '../../data/opendata.json';
import Maps from '../../data/test.json';


const WCPage = () => {
  return (
    <div>
      <Head>
        <title>WC Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>トイレへようこそ！</h1>
      <p>ここはトイレページです。何かトイレに関する内容をここに書くことができます。</p>

      <div>
        <ul>
          {Maps.map((data, index) => (
            <li key={index}>
              <p>{data.施設名}</p>
              <p>{data.都道府県} {data.市区町村} {data.番地}</p>
              {data.Map_iframe}
            </li>
          ))}
        </ul>
      </div>
      
      {/* その他のページ内容 */}
    </div>
  );
};

export default WCPage;