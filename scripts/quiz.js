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

        function startCountdown() {
            countdownInterval = setInterval(updateCountdown, 1000);
        }

        function updateCountdown() {
            const countdownElement = document.getElementById('countdown');
            countdownElement.textContent = `00:${countdown < 10 ? '0' : ''}${countdown}`;
            countdown--;

            if (countdown === -1) {
               
                // Avançar para a próxima pergunta ou encerrar o quiz
                
                
                if (currentQuestion < 10) { // Altere para o número total de perguntas
                    currentQuestion++;
                    // Redirecionar para a próxima pergunta
                    passarQuestao();
                    countdown = 20;
                } else {
                    // Encerrar o quiz, você pode redirecionar para uma página de resultado ou exibir uma mensagem de conclusão.
                    alert('Quiz encerrado! Você respondeu todas as perguntas.');
                }
            }
        }

        function responder(resposta) {
            // Lógica para verificar a resposta aqui
            // Você pode adicionar um sistema de pontuação ou feedback aqui
            // Por exemplo, você pode usar um objeto JavaScript para rastrear as respostas corretas e pontuação.
            // Exemplo:
            const respostasCorretas = {
                1: 'D',2: 'D',3: 'D',4: 'D',5: 'D',6: 'D',7: 'D',8: 'D',9: 'D',10: 'D' // Mapear a resposta correta para cada pergunta
                // Adicione as respostas corretas para as outras perguntas
            };

            if (resposta === respostasCorretas[currentQuestion]) {
                pontuação ++;
                alert(`Sua pontuação ${pontuação}`);

                
            } else {
                alert('Resposta incorreta. Tente novamente.');
                
            }

            // Avançar para a próxima pergunta
            if (currentQuestion < 10) { // Altere para o número total de perguntas
                currentQuestion++;
                passarQuestao();
                
            } else {
                // Encerrar o quiz, você pode redirecionar para uma página de resultado ou exibir uma mensagem de conclusão.
                alert('Quiz encerrado! Você respondeu todas as perguntas.');
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
                countdown = 20;
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
                countdown = 20;
                n_perg .innerText = "8/10";
                perg.innerText = "Qual é uma das consequências do excesso de elementos destinados à comunicação visual?";
                a.innerText = "Melhoria na estética das cidades";
                b.innerText = "Estímulo à expressão artística";
                c.innerText = "Desconforto visual para a população";
                d.innerText = "Nenhuma das anteriores";
            }
            else if (currentQuestion == 9 ) {
                countdown = 20;
                n_perg .innerText = "9/10";
                perg.innerText = "Quais são os tipos de elementos que contribuem para o desconforto visual gerado pela comunicação visual em excesso?";
                a.innerText = "Obras de arte públicas e usinas";
                b.innerText = "Sinalização de trânsito e pichações";
                c.innerText = "Espaços verdes e parques";
                d.innerText = "Cartazes publicitários e outdoors";
            }
            else {
                countdown = 20;
                n_perg .innerText = "10/10";
                perg.innerText = "Quais são alguns dos elementos tóxicos liberados durante os acidentes nucleares?";
                a.innerText = "Oxigênio, nitrogênio, argônio";
                b.innerText = "Ferro, cobre, alumínio";
                c.innerText = "Estrôncio, iodo, césio, cobalto, plutônio";
                d.innerText = "Nenhumas das anteriores";
            }
        }
    

        
        // Iniciar o contador assim que a página for carregada
        window.onload = startCountdown;