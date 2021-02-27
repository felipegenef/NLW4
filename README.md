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
<h1>Aula 3</h1>
<h3>Como declarar duas classes CSS no react</h3>
<img src="./moveit-next/README_ASSETS/2css.png" width="100%">
<h2>Logica restante e componentes com condicional para exibição</h2>
<img src="./moveit-next/README_ASSETS/countdown_aula3_1.png" width="100%">
<img src="./moveit-next/README_ASSETS/countdown_aula3_2.png" width="100%">
<img src="./moveit-next/README_ASSETS/countdown_aula3_3.png" width="100%">
<h3>Challenge Box</h3>
<h3>Desafio ativo</h3>
<img src="./moveit-next/README_ASSETS/challengeNotActive.png" width="100%">
<h3>Desafio não ativo</h3>
<img src="./moveit-next/README_ASSETS/challengeActive.png" width="100%">
<h2>Abordagens interessantes em CSS</h2>
<h3>Repeat em grid</h3>
<p>
Utilizado para criar um espaçamento em colunas iguais repetidamente
</p>
<img src="./moveit-next/README_ASSETS/repeat.png" width="100%">
<h3>Filter para opacidade</h3>
<p>
Utilizado filter para diminuir a opacidade de um componente em 10% com hover
</p>
<img src="./moveit-next/README_ASSETS/filter.png" width="100%">
<h2>Context API</h2>
<h3>Declarar contexto</h3>
<p>
Consiste na forma de se fazer a comunicação de um componente isolado para outro. Para isso , precisamos criar um contexto em um arquivo separado como mostra abaixo. Context API é um meio muito útil de resolver a maioria dos problemas que precisariam de REDUX.
</p>
<img src="./moveit-next/README_ASSETS/declarar_context.png" width="100%">
<h3>Disponibilizar contexto globalmente</h3>
<p>
Para disponibilizar o contexto criado acima, precisamos embrulha-lo em nosso _app.tsx para que ele esteja disponivel em toda aplicação.
</p>
<img src="./moveit-next/README_ASSETS/disponibilizar_context.png" width="100%">
<h3>Pegar context em um componente</h3>
<p>
Por fim agora para podermos acessar os dados do contexto precisamos importar o <strong>useContext</strong> e utilizalo para atribuir seu valor em uma variável.
</p>
<img src="./moveit-next/README_ASSETS/pegar_context.png" width="100%">
<h3>Tipar contexto</h3>
<p>
Para que possamos ter acesso aos tipos de dados de um determinado contexto, podemos tipar seu retorno como mostrado abaixo.
</p>
<img src="./moveit-next/README_ASSETS/tipar_contexto.png" width="100%">
<h1>Aula 4</h1>
<h2>CountDown context</h2>
<p>
Nesta aula, finalizamos as funcionabilidades que faltavam para passar de nível ao finalizar uma tarefa, porém, ainda não conseguimos fazer com que o botão de contador resete uma vez que se compelta uma tarefa. Por isso, decidimos passar as funções do contador para uma CONTEXT API assim como o contexto de desafios.
</p>
<img src="./moveit-next/README_ASSETS/counter_context2.png" width="100%">
<p>
Como esse contexto não era utilizado pela aplicação como um todo, e sim mais nos componentes de CountDown e de ChallengeBox, decidimos por embrulhar somente a section da pagina de home nesse contexto como mostrado abaixo.
</p>
<img src="./moveit-next/README_ASSETS/counter_context1.png" width="100%">
<h2>Web Notification</h2>
<h3>Pedir permissão</h3>
<p>
Para enviar notificações para o usuário, primeiro precisamos pedir permissão.
</p>
<img src="./moveit-next/README_ASSETS/request_notification_permition.png" width="100%">
<p>
Para mostrar notificação.
</p>
<img src="./moveit-next/README_ASSETS/show_notification.png" width="100%">
<h3>Audio</h3>
<img src="./moveit-next/README_ASSETS/audio.png" width="100%">
<h1>Aula 5</h1>
<h2>Storage</h2>
<h3>Local Storage</h3>
<p>
Storage baseado em <strong>chave e valor e em texto</strong>. Esse storage se mantém mesmo após dar refresh na página.
</p>
<h3>Session Storage</h3>
<p>
Storage similar ao Local storage, porém <strong>perde seus dados ao finalizar a sessão</strong>(fechar browser ou reiniciar o pc).
</p>
<h3>IndexDB e webSQL</h3>
<p>
Storages locais similares a um SQLite.
</p>
<h3>Cookies</h3>
<p>
Uma das formas mais antigas de se armazenar dados, muito similar ao localStorage, com algumas funcionabilidades a mais. Dentre elas existem as de salvar  informações para um domínio apenas, a de informar quando essa informação expira e a de limitar para httpOnly ou secure(https only).
</p>
<img src="./moveit-next/README_ASSETS/save_cookies.png" width="100%">
<h2>Adicionando cookies</h2>
<ul>
<li>
Comando para adicionar a biblioteca de cookies pelo <strong>YARN</strong> é :  
</li>
<br/>
<p>
<strong>yarn add js-cookie</strong>
</p>
<li>
Comando para adicionar a biblioteca de cookies pelo <strong>NPM</strong> é :  
</li>
<br/>
<p>
<strong>npm i js-cookie</strong>
</p>
</ul>
<h3>DefinitelyTyped</h3>
<p>
Quando uma biblioteca não vem com a tipagem do typescript, geralmente procuramos dentro do repositório <strong>definitelyTyped</strong> uma especie de plugin que disponibilize as tipagens.
</p>
<img src="./moveit-next/README_ASSETS/typed_cookies.png" width="100%">
<ul>
<li>
Comando para adicionar a biblioteca de types pelo <strong>YARN</strong> é :  
</li>
<br/>
<p>
<strong>yarn add @types/js-cookie -D</strong>
</p>
<li>
Comando para adicionar a biblioteca de types pelo <strong>NPM</strong> é :  
</li>
<br/>
<p>
<strong>npm i @types/js-cookie -D</strong>
</p>
</ul>
<h2>GetServerSideProps</h2>
<p>
Para conseguirmos carregar informações da pagina, vamos utilizar de uma ferramenta do next chamada <strong>GetServerSideProps</strong>. Essa função torna aquela página uma página de <strong>SSR</strong>, fazendo assim, com que todo dentro dessa função seja feita no lado do servidor e entregue como propriedades da página.
</p>
<img src="./moveit-next/README_ASSETS/getServerSideProps.png" width="100%">
<h3>Recebendo as props</h3>
<img src="./moveit-next/README_ASSETS/home_props.png" width="100%">
<h3>Setando as props no context</h3>
<img src="./moveit-next/README_ASSETS/rest.png" width="100%">
<h2>LevelUp Modal</h2>
<img src="./moveit-next/README_ASSETS/levelUpModal.png" width="100%">
<h2>Deploy</h2>
<p>
Por fim, para darmos deploy em nossa aplicação utilizamos a <strong>Vercel</strong>. A vercel é a empresa criadora do Next e por isso possui muitos facilitadores para esse framework.
</p>
<h3>Adicionar Vercel CLI</h3>
<ul>
<li>
Comando para adicionar a Vercel CLI é :  
</li>
<br/>
<p>
<strong>npm i -g vercel</strong>
</p>
</ul>
<h3>Login</h3>
<p>
Uma vez criada sua conta no site da Vercel, digite o seguinte comando abaixo e verifique seu email para poder subir sua aplicação.
</p>
<ul>
<li>
Comando para fazer loguin na Vercel CLI :  
</li>
<br/>
<p>
<strong>vercel login</strong>
</p>
</ul>
<h3>Deploy pelo CLI</h3>
<p>
Após terminar todos os passos acima, é só entrar na pasta de seu projeto e rodar o comando:
</p>
<ul>
<li>
Comando para fazer deploy pela primeira vez:  
</li>
<br/>
<p>
<strong>vercel</strong>
</p>
</ul>
<h3>Deploy em produção</h3>
<p>
Uma vez que seu app esteja em produção, quando você subir novamente sua aplicação, a Vercel  cuidará para que enquanto uma aplicação executa o build, a outra se mantenha no ar sem atrapalhar a interação com o usuário final.
</p>
<ul>
<li>
Comando para fazer deploy em produção:  
</li>
<br/>
<p>
<strong>vercel --prod</strong>
</p>
</ul>
<h2>Considerações finais do curso</h2>
<p>
Gostei muito da dinâmica do curso, com bastante prática e vários exemplos de funcionabilidades e tecnologias novas do mercado. Acredito que com essa pequena apostila em forma de documentação qualquer um poderá se aprofundar, mesmo que um pouco na "stack React Next". Recomendo a todos que puderem participar de futuros eventos que o façam. O contato com a comunidade e a troca de conhecimentos geradas no NLW são experiências únicas.
</p>
