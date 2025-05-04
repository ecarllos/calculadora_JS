Calculadora Web

Uma calculadora simples feita com HTML, CSS e JavaScript, projetada para reforçar os conhecimentos em lógica de programação, DOM e estilização com responsividade básica.

🔗 Acesse o projeto online: https://ecarllos.github.io/calculadora_JS/

🔧 Funcionalidades

Interface responsiva com botões dinâmicos.

Operações básicas: adição, subtração, multiplicação e divisão.

Entrada de números com ponto decimal.

Limpar número (backspace) e limpar tela.

Exibição do resultado no topo.

🔎 Tecnologias Utilizadas

HTML5: estrutura da interface.

CSS3: estilização moderna com grid, flexbox e gradientes.

JavaScript: lógica funcional da calculadora e manipulação do DOM.

📂 Estrutura dos Arquivos

index.html

Responsável por:

Organizar os botões da calculadora usando grid.

Usar aria-label para tornar a calculadora mais acessível.

Vincular o script (script.js) e estilo (style.css).

style.css

Principais recursos:

Layout centralizado usando transform: translate().

Paleta escura com destaque em laranja para o botão de igual.

Grid responsivo para distribuição dos botões.

Destaque visual para hover e botões especiais.

script.js

Comportamento implementado:

Armazena cada entrada do usuário em um array (valor).

Usa eval() para calcular a expressão completa.

Atualiza dinamicamente a tela conforme o usuário digita.

Funções auxiliares:

LimparTela(): limpa tudo.

LimparNumero(): remove o último caractere.

calcular(): executa o cálculo com eval().

⚠️ Aviso sobre eval()

Este projeto usa eval() para avaliar expressões matemáticas de forma simples. Em projetos reais, isso pode abrir brechas de segurança, portanto deve ser evitado ou substituído por um parser matemático seguro.

🔄 Melhorias Futuras

Adicionar suporte a teclado.

Melhor tratamento de erros (ex: divisão por zero).

Criar histórico de operações.

Melhorar acessibilidade com foco no teclado.

💼 Autor

Desenvolvido por Eduardo como parte de seu aprendizado em JavaScript e lógica de programação com foco em desenvolvimento web.

📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar!

