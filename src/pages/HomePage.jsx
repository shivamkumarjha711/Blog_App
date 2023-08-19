import React, { useState } from "react";
import { BlogCard } from "../components/BlogCard.jsx";
import "../styles/homepage.css";

export const HomePage = ({ blogData, setBlogData }) => {

    // Prop drilling above it
    return(
        <div id="homepage">
            <div id="blogParent">
                {
                    blogData.map((e, i) => <BlogCard title={e.title} img={e.img} desc={e.desc} id={i} setBlogData={setBlogData} blogData={blogData} />)
                }
            </div>
        </div>
    )
}