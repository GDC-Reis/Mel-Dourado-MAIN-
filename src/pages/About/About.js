import './About.css'

import Footer from '../../components/Footer'

import img1 from '../../images/Benedito_Patriarca.jpeg';
import img2 from '../../images/Eliza_Matriarca.jpeg';

const About = () => {
    return ( 
        <div className='main_page_sobre'>
            <h1 className="title_page_sobre">Sobre</h1>

            <div className='container_grid'>

                <div className='div_continar_grid_content'>
                    
                    <div>
                        <h1 className='div_container_grid_content_title_benedito'>Benedito (Patriarca)</h1>
                        <p className='content_patriarca'>
                        Há mais de trinta anos, Benedito iniciou uma jornada que não apenas moldou sua vida, mas também deixou uma marca duradoura na história de sua família. 
                        Natural de uma pequena cidade, Benedito cresceu cercado por tradições familiares e valores sólidos. 
                        Desde jovem, ele nutria uma paixão pela natureza e sempre buscava maneiras de conectar-se com o meio ambiente ao seu redor.<br/><br/>

                        Foi durante uma conversa casual com três grandes amigos que a semente da ideia começou a germinar. 
                        Juntos, eles compartilhavam a admiração pela apicultura e decidiram dar os primeiros passos na criação de abelhas e produção de mel. 
                        Uniram forças, experiências e entusiasmo para criar uma parceria que se tornaria um pilar sólido em suas vidas.<br/><br/>

                        Os primeiros anos foram desafiadores, marcados por aprendizado constante e superação de obstáculos. 
                        Benedito e seus amigos mergulharam de cabeça na arte da apicultura, adquirindo conhecimentos sobre o comportamento das abelhas, as diferentes variedades de flores e os métodos de produção de mel. 
                        Essa jornada os aproximou ainda mais, fortalecendo os laços de amizade e solidariedade entre eles.<br/><br/>

                        Com o tempo, a pequena iniciativa cresceu e se transformou em um negócio próspero. 
                        Benedito e seus amigos, agora experientes apicultores, conquistaram a confiança dos consumidores locais com a qualidade excepcional de seu mel. 
                        A marca que construíram tornou-se sinônimo de autenticidade e dedicação à natureza.<br/><br/>

                        O patriarca Benedito não apenas se destacou como um empreendedor de sucesso, mas também como um líder em sua comunidade. 
                        Além de fornecer mel de alta qualidade, ele se tornou um defensor ativo da preservação ambiental, incentivando práticas sustentáveis na apicultura e promovendo a conscientização sobre a importância das abelhas para o ecossistema.<br/><br/>

                        Ao longo das décadas, a história de Benedito e seus amigos no mundo do mel não apenas enriqueceu suas vidas, mas também se tornou um legado para as gerações futuras. 
                        Seus descendentes aprenderam não apenas sobre a arte da apicultura, mas também sobre os valores de trabalho árduo, colaboração e amor pela natureza que moldaram a trajetória do patriarca Benedito e seus amigos.

                        </p>
                    </div>
                    
                    <img className='container_grid__image_benedito' src={img1} alt='Imagem Benedito Patriarca da Familia'/>

                </div>
                
                <div className='div_continar_grid_content'>
                    
                    <img className='container_grid__image_eliza' src={img2} alt='Imagem Eliza Matriarca da Familia'/>

                    <div className='div_container_content_eliza'>

                        <h1 className='div_container_grid_content_title_eliza'>Eliza (Matriarca)</h1>
                        <p className='content_matriarca'>
                        Elzia Odette, a matriarca da família, desempenhou um papel crucial na jornada de sucesso iniciada por seu marido, Benedito, na produção de mel. 
                        Seu nome se entrelaça de maneira indissociável com a história da família, sendo uma mulher de força, determinação e habilidades extraordinárias.<br/><br/>

                        Desde os primeiros dias da empreitada apícola de Benedito e seus amigos, Elzia Odette esteve ao lado de seu esposo, compartilhando não apenas o título de parceira de vida, mas também o compromisso com o desenvolvimento do negócio. 
                        Com uma paixão semelhante pela natureza e uma habilidade natural para a organização, ela desempenhou um papel fundamental na consolidação do empreendimento familiar.<br/><br/>

                        A expertise de Elzia Odette não se limitou apenas à administração da casa; ela mergulhou de cabeça na apicultura, contribuindo ativamente com seus conhecimentos e habilidades. 
                        Seja no cuidado com as colmeias, na seleção criteriosa das áreas de coleta de néctar ou na supervisão da produção, Elzia Odette demonstrou uma destreza admirável. 
                        Sua presença e esforços incansáveis foram essenciais para a expansão do negócio, tornando-a uma figura indispensável na operação diária.<br/><br/>

                        Além de suas contribuições práticas, Elzia Odette também desempenhou um papel crucial na promoção da marca da família. Com sua perspicácia, ela percebeu a importância de construir uma imagem sólida e autêntica para o mel produzido por Benedito e seus amigos. 
                        Seu envolvimento nas comunicações e relações públicas ajudou a estabelecer a reputação da família como apicultores dedicados e apaixonados. <br/><br/>

                        Mas seu impacto vai além do sucesso comercial. Elzia Odette é admirada por sua capacidade de unir a família em torno de objetivos comuns e valores fundamentais. 
                        Sua visão de sustentabilidade e respeito à natureza influenciou não apenas as práticas de negócios, mas também a maneira como a família encara a vida e o meio ambiente.<br/><br/>

                        Hoje, Elzia Odette não é apenas a matriarca da família, mas uma inspiração para gerações futuras. 
                        Seu legado perdura não apenas nos potes de mel produzidos com amor, mas na força e no espírito de união que ela incutiu na família enquanto enfrentavam os desafios e celebravam os triunfos ao longo de sua jornada apícola.
                        </p>
                    </div>
                    
                </div>

            </div>

            <Footer/>
        </div>
     );
}
 
export default About;