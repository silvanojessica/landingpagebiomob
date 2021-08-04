import './header.css';
import logotipo_biomob from '../imagens/logotipo_biomob.png';

import MaterialIcon, { home, info, groups, dashboard_customize, phone_android } from 'material-icons-react';


import { useRef } from 'react';
import { useLink } from '@react-aria/link';
import { Container } from 'react-bootstrap';


const Header = (props) => {
    const { fontScale } = props;
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
        <Container>
            <div className="header-container">


                <div className="header-logo">
                    <img
                        src={logotipo_biomob}
                        alt="logotipo da Biomob"
                        title="logotipo da Biomob"
                    />
                </div>

                <div style={{ fontSize: 20 * fontScale }} className="header-tag">
                    <Link onPress={() => props.referencias[0].current.scrollIntoView({ behavior: 'smooth' })}>
                        <div>
                            <MaterialIcon icon="home" title="Início" alt="Ir para a seção Início" size={28} color='inherit' />
                        </div>
                    </Link>
                    <Link onPress={() => props.referencias[0].current.scrollIntoView({ behavior: 'smooth' })}>
                        Início
                    </Link>
                </div >

                <div style={{ fontSize: 20 * fontScale }} className="header-tag">
                    <Link onPress={() => props.referencias[1].current.scrollIntoView({ behavior: 'smooth' })}>
                        <div >
                            <MaterialIcon icon="info" title="Informações" alt="Ir para a seção de informações" size={24} color='inherit' />
                        </div>
                    </Link>
                    <Link onPress={() => props.referencias[1].current.scrollIntoView({ behavior: 'smooth' })}>
                        Informações
                    </Link>
                </div>

                <div style={{ fontSize: 20 * fontScale }} className="header-tag">
                    <Link onPress={() => props.referencias[2].current.scrollIntoView({ behavior: 'smooth' })}>
                        <div >
                            <MaterialIcon icon="groups" title="Quem somos" alt="Ir para a seção de Quem Somos" size={35} color='inherit' />
                        </div>
                    </Link>
                    <Link onPress={() => props.referencias[2].current.scrollIntoView({ behavior: 'smooth' })}>
                        Quem somos
                    </Link>
                </div>

                <div style={{ fontSize: 20 * fontScale }} className="header-tag">
                    <Link onPress={() => props.referencias[3].current.scrollIntoView({ behavior: 'smooth' })}>
                        <div>
                            <MaterialIcon icon="dashboard_customize" title="Aplicativos" alt="Ir para a seção de Aplicativos" color='inherit' />
                        </div>
                    </Link>
                    <Link onPress={() => props.referencias[3].current.scrollIntoView({ behavior: 'smooth' })}>
                        Aplicativos
                    </Link>
                </div>

                <div style={{ fontSize: 20 * fontScale }} className="header-tag">
                    <Link onPress={() => props.referencias[4].current.scrollIntoView({ behavior: 'smooth' })}>
                        <div>
                            <MaterialIcon icon="phone_android" title="Contato" alt="Ir para a seção de Contato" color='inherit' />
                        </div>
                    </Link>
                    <Link onPress={() => props.referencias[4].current.scrollIntoView({ behavior: 'smooth' })}>
                        Contato
                    </Link>
                </div>

            </div>
        </Container>

    );
};

export default Header;