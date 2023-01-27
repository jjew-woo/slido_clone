import { useEffect, useState } from "react"
import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import PrivacyBanner from "./PrivacyBanner"

export default function PageLayout() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategory() {
            const response = await fetch('/mock/categories.json');
            const result = await response.json();
            const menu = result.header;
            setCategories(menu);
        }
        
        fetchCategory();
    }, [])

    return (
        <>
            <Header categories={categories}/>
            <Body />
            <PrivacyBanner />
            <Footer />
        </>
    )
}