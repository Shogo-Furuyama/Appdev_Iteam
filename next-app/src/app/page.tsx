import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Home.module.css';
import Map_iframe from '../../data/iframe.json';
import Opendata from '../../data/opendata.json';
import Maps from '../../data/toilet.json';

const Page = () => {

  return (
    <div>
      <Head>
        <title>トイレの神様</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <p>トイレの神様</p>

      <Link href="/index" legacyBehavior >
        <a className={styles.circleButton}>やばいもれそう！！</a>
      </Link>

      <div>
        <ul>
          {Maps.map((data, index) => (
            <li key={index}>
              <p>{data.施設名}</p>
              <p>{data.都道府県} {data.市区町村} {data.番地}</p>
              <iframe src={data.Map_iframe} width="600" height="450" style={{ marginRight: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Page;