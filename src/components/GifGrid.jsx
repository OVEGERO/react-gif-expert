import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

//nunca codificar una funcion en un componente
//ya que la redibuja cada vez que se renderiza el componente
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && <h2>Cargando...</h2> }
            <div className="card-grid">
                {
                    images.map( image => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
