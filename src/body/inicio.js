import './body.css';
import imagem_acessibilidade_digital from '../imagens/imagem_acessibilidade_digital.png';
import Botao from '../components/botoes/botao/botao';
import { Container } from 'react-bootstrap';



const Inicio = (props) => {
  const { fontScale } = props;



  return (
    <Container>

      <div ref={props.referencias}>
        <div

          className="inicio-background"
        >

          <div className="inicio-texto">
            <div className="inicio-titulo">

              <div className="inicio-titulo">

                <h1 style={{ fontSize: 40 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }}>Você precisa ter um site acessível para colocar sua marca no TOPO dos resultados.</h1>

              </div>

              <div
                className="inicio-descricao"
                style={{ fontSize: 26 * fontScale, lineHeight: 1.25 + 0.25 * fontScale }}
              >

                Você sabia que apenas 0,74% dos sites brasileiros foram aprovados nos testes de acessibilidade digital? Foi isso que a plataforma de dados BigDataCorp e o Movimento Web para Todos identificaram ao analisar mais de 14 milhões de endereços da web brasileira. Conheça as oportunidades que sua empresa pode ter com mais acessibilidade.

              </div>

              <div>
                <Botao style={{ fontSize: 25 * fontScale, width: 234 * fontScale }}
                  className="accent"
                  title="Fale conosco"
                  handleClick={() => {}}>

                </Botao>
              </div>
            </div>

          </div>
          <div
            className="inicio-imagem">

            <img src={imagem_acessibilidade_digital} title="Imagem assecibilidade" alt="Ilustração com engrenagens de cor rosa ao fundo, um notebook principal com sua tela contendo um ícone de deficiência física, uma mulher sentada numa cadeira de rodas, segurando um tablet ao lado do notebook principal, um tablet e um celular, posicionado ao lado do notebook principal, sendo o tablet de tela de cor azul contendo ícone silenciador, e o celular com tela de cor azul contendo um ícone de olho com traço no meio representando a deficiência visual e um homem em pé de óculos segurando um tablet."></img>

          </div>
        </div>
      </div>
    </Container>
  );
}

export default Inicio;