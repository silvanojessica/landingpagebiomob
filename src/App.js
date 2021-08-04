import React, { useState, useRef } from 'react'
import './style.css';

import { ThemeProvider } from 'styled-components'
import { modoVerde, modoClaro, modoEscuro,modoAmarelo,modoAzul,modoBranco,modoLaranja,modoRoxo,modoVermelho } from './components/themes/theme';
import GlobalStyles from './components/themes/globalStyles'
import Inicio from './body/inicio';
import QuemSomos from './body/quemSomos'
import Apps from './body/apps';
import Formulario from './body/formulario';
import Informacoes from './body/informacoes';
import Header from './header/header';

import MaterialIcon, {zoom_in,zoom_out,palette,dark_mode,refresh} from 'material-icons-react';

import { useLink } from '@react-aria/link';






function App1() {
    const inicioRef = useRef();
    const informacoesRef = useRef();
    const quemSomosRef = useRef();
    const aplicativosRef = useRef();
    const contatoRef = useRef();

    const [isModo, setIsModo] = useState(modoClaro);
    const [isDark, setIsDark] = useState(false);
    const [fontScale, setFontScale] = useState(1);

    function Link(props) {
        let ref = useRef();
        let { linkProps, isPressed } = useLink({ ...props, elementType: 'span' }, ref);

        return (
            <span
                {...linkProps}
                ref={ref}
                style={{
                    color: isPressed
                        ? 'var(--blue)'
                        : 'var(--spectrum-global-color-blue-700)',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                }}>
                {props.children}
            </span>

        );
    }

    return (
        <div>
            <ThemeProvider theme={isModo}>
                <div className="container">
                    <GlobalStyles />
                    
                    <div className="header">
                        <Header fontScale={fontScale} setFontScale={setFontScale} 
                            referencias={[inicioRef, informacoesRef, quemSomosRef, aplicativosRef, contatoRef]} />
                    </div>

                    <div fontScale={fontScale} setFontScale={setFontScale} className="area-botao">
                        <Link onPress={() => fontScale<2.5 ? setFontScale(fontScale+0.25) : null } ><MaterialIcon icon="zoom_in" title="Aumentar a fonte" alt="Botão para aumentar a fonte" color='inherit'/></Link>

                        <Link onPress={() => fontScale>1 ? setFontScale(fontScale-0.25) : null }><MaterialIcon icon="zoom_out" title="Diminuir a fonte" alt="Botão para diminuir a fonte" color='inherit' /></Link>

                        <Link onPress={() => setIsModo(modoVerde)}><MaterialIcon icon="palette" title="Cores" alt="Botão para escolher a cor do tema do site" color='inherit'/></Link>

                        <Link onPress={() => {
                            setIsDark(!isDark)
                            isDark ? setIsModo(modoClaro) : setIsModo(modoEscuro)
                        }
                        }><MaterialIcon icon="dark_mode" title="Modo noturno" alt="Botão para alterar para o modo noturno" color='inherit' /></Link>

                        <Link onPress={() => {setIsModo(modoClaro);setFontScale(1);}}><MaterialIcon icon="refresh" title="Reset" alt="Botão para voltar às configurações padrão" color='inherit' /></Link>
                    </div>


                    <div className="container-escuro">
                        <Inicio fontScale={fontScale} setFontScale={setFontScale} referencias={inicioRef} />
                    </div>

                    <div className="container-claro">
                        <Informacoes fontScale={fontScale} setFontScale={setFontScale} referencias={informacoesRef} />
                    </div>

                    <div className="container-escuro">
                        <QuemSomos fontScale={fontScale} setFontScale={setFontScale} referencias={quemSomosRef} />
                    </div>

                    <div className="container-claro">
                        <Apps fontScale={fontScale} setFontScale={setFontScale} referencias={aplicativosRef} />
                    </div>

                    <div className="container-escuro">
                        <Formulario fontScale={fontScale} setFontScale={setFontScale} referencias={contatoRef} />
                    </div>



                    
                </div >
            </ThemeProvider>

        </div>
    )
}

export default App1;