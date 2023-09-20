import { Button } from '@mui/material'
import './Header.css'

export default function Header(props) {
    return (
        <header className='header'>
            <img src='/img/logo.svg' alt="Logo" />

            {props.btnInicial === 1 && (
                < Button variant="contained" color='inherit' onClick={props.pagina} >Novo vídeo</Button>
            )
            }

        </header >
    )
}