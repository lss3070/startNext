import { GetServerSideProps } from "next";
import { useEffect, useState } from "react"
import NaviBar from '../components/Navibar';
import Seo from "../components/Seo";

export default function Home({results}:any){
    const API_KEY=process.env.API_KEY;

    const [movies,setMovies]=useState<string[]>([])

    return(
        <div>
            <Seo title="Home"/>
            {results?.movies?.map((movie:any)=>{
                console.log('!')
                console.log(movie);
                return(
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <h4>{movie.original_title}</h4>
                        </div>
                )
            })}
            <style jsx>
                {`
                    .container{
                        display:grid;
                        grid-template-columns:1fr 1fr;
                        padding:20px;
                        gap:20px;
                    }
                    .movei{
                        cursor:pointer;
                    }
                    .movie img{
                        max-width:100%;
                        border-radius:12px;
                        transition:transform 0.2s ease-in-out;
                        box-shadow:rgba(0,0,0,0.1) 0px 4px 12px;
                    }
                    .movie:hover img{
                        transform:scale(1.05) translateY(-10px);
                    }
                    .movie h4{
                        font-size:18px;
                        text-align:center;
                    }
                `}
            </style>
        </div>
    )
}

export const getServerSideProps:GetServerSideProps=async (context)=>{
    const {results}= await(await fetch('http://localhost:3000/api/movies')
    ).json();
    return {
        props:{
            results
        }
    }
}

