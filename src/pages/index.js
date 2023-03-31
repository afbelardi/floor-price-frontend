import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { useRef, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CurrentCard from '../components/CurrentCard';

export default function Home() {

  const searchRef = useRef(null);
  const [searchedCollection, setSearchedCollection] = useState({});
  const [wasSearched, setWasSearched] = useState(false)

  return (
    <>
      <Head>
        <title>Floor Price Check</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <SearchBar
      searchRef={searchRef}
      />
      {
        wasSearched ?
        <CurrentCard
        searchedCollection={searchedCollection}
        setSearchedCollection={setSearchedCollection}
        /> : ''
      }


      
    </>
  )
}
