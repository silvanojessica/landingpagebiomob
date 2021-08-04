import './body.css';

import imagem_verificador_acessibilidade from '../imagens/imagem_verificador_acessibilidade.png';
import imagem_1_bilhao from '../imagens/imagem_1_bilhao.png';
import imagem_2 from '../imagens/imagem_2.png';
import linha_divisoria from '../imagens/linha_divisoria.png';
import Botao from '../components/botoes/botao/botao';

import MaterialIcon, {info} from 'material-icons-react';

import { Container } from 'react-bootstrap';

const Informacoes = (props) => {
  const { fontScale } = props;
  return (
    <Container>
      <div
        ref={props.referencias}
        className="informacao-background">

        <div className="info-titulo">
          <div ><MaterialIcon icon="info" title="Informações" alt="Informações" size={40} color='inherit'/></div>
          <div style={{ fontSize: 20 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }} className="info-titulo-text"><h1>O que é acessibilidade web?</h1></div>
        </div>

        <div style={{ fontSize: 26 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }} className="info-descricao">A acessibilidade web é tornar o conteúdo de uma página ou aplicativo compreensivo para todas as pessoas, com deficiências ou não.</div>

        <div className="info-titulo">
          <div ><MaterialIcon icon="info" title="Informações" alt="Informações" size={40} color='inherit'/></div>
          <div style={{ fontSize: 20 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }} className="info-titulo-text"><h1>Por que você precisa adaptar seus sites e aplicativos?</h1></div>
        </div>

        <div style={{ fontSize: 26 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }} className="info-descricao">Porque <span style={{ color: '#E93A7D' }}>existem</span>, aproximadamente, <span style={{ color: '#E93A7D' }}>1 bilhão de pessoas com deficiência no mundo</span>, segundo o relatório da Organização das Nações Unidas (ONU), e <span style={{ color: '#E93A7D' }}>APENAS 2% dos sites são adaptados</span>. Além disso, no brasil, <span style={{ color: '#E93A7D' }}>59% das buscas são sobre produtos e serviços</span>. Logo, pela falta de inclusão, você perde a oportunidade de estar no topo!</div>

        <div  >
          <div className="porcentagem" >
            <div>
              <img
                src={imagem_1_bilhao}
                title="1 Bilhão de pessoas diversidade funcional"
                alt="1 Bilhão de pessoas diversidade funcional"
              />
            </div>
            <div>
              <img
                src={linha_divisoria}
                title="Linha divisória"
                alt="Linha divisória"
              />
            </div>
            <div>
              <img
                src={imagem_2}
                title="2 porcento de conteúdo adaptavel"
                alt="2 porcento de conteúdo adaptavel"
              />
            </div>
          </div>
        </div>

        <div className="info-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              src={imagem_verificador_acessibilidade}
              title="Imagem verificador de acessibilidade"
              alt="Ilustração com gráficos de cor rosa ao fundo junto com engrenagens roxas para decorar, uma tela grande de computador com uma imagem dentro da tela representando um gráfico de cores quentes medindo a acessibilidade, uma mulher senta sob a tela utilizando um notebook e um homem de camisa de cor roxa ao lado da tela do computador. "
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10%' }}>
            <div style={{ fontSize: 20 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }} className="info-titulo-text"><h1>Verifique AGORA o nível de acessibilidade do seu conteúdo!</h1></div>
            <div>
              <Botao style={{ width: 234 * fontScale, fontSize: 25 * fontScale }} className="accent"
                title="Verificar"
                handleClick={() => window.open('https://accessmonitor.acessibilidade.gov.pt/', '_blank')}>
              </Botao>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}


export default Informacoes;