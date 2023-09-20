
import HeaderPgInicio from '../../componentes/HeaderPgInicio/HeaderPgInicio'
import ListaVideo from '../../componentes/ListaVideo/ListaVideo'
import './Inicial.css'
import data from  '../../videos.json'
import axios from 'axios'

export default function Inicial() {
    
    // axios.get("https://64f7b147824680fd217ed0a4.mockapi.io/categorias")
    // .then((response) => {
    //     let teste = response.data
    //     console.log(teste)
    // }).catch((erro) => {
    //     console.log(erro)
    // })

    

    // console.log(data.videos.filter((categ) => categ.categoria === "frontend" ))
    return (
        <>
            <HeaderPgInicio categoria={data.videos.filter((categ) => categ.categoria === "devops" )} />

        {data.categorias.map((categoria) => {
           return <ListaVideo key={categoria.id} categoria={data.videos.filter((categ) => categ.categoria === categoria.id )}/>
        })}
        </>

    )
}

