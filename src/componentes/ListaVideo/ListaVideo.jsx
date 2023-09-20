import CapaVideo from '../CapaVideo/CapaVideo'
import './ListaVideo.css'
import data from '../../videos.json'

export default function ListaVideo(props) {

    const categoriaFiltrada = data.categorias.find(id => id.id === props.categoria[0].categoria);
    const estiloH1 = {
        backgroundColor: categoriaFiltrada ? categoriaFiltrada.cor : 'default-color', // Use uma cor padrão se não encontrar uma categoria correspondente
    };

    return (


        <section className='sectionInicial'>
            <div className='temaVideo'>
                <h2 style={estiloH1}>{categoriaFiltrada.titulo}</h2>
                <p>{categoriaFiltrada.descricao}</p>
            </div>
            <div className='listaVideo'>
                {props.categoria.map((video) => (
                    <CapaVideo key={video.id} capa={video.capa} link={video.link} />
                )
                )}
            </div>
        </section>
    )
}