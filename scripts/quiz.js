let currentQuestion = 1;
        let countdown = 20; // Tempo em segundos
        let pontuação = 0;
        let countdownInterval;
        let n_perg = document.querySelector("#N_pergunta");
        let perg = document.querySelector("#pergunta_do_coiso"); 
        let a = document.querySelector("#resposta_A"); 
        let b = document.querySelector("#resposta_B"); 
        let c = document.querySelector("#resposta_C"); 
        let d = document.querySelector("#resposta_D"); 
        let main = document.querySelector("#main_do_quiz");

        function startCountdown() {
            countdownInterval = setInterval(updateCountdown, 1000);
        }

        function updateCountdown() {
            const countdownElement = document.getElementById('countdown');
            countdownElement.textContent = `00:${countdown < 10 ? '0' : ''}${countdown}`;
            countdown--;

            if (countdown === -1) {
                
                if (currentQuestion < 10) { 
                    currentQuestion++;
                    passarQuestao();
                    countdown = 20;
                } else {
                    premios();
                }
            }
        }

        function responder(resposta) {
            const respostasCorretas = {
                1: 'D', 2: 'B', 3: 'A', 4: 'C', 5: 'D', 6: 'C', 7: 'D', 8: 'C', 9: 'D', 10: 'C'

            };

            if (resposta === respostasCorretas[currentQuestion]) {
                pontuação ++;
            }

            if (currentQuestion < 10) { 
                currentQuestion++;
                passarQuestao();
                
            } else {
                premios();
            }
        }

        function passarQuestao(){
            
            
            if (currentQuestion == 2 ) {
                countdown = 20;
                n_perg .innerText = "2/10";
                perg.innerText = "Quais das alternativas abaixo não é uma causa de poluição terrestre?";
                a.innerText = "Contato com o lixo sólido";
                b.innerText = "Gases poluentes";
                c.innerText = "Contato com produtos químicos";
                d.innerText = "Todas são causas";
            }
            else if (currentQuestion == 3 ) {
                countdown = 20;
                n_perg .innerText = "3/10";
                perg.innerText = "Quem é(são) o(s) responsável(is) pela poluição hídrica?";
                a.innerText = "Objetos industriais e esgotos";
                b.innerText = "Gases poluentes";
                c.innerText = "Gases produzidos por veículos";
                d.innerText = "Carbono, hidrogênio e oxigênio";
            }
            else if (currentQuestion == 4 ) {
                countdown = 20;
                n_perg .innerText = "4/10";
                perg.innerText = "Qual de todas as poluições é a pior?";
                a.innerText = "Hídrica";
                b.innerText = "Atmosférica";
                c.innerText = "Radioativa";
                d.innerText = "Visual";
            }
            else if (currentQuestion == 5 ) {
                countdown = 30;
                n_perg .innerText = "5/10";
                perg.innerText = "Das alternativas abaixo, qual delas não apresenta um possível efeito da radiação em seres humanos?";
                a.innerText = "Mutações gênicas/genéticas";
                b.innerText = "Patologias";
                c.innerText = "Deficiências";
                d.innerText = "Taquicardia";
            }
            else if (currentQuestion == 6 ) {
                countdown = 20;
                n_perg .innerText = "6/10";
                perg.innerText = "Qual é a principal fonte de poluição do ar ou atmosférica?";
                a.innerText = "Uso de plásticos descartáveis";
                b.innerText = "Consumo excessivo de energia elétrica";
                c.innerText = "Emissões de veículos automotores";
                d.innerText = "Uso de pesticidas na agricultura";
            }
            else if (currentQuestion == 7 ) {
                countdown = 20;
                n_perg .innerText = "7/10";
                perg.innerText = "Qual o principal impacto da poluição do ar ou atmosférica?";
                a.innerText = "Aumento da biodiversidade";
                b.innerText = "Melhoria da qualidade do ar";
                c.innerText = "Aumento da produção agrícola";
                d.innerText = "Doenças cardiovasculares";
            }
            else  if (currentQuestion == 8 ) {
                countdown = 30;
                n_perg .innerText = "8/10";
                perg.innerText = "Qual é uma das consequências do excesso de elementos destinados à comunicação visual?";
                a.innerText = "Melhoria na estética das cidades";
                b.innerText = "Estímulo à expressão artística";
                c.innerText = "Desconforto visual para a população";
                d.innerText = "Nenhuma das anteriores";
            }
            else if (currentQuestion == 9 ) {
                countdown = 30;
                n_perg .innerText = "9/10";
                perg.innerText = "Quais são os elementos que contribuem para o desconforto visual gerado pela comunicação visual em excesso?";
                a.innerText = "Obras de arte públicas e usinas";
                b.innerText = "Sinalização de trânsito e pichações";
                c.innerText = "Espaços verdes e parques";
                d.innerText = "Cartazes publicitários e outdoors";
            }
            else {
                countdown = 30;
                n_perg .innerText = "10/10";
                perg.innerText = "Quais são alguns dos elementos tóxicos liberados durante os acidentes nucleares?";
                a.innerText = "Oxigênio, nitrogênio, argônio";
                b.innerText = "Ferro, cobre, alumínio";
                c.innerText = "Estrôncio, iodo, césio, cobalto, plutônio";
                d.innerText = "Nenhumas das anteriores";
            }
        }
        function premios(){

            if (pontuação <= 4 ){
                main.innerHTML = `
                <link rel="stylesheet" href="../css'/parabens.css">
            <section>
                <h1 id = "qt_acertos"></h1>
                <img id="imagem_trofeu" src="../assets/trofeu de bronze.svg" alt="Imagem de um troféu dourado que serve para indentificar o nível de intelecto do indivíduo bonito e legal que irá realizar o percurso difícil e quase impossível que irá provar o seu nível de superioridade dele a raça Humana oque vai acabar tornando ele um homo-sapiens2.0">
                <h2>ESTUDE MAIS!</h2>
    
                <a href="./revisao.html">
                    <button class="botoes">REVER</button>
                </a>
    
                <a href="./regras_quiz.html">
                    <button class="botoes">REINICIAR</button>
                </a>
            </section>
            </main>
                `;
            let mostrar_pont= document.querySelector("#qt_acertos");
            mostrar_pont.innerText = `Você acertou ${pontuação}/10 questões`;
            }
            else if (pontuação > 4 && pontuação <= 7){
                main.innerHTML = `
                <link rel="stylesheet" href="../css'/parabens.css">
            <section>
                <h1 id = "qt_acertos"></h1>
                <img id="imagem_trofeu" src="../assets/trofeu de prata.svg" alt="Imagem de um troféu dourado que serve para indentificar o nível de intelecto do indivíduo bonito e legal que irá realizar o percurso difícil e quase impossível que irá provar o seu nível de superioridade dele a raça Humana oque vai acabar tornando ele um homo-sapiens2.0">
                <h2>DÁ PARA MELHORAR!</h2>
    
                <a href="./revisao.html">
                    <button class="botoes">REVER</button>
                </a>
    
                <a href="./regras_quiz.html">
                    <button class="botoes">REINICIAR</button>
                </a>
            </section>
            </main>
                `;
            let mostrar_pont= document.querySelector("#qt_acertos");
            mostrar_pont.innerText = `Você acertou ${pontuação}/10 questões`;
            }
            else{
                main.innerHTML = `
                <link rel="stylesheet" href="../css'/parabens.css">
            <section>
                <h1 id = "qt_acertos"></h1>
                <img id="imagem_trofeu" src="../assets/parabens.svg" alt="Imagem de um troféu dourado que serve para indentificar o nível de intelecto do indivíduo bonito e legal que irá realizar o percurso difícil e quase impossível que irá provar o seu nível de superioridade dele a raça Humana oque vai acabar tornando ele um homo-sapiens2.0">
                <h2>PARABÉNS!</h2>
    
                <a href="./revisao.html">
                    <button class="botoes">REVER</button>
                </a>
    
                <a href="./regras_quiz.html">
                    <button class="botoes">REINICIAR</button>
                </a>
            </section>
            </main>
                `;
            let mostrar_pont= document.querySelector("#qt_acertos");
            mostrar_pont.innerText = `Você acertou ${pontuação}/10 questões`;
            }
        }
    
        window.onload = startCountdown;