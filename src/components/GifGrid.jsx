import { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifItem} from "./GifItem";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3>{ category }</h3>
            { isLoading && <h2>Loading...</h2> }
            <div className="card-grid">
                {
                    gifs.map(gif => (
                        <GifItem key={ gif.id } { ...gif }/>
                    ))
                }
            </div>
        </Fragment>  
    )
}

export default GifGrid; 