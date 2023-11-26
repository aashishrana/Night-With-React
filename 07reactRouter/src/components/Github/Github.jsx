import React, { useState } from "react";
import { useEffect } from "react";
// import { useLoaderData } from "react-router-dom";

export default function Github()  {
    const [data , setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

    // const data = useLoaderData()

    return(
        <div className="bg-gray-500 m-4 text-centre text-white text-3xl">
            Github followers : {data.followers} 
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )

}


// export const githubInfoLoader = async () => {
//     const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//     return response.json()
// }