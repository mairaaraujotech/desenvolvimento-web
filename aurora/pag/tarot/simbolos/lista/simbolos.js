const precos = {
    'Precipício': 'O risco e a fé. O limite entre o conhecido e o desconhecido.',
    'Trouxa': 'Carregar apenas o essencial. Expeciências passadas',
    'Rosa Branca':  'Pureza e Inocência. Ausência de malícia, medo ou julgamento',
    'Cachorro': 'Instinto animal, fidelidade e Proteção. Conexão com a natureza intuitiva.',
    'Sol Branco': 'O otimismo do início de um novo ciclo. A luz do espírito e a consciência divina. Proteção superior.',
    'Montanhas Nevadas': 'Planos superiores, desafios superados. O gelo fala sobre preservar o que é essencial, sobre a cristalização da consciência. Fala sobre uma mente fria, no sentido de lúcida e objetiva',
    'Pena Vermelha': 'Energia Vital, paixão e força de vontade. O impulso que nos leva a agir.',
    'Olhar para o Alto': 'Desconexão com a matéria e foco no ideal. Sintonia com o Universo',
    'Braço Erguido': 'Antena para o Domínio Espiritual e para o Domínio Mental. Canalizar inspiração e transformá-la em ação.',
    'Mão apontando para baixo': 'Conexão com o que éterreno e material. Assim em cima como embaixo. A execução prática do que foi planejado.',
    'Leminiscata': 'Domínio sobre os ciclos e a mente. Ausência de limitação nos pensamentos. A compreensãod e que a energia é eterna.',
    'Os Quatro Naipes do Tarot': 'Ter todas as ferramentas necessárias para vencer.',
    'Túnica Branca': 'Pureza de Espírito. A base ética e a alma limpa por trás das intenções.',
    'Manto Vermelho': 'Paixão, poder e experiência. O vermelho também representa o sangue, a vida.',
    'Ouroboros': 'Renovação eterna, sabedoria, a autossuficiencia, o entendimento de que o fim é apenas um novo começo.',
    'Flores': 'Aspirações e desejos realizados. O florescimento das ideias.',
    'Colunas do Templo de Salomão': 'B e J: Boaz (Negra) e Jachin (Branca). A dualidade: luz/sombra, positivo/negativo, masculino/feminino. O equilíbrio dos opostos.',
    'Véu com romãs': 'A proteção do inconsciente e a fertilidade oculta. O que está escondido atrás das aparências. Só entra quem está pronto para ver a verdade.',
    'Pergaminho': 'A Lei Maior e o conhecimento oculto. Sabedoria que não é ensinada em escolas, mas acessada pela intuição e estudo profundo.',
    'Lua aos Pés': 'Domínio sobre as emoções e o subconsciente. Conexão com os ciclos femininos, as marés emocionais e os sonhos.',
    'Cruz Solar': 'O equilíbrio entre os quatro elementos. A união do espiritual com o material.',
    'Coroa de Ísis': 'As fases da Lua, a conexão com a divindade feminina e o tempo que as coisas levam para maturar. ',
    'Manto Azul': 'O elemento Água, fluidez emocional e a profundidade dos sentimentos que correm como um rio.',
    'Mar': 'O reservatório imenso do inconsciente coletivo.',
    'Símbolo de Vênus': 'O amor, a beleza e a harmonia. O poder feminino, a diplomacia e a valorização do que é belo e estético.',
    'Campo de Trigo': 'Colheita, fertilidade e nutrição. Abundância material e o resultado concreto de algo que foi plantado e cuidado.',
    'Coroa de Doze Estrelas': 'Domínio sobre o tempo (meses) e o zodíaco. Conexão com os ciclos naturais e a sabedoria cósmica aplicada ao dia a dia.',
    'Cetro com Orbe': 'Poder de governar o mundo material. Liderança através do afeto e da criatividade, não pela força bruta.',
    'Romãs': 'Fertilidade, gestação e desejos. A capacidade de dar luz a novos projetos, ideias ou até mesmo vida física.',
    'Trono de Pedra': 'O poder que não se abala; a base sólida de um projeto ou instituição.' ,
    'Cruz Ansata (ou Ankh)': 'Símbolo egípcio da vida. O direito de governar e a responsabilidade sobre a vida dos súditos.',
    'Globo na Mão Esquerda': 'Domínio sobre o mundo material. Ter o controle da situação "na palma da mão"; visão estratégica.',
    'Armadura': 'Prontidão para o combate. Proteção e autoridade; estar sempre preparado para defender seu território.',
    'Montanhas Áridas': 'Ambição e resiliência.	A natureza indomável que ele conquistou; a dureza necessária para manter o poder.',
    'Cabelos e Barba Brancos': 'Sabedoria e experiência.	A autoridade que vem do tempo e das lições aprendidas na prática.',
    'Cabeça de Carneiro': 'Signo de Áries (regente do arcano).	Liderança, iniciativa, determinação e uma pitada de teimosia.',
    'Mitra': 'Domínio sobre os três mundos (Físico, Mental e Espiritual).	Autoridade completa e sabedoria que abrange todas as áreas da vida.',
    'Cetro de Três Cruzes': 'Cruzes	Poder sobre a Igreja e a tradição.	O respeito ao que já foi testado e aprovado pelo tempo; o poder da fé.',
    'Chaves Cruzadas': 'As chaves do reino dos céus (Doutrina e Vida).	O acesso ao conhecimento que estava trancado. É o "desbloqueio" de uma habilidade.',
    'Dois Discípulos': 'A transmissão do conhecimento (Mestre e Aluno).	Estudo, mentoria e a importância de fazer parte de uma comunidade ou grupo.',
    'Mão de Papa': 'Benção e ensino (dois dedos levantados, dois dobrados).	A ponte entre o que é visível e o que é invisível; a didática.',
    'Duas Colunas': 'Estabilidade e ordem institucional. Diferente das colunas da Sacerdotisa (Mistério), estas são sólidas e estruturadas.',
    'Tapete Quadriculado': 'O caminho da vida e a dualidade humana.	O chão onde pisamos; a prática cotidiana dentro de regras estabelecidas.',
    '': '',
    '': '',
    '': '',
    '': '',
};
const listaElemento = document.getElementById('lista-ordenada');

Object.entries(precos)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([chave, valor]) => {
        const itemLista = document.createElement('li');
        
        // Verifica: se for número, usa toFixed(2). Se não, usa o valor puro.
        const valorFormatado = typeof valor === 'number' 
            ? `R$ ${valor.toFixed(2)}` 
            : valor;

        itemLista.innerHTML = `
            <span class="chave">${chave}:</span> 
            <span class="valor">${valorFormatado}</span>
        `;
        
        listaElemento.appendChild(itemLista);
    });