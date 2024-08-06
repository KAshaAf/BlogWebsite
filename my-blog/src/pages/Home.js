import React from "react";
import TopSection from "../components/TopSection";
import MiddleSection from "../components/MiddleSection";
import BottomSection from "../components/BottomSection";
import NewsLetter from "../components/newsLetter";

function Home() {
    return (
    <div>
        <TopSection />
        <MiddleSection />
        <BottomSection />
        <NewsLetter />
    </div>
    );
}

export default Home;