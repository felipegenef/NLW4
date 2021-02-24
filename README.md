# NLW4 Moveit

<h1>Aula 1</h1>
<h2>Introdução</h2>
<p>
Moveit é um aplicativo que tem como estratégia fazer com que você não fique parado por muito tempo.
A tecnica de Pomodoro diz que a cada 25 minutos se deveria dar uma pausa pequena de 5 minutos para ter melhor desempenho, o que está totalmente alinhado com a proposta do Moveit!
</p>
<p>
Nesta documentação vou escrevendo os aprendzados e impressões de cada aula , assim como mostrar exemplos de cada nova funcionabilidade. Assim, conseguirei ter um material de consulta para projetos futuros e disponibilizarei esse repositório como público para que outros devs possam utilizá-lo para consulta também.
</p>
<h2>Fluxo de uma API</h2>
<img src="./moveit-next/README_ASSETS/fluxo_de_uma_api.png" width="100%">
<h2>Criando projeto React</h2>
<ul>
<li>
Comando para criar um projeto react pelo <strong>YARN</strong> e com <strong>TYPESCRIPT</strong> é :  
</li>
<br/>
<p>
<strong>yarn create react-app NomeDoProjeto --template=typescript</strong>
</p>
<li>
Comando para criar um projeto react pelo <strong>NPM</strong> e com <strong>TYPESCRIPT</strong> é :  
</li>
<br/>
<p>
<strong>npx create-react-app NomeDoProjeto --template=typescript</strong>
</p>
</ul>
<h3>Rodando projeto React</h3>
<ul>
<li>
Comando para rodar projeto react pelo <strong>YARN</strong> é :  
</li>
<br/>
<p>
<strong>yarn start</strong>
</p>
<li>
Comando para rodar projeto react pelo <strong>NPM</strong> é :  
</li>
<br/>
<p>
<strong>npm start</strong>
</p>
</ul>
<h3>Como react funciona?</h3>
<p>
Uma vez carregado o basico da pagina pelo HTML o React pega os dados e criar outros componentes HTML utiizando <strong>Javascript</strong>. A sintaxe de se utilizar um componente JS parecendo um HTML é o <strong>JSX</strong>.
</p>
<h2>Componentes</h2>
<p>
São as "Tags HTML" do react. Com  elas por meio do REACT DOM o react consegue criar componentes HTML.Pode se dizer que tudo no react são componentes. Para se criar um componente, deve-se criar uma função e exporta-la como default de seu arquivo. Reutilize os componentes em vários lugares, isso ajuda muito em manutenção e para diminuir a quantidade de codigo da aplicação.
</p>
<h3>Propriedades(Props)</h3>
<p>
São as caracteristicas de cada componente que podem ser enviadas do componente pai. São passadas via parametro na função como mostram as imagens abaixo.
</p>
<img src="./moveit-next/README_ASSETS/props.png" width="100%">
<img src="./moveit-next/README_ASSETS/props2.png" width="100%">
<h3>Children</h3>
<p>
Declaração de props default do react que surge quando se passa um parâmetro dentro de um componente. Por padrão , quando isso ocorre se pode pegar esses parâmetros dentro de <strong>props.children</strong>.
</p>
<img src="./moveit-next/README_ASSETS/children.png" width="100%">
<img src="./moveit-next/README_ASSETS/children2.png" width="100%">
<h2>Estado</h2>
<p>
É a "memória" de um componente. É necessário utilizar estado quando um componente precisa guardar dados e propriedades dinâmicas sobre si mesmo. 
</p>
<h3>Manipular estado(HOOKS)</h3>
<h4>useState</h4>
<p>
É o como fazemos para mudar o estado de um componente. No exemplo abaixo fizemos um contador e uma função que utiliza do useState para atualizar o valor de counter. Caso haja mais de uma propriedade que se deseja mudar, pode-se utilizar um objeto no lugar do numero  counter e colocar varias propriedades modificando somente as propriedades desse objeto que se deseja.
</p>
<img src="./moveit-next/README_ASSETS/usestate.png" width="100%">
<h2>Fontes</h2>
<p>
Para utilizar fontes do goolge entramos no site de google fonts e procuramos pelas fontes Inter de tamanho 400, 500 e 600 e a fonte Rajdhani de tamanho 600. Uma vez adicionados pegamos o link gerado na pagina e colamos em index.html.
</p>
<img src="./moveit-next/README_ASSETS/fonts.png" width="100%">
<h2>CSS global</h2>
<p>
Criamos uma pasta chamada styles e dentro um arquivo css onde setamos alguns parametros globais para nossa aplicação. Dentre eles estava que todos os componentes teriam margem e padding 0 por default e que a cor de fundo do nosso body seria #f2f3f5
</p>
<h2>Responsividade</h2>
<p>
para responsividade, setamos o padrão da fonte da nossa aplicação para 1rem (16 px por padrão), e colocamos alguns  @media para que quando nossas telas diminuam de tamanho, as fontes se adaptem diminuindo 1px. Se utilizamos rem como medida, quando o tamanho da tela diminui , todos os componentes diminuem junto, fazendo assim, com que nosso app seja extremamente responsivo.
</p>
<img src="./moveit-next/README_ASSETS/responsividade.png" width="100%">
<h2>Experience Bar</h2>
<p>
Criamos o experience bar utilizando css e o componente da experience bar.
</p>
<img src="./moveit-next/README_ASSETS/experience_bar_css.png" width="100%">
<img src="./moveit-next/README_ASSETS/experience_bar_component.png" width="100%">
<h1>Aula 2</h1>
<h2>Next</h2>
<h3>O que é?</h3>
<p>
Nextjs é um framework em cima do react que facilita o uso do mesmo. Habilita trabalhar com <strong>SSR</strong>, <strong>SPA</strong> e <strong>SSG</strong>. O next gera um servidor node numa camada intermediária entre o nosso backend e o usuário, interpretando e gerando os arquivos html e css nele antes de enviar para o cliente. Com isso resolvemos varios problemas de SEO(system engine optmization) que aconteciam quando crawlers tentavam acessar um site que somente era gerado em Javascript e não conseguiam por não entenderem Javascript. O nome dessa solução que o next proporciona é <strong>SSR</strong>, ou server side rendering.
</p>
<h3>SSR(server side rendering)</h3>
<img src="./moveit-next/README_ASSETS/fluxo_next_e_SSR.png" width="100%">
<h3>SPA(single page application)</h3>
<p>
Em uma SPA toda a interface é construida no frontend. Mantemos algumas coisas na aplicação e mudamos somente o diferencial de uma tela para outra pegando dados do backend e reconstruindo os componentes.O react tradicional (sem o nextjs) utiliza o SPA.
</p>
<h3>SSG(static site generation)</h3>
<p>
Este modelo é um dos pioneiros de quando se trabalhavam em sites. Ele consiste em fornecer um arquivo HTML , um CSS e outro JS puro, sem alterações por dados do backend. Porém com o surgimento do next podemos gerar arquivos puros e estáticos, mas que se atualizam de tempos em tempos disponibilizando uma versão estatica mais atualizada para ser distribuida.
</p>
<h2>Criando projeto NEXT</h2>
<ul>
<li>
Comando para criar um projeto next pelo <strong>YARN</strong> é :  
</li>
<br/>
<p>
<strong>yarn create next-app NomeDoProjeto</strong>
</p>
<li>
Comando para criar um projeto next pelo <strong>NPM</strong> é :  
</li>
<br/>
<p>
<strong>npx create-next-app NomeDoProjeto</strong>
</p>
</ul>
<h3>Migramos nosso projeto para NEXT</h3>
<p>
Após rodarmos nosso comando de criar um projeto next, copiamos e colamos todos os arquivos criados na aula 1 para nosso mais recente projeto "moveit-next".
</p>
<h3>_app.js</h3>
<p>
Arquivo em comum entre todas as páginas. Tudo que estiver declarado dentro dele não irá mudar ao navegar de uma pagina para outra.
</p>
<h3>Instalar typescript no Next com YARN</h3>
<ul>
<li>
<p>
1 Trocar extensão .js do arquivo index.js e _app.js para index.tsx e _app.tsx
</p>
</li>
<li>
<p>
2 rodar comando para instalar typescript
</p>
</li>
<p>
<strong>yarn add typescript @types/react @types/react-dom @types/node -D</strong>
</p>
<li>
<p>
3 comando para rodar a aplicação
</p>
</li>
<p>
<strong>Yarn dev</strong>
</p>
</ul>
<h3>Declarar fontes no NextJS</h3>
<img src="./moveit-next/README_ASSETS/fontes_nextjs.png" width="100%">
<h3>CSS modules</h3>
<img src="./moveit-next/README_ASSETS/css_modular.png" width="100%">
<h2>Mudar ícone e título da aba no browser</h2>
<img src="./moveit-next/README_ASSETS/icone_na_aba.png" width="100%">
<img src="./moveit-next/README_ASSETS/titulo_na_pagina.png" width="100%">
<h2>Componentes criados no Final da aula</h2>
<h3>Profile</h3>
<img src="./moveit-next/README_ASSETS/profile_component.png" width="100%">
<h3>Compelated Challenges</h3>
<img src="./moveit-next/README_ASSETS/compleated_challenges_component.png" width="100%">
<h3>CountDown</h3>
<p>
ContDown foi o ultimo componetne da aula 2, nele trabalhamos com estado criando um contador como mostra abaixo.
</p>
<img src="./moveit-next/README_ASSETS/componente_contdown.png" width="100%">
<p>
A logica para o contador foi utilizando hooks como mostra abaixo
</p>
<img src="./moveit-next/README_ASSETS/logica_contdown.png" width="100%">
