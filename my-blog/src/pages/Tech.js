import React from "react";
import MiddleSection from "../components/MiddleSection";
import CategoryInfo from "../components/categoryInfo";

function Tech(){
    return (
    <div className="entertainment">
        <CategoryInfo categoryName={"Tech"} categoryDescription={"Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!"}/>
        <MiddleSection />
    </div>
    );
}

export default Tech;