import './HeaderPgInicio.css'
import data from '../../videos.json'


export default function HeaderPgInicio({ categoria}) {

    const categoriaFiltrada = data.categorias.find(id => id.id === categoria[0].categoria);
    const estiloH1 = {
        backgroundColor: categoriaFiltrada ? categoriaFiltrada.cor : 'default-color', // Use uma cor padrão se não encontrar uma categoria correspondente
      };

    return (
        <div className='inicial' >
            <img className='background' src={categoria[0].capa} alt="Capa video" />
            <div className='containerInicial'>
                <div className='headerInicial'>
                    <div className='headerSobre'>
                        <h1 style={estiloH1}>
                        {categoriaFiltrada ? categoriaFiltrada.titulo : 'Título Padrão'}
                        </h1>
                        <h2>{categoria[0].titulo}</h2>
                        <p>{categoria[0].descricao}</p>
                    </div>
                    <div className='headerImg'>
                        <img src={categoria[0].capa} alt="Capa video" />
                    </div>
                </div>
            </div>
        </div>
    )
}