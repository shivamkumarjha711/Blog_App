import React, { useEffect, useState } from "react";
import "../styles/ReadBlog.css"
import { useParams } from "react-router-dom";

export const ReadBlog = ({blogData}) => {
    const {id} = useParams();
    const [singleData, setSingleData] = useState({})
    useEffect(() => {
        const singleArray = blogData.filter((e, i) => {
            return id == i
        })
        setSingleData({...singleArray})
    }, [id])

    return (
        <div id="ReadBlog">
            <img src={singleData?.img} alt="" />
            <h1>Blog Title: {singleData?.title}</h1>
            <p>
                Blog Content: {singleData?.desc}
            </p>
        </div>
    )
}