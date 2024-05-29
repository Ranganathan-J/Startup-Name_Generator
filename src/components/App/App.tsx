import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import SearchComp from '../SearchComp/SearchComp.tsx';
import name from '@rstacruz/startup-name-generator'
import SuggestList from '../SuggestedNames/SuggestList.tsx';





function App(){
    const [keyword, setKeyword] = useState('')
    const [suggest, setSuggest] = useState([])
    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }
    const handleButtonChange = () => {
        setSuggest(keyword ? name(keyword) : [])
        console.log(suggest);
    }
    useEffect(() => {
        console.log(suggest);
    },[suggest])
    return(
        <div>
            <Header/>
            <main>
                <SearchComp keyword={keyword} handleButton={handleButtonChange} handleInput={handleInputChange}/>
                <section>
                    <SuggestList suggestNames={suggest}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default App