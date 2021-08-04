import './body.css';

import MaterialIcon, {groups} from 'material-icons-react';


const QuemSomos = (props) => {
  const {fontScale} = props;
  return (
    <div
      ref={props.referencias}
      className="quem-somos-background">

      <div className="quem-somos-titulo">
        <div ><MaterialIcon icon="groups" title="Quem somos" alt="Quem Somos" size={35} color='inherit'/></div>
        <div style={{fontSize:20*fontScale,lineHeight:1.25+0.25*fontScale}} className="quem-somos-titulo-text"><h1>Quem somos</h1></div>
      </div>

      <div style={{fontSize:26*fontScale,lineHeight:1.25+0.25*fontScale}} className="quem-somos-descricao">   A Biomob nasceu em 2014 com o propósito de <span style={{ color: '#E93A7D' }}>melhorar a qualidade de vida</span> de pessoas com <span style={{ color: '#E93A7D' }}>DIVERSIDADE FUNCIONAL, pessoas com deficiência.</span> Diversidade e inclusão é o foco de nossos projetos. Atualmente, nossa equipe trabalha com <span style={{ color: '#E93A7D' }}>as metas das ODS</span>, objetivos de Desenvolvimento Sustentável, e da <span style={{ color: '#E93A7D' }}>ONU</span> que fazem parte da agenda 2030, difundindo o conceito que a sociedade tem o dever de gerar oportunidades em todos os setores:
        <br />
        <div style={{fontSize:26*fontScale,lineHeight:1.25+0.25*fontScale}} className="quem-somos-destaque">
          educação, mobilidade, saúde, esporte, cultura, lazer e emprego.
        </div>



      </div>

    </div>
  );
}

export default QuemSomos;