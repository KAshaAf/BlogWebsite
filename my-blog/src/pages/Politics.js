import React from "react";
import MiddleSection from "../components/MiddleSection";
import CategoryInfo from "../components/categoryInfo";

function Politics(){
    return (
        <div className="entertainment">
         <CategoryInfo categoryName={"Politics"} categoryDescription={"Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis<br>doloremque maiores!"}/>
         <MiddleSection />
        </div>
        );
}

export default Politics;