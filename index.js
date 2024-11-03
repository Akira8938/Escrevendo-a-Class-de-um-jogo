while (true) {

 
    class Heroi {
        // Construtor da classe para definir propriedades iniciais
        constructor(nome, idade, tipo) {
            this.nome = nome;
            this.idade = idade;
            this.tipo = tipo;
        }

      
        atacar() {
            let ataque; // Variável para armazenar o tipo de ataque

           
            switch (this.tipo.toLowerCase()) { 
                case "mago":
                    ataque = "magia";
                    break;
                case "guerreiro":
                    ataque = "espada";
                    break;
                case "monge":
                    ataque = "artes marciais";
                    break;
                case "ninja":
                    ataque = "shuriken";
                    break;
                default:
                    ataque = "ataque desconhecido"; // Caso tipo não seja válido
            }

            // Exibe a mensagem de ataque
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }

        // Método para realizar múltiplos ataques usando um laço de repetição
        atacarMultiplasVezes(vezes) {
            for (let i = 0; i < vezes; i++) {
                this.atacar();
            }
        }
    }

    // Função para criar um herói a partir das entradas do usuário
    function criarHeroi() {
        const nome = prompt("Digite o nome do herói:");
        const idade = parseInt(prompt("Digite a idade do herói:"), 10);
        const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja):");

        // Cria o objeto herói com as informações fornecidas
        const heroi = new Heroi(nome, idade, tipo);

        // Pergunta quantas vezes o herói deve atacar
        const vezes = parseInt(prompt("Quantas vezes o herói deve atacar?"), 10);

        // Realiza os ataques múltiplos
        heroi.atacarMultiplasVezes(vezes);
    }
    // Chama a função para iniciar o processo
    criarHeroi();

    let opcao = prompt('Deseja continuar? (s/n)');

    if (opcao.toLowerCase() !== 's') {
        break;
    }
}
