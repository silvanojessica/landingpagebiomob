import './body.css';
import React, { useState, useRef } from 'react';
import Botao from '../components/botoes/botao/botao';

import icone_facebook from '../imagens/icone_facebook.png';
import icone_instagram from '../imagens/icone_instagram.png';

import MaterialIcon, { phone_android, person, email, badge } from 'material-icons-react';

import { useLink } from '@react-aria/link';
import botao_whatsapp from '../imagens/botao_whatsapp.png';

import { Container } from 'react-bootstrap';

import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';




const Formulario = (props) => {
    const { fontScale } = props;
    const [nome, setNome] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

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
        <Container >
            <div
                ref={props.referencias}
                className="form-background"
            >
                <div className="redes-sociais" style={{backgroundColor: 'red'}}>
                    <Link>
                        <FaFacebookF
                            className="icone"
                            onClick={() => window.open('https://www.facebook.com/biomobguia')}
                        />
                    </Link>
                    <Link>
                        <FaInstagram
                            className="icone"
                            onClick={() => window.open('https://www.instagram.com/biomob/')}
                        />
                    </Link>

                    <Link>
                        <FaWhatsapp
                            className="icone"
                            onClick={() => window.open('https://api.whatsapp.com/send?phone=5521965379669')} />
                    </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="form-titulo">
                        <MaterialIcon icon="phone_android" size={35} title="Contato" alt="Entre em contato conosco" color='inhiat' />
                        <div style={{ fontSize: 20 * fontScale }} className="form-titulo-text">
                            <h1>Entre em contato</h1>
                        </div>
                    </div>
                    <p style={{ fontSize: 16 * fontScale }}>Fale conosco para tornar o site da sua empresa acessível</p>

                    <div className="formulario-container">
                        <form className="qualquer">
                            <MaterialIcon icon="person" title="Nome" alt="Insira seu nome" color='inherit' />
                            <label style={{ fontSize: 16 * fontScale }}>Nome:</label>
                            <input style={{ width: 471 * fontScale, height: 83 * fontScale }} type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                            <MaterialIcon icon="email" title="E-mail" alt="Insira seu e-mail" color='inherit' />
                            <label style={{ fontSize: 16 * fontScale }}>E-mail:</label>
                            <input style={{ width: 471 * fontScale, height: 83 * fontScale }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <MaterialIcon icon="badge" title="Nome da empresa" alt="Insira o nome de sua empresa" color='inherit' />
                            <label style={{ fontSize: 16 * fontScale }}>Sua empresa é:</label>
                            <input style={{ width: 471 * fontScale, height: 83 * fontScale }} type="text" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} />
                        </form>

                        <div className="formulario-submit">
                            <form>
                                <label style={{ fontSize: 16 * fontScale }}>Descreva aqui o problema de sua empresa:</label>
                                <textarea style={{ width: 471 * fontScale, height: 280 * fontScale }} type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                            </form>
                            <div style={{ marginTop: '22px' }}>
                                <Botao style={{ fontSize: 25 * fontScale, width: 234 * fontScale }} className="accent"
                                    title="Enviar"
                                    handleClick={() => alert('Fui apertado')}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Formulario;