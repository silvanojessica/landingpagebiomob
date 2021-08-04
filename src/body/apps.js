import './body.css';
import { isIOS } from 'react-device-detect';

import imagem_celular_na_mao from '../imagens/imagem_celular_na_mao.png';
import imagem_app_biomob from '../imagens/imagem_app_biomob.png';
import imagem_app_revista_reacao from '../imagens/imagem_app_revista_reacao.png';
import { useRef } from 'react';
import { useLink } from '@react-aria/link';

import MaterialIcon, { dashboard_customize } from 'material-icons-react';


const Apps = (props) => {
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
    <div
      ref={props.referencias}
      className="apps-background">
      <div classname="apps-conteudo">
        <div className="apps-titulo">
          <div>
            <MaterialIcon icon="dashboard_customize" size={35} title="Aplicativos" alt="Conheça nossos aplicativos" color='inherit' />
          </div>
          <div className="apps-titulo-text">
            <h1 style={{ fontSize: 40 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }}>Conheça nossos aplicativos</h1>
          </div>
        </div>

        <div className="apps">

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link onPress={() => (isIOS ?
              window.open('https://apps.apple.com/br/app/biomob/id1090156739#?platform=iphone', '_blank')
              :
              window.open('https://play.google.com/store/apps/details?id=com.biomob.org.biomob', '_blank')
            )
            }>
              <img
                src={imagem_app_biomob}
                title="Aplicativo da Biomob"
                alt="Ilustração da logotipo da empresa biomob, fundo da imagem de cor verde claro com um círculo branco sem preenchimento no centro, localizado no meio da figura, com um símbolo de adição de cor branca no canto superior direito. "

              />

            </Link>
            <Link style={{ fontSize: 16 * fontScale }} onPress={() => (isIOS ?
              window.open('https://apps.apple.com/br/app/biomob/id1090156739#?platform=iphone', '_blank')
              :
              window.open('https://play.google.com/store/apps/details?id=com.biomob.org.biomob', '_blank')
            )
            }>
              Biomob</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <Link onPress={() => window.open('https://play.google.com/store/apps/details?id=br.comrevistareacao', '_blank')}><img
              src={imagem_app_revista_reacao}
              title="Aplicativo da revista reação"
              alt="Ilustração da logotipo revista reação, com o fundo de cor preta e também contém um “R” de cor azul claro com branco no centro da ilustração"

            />

            </Link>
            <Link style={{ fontSize: 16 * fontScale }} onPress={() => window.open('https://play.google.com/store/apps/details?id=br.comrevistareacao', '_blank')}>Revista Reação</Link>
          </div>

        </div>
      </div>


      <div className="apps-img">
        <img
          src={imagem_celular_na_mao}
          title="Imagem de um celular na mão"
          alt="Ilustração com fundo de cor lilás com folhas roxas e rosa para decorar, mãos segurando um aparelho celular de cor azul com tela de cor branca. "
        />
      </div>
    </div>
  );
};

export default Apps;