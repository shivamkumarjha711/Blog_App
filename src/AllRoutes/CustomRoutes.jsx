import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AddBlog } from "../pages/AddBlog";
import { ReadBlog } from "../pages/ReadBlog";


export const CustomRoutes = () => {
    const [blogData, setBlogData] = useState([
        {title: "Blog 1", img: "https://t4.ftcdn.net/jpg/03/04/48/89/360_F_304488935_fVFJWjyyEGYasnyEvIarwzBIwHcJSKay.jpg", desc: "Descriptoin 1"},
        {title: "Blog 1", img: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", desc: "Descriptoin 2"}
    ]);

    return(
        <Routes>
            <Route path="/" element={<HomePage blogData={blogData} setBlogData={setBlogData} />} />
            <Route path="addblog" element={<AddBlog pervData={blogData} updateData={setBlogData} />} />
            <Route path="/read/:id" element={<ReadBlog blogData={blogData} />}></Route>
        </Routes>
    )
}