# 🎶 Agregador Musical

## 👥 Membros do Grupo  
- André Faria de Souza          - Nível Júnior - andrefariasouza@alunos.utfpr.edu.br  
- Beatriz Bonametti             - Nível Júnior - bonametti@alunos.utfpr.edu.br  
- Bruno Santos Corrêa           - Nível Júnior - correab@alunos.utfpr.edu.br  
- Carlos Fernando dos Santos    - Nível Sênior - carlossantos@alunos.utfpr.edu.br  
- Gabriel Hideki Tutia          - Nível Júnior - gabrieltutia@alunos.utfpr.edu.br  
- Maria Clara dos Santos Furini - Nível Júnior - claraafurinii@gmail.com  
- Murilo Silva Vargas           - Nível Júnior - murilov@alunos.utfpr.edu.br  
- Thayrine Santos Costa         - Nível Júnior - thayrinecosta@alunos.utfpr.edu.br  

---

## 📌 Especificação de Requisitos Funcionais  

### 1. Introdução  

#### 1.1 Objetivo  
Este documento descreve os requisitos funcionais do sistema **Agregador Musical**, uma aplicação web que organiza, recomenda e integra álbuns, músicas e artistas de diferentes plataformas de streaming musical.

O objetivo principal é oferecer ao usuário um ambiente unificado e interativo onde ele possa **explorar, criar, gerenciar, avaliar e compartilhar conteúdos musicais**, com base em suas preferências, histórico de uso e conexões com plataformas externas.

#### 1.2 Escopo  
O sistema permitirá que os usuários:

* Consultem álbuns e músicas provenientes de diferentes serviços de streaming (como Spotify, YouTube Music, entre outros);
* Criem e gerenciem coletâneas e playlists personalizadas com base em músicas e álbuns disponíveis;
* Marquem álbuns como favoritos e organizem seu conteúdo musical por categorias personalizadas;
* Classifiquem álbuns com notas ou avaliações e comentem publicamente sobre eles, incluindo curtir comentários de outros usuários;
* Visualizem informações detalhadas de álbuns, incluindo capa, faixas, artistas participantes e popularidade;
* Acessem sugestões personalizadas com base em preferências e histórico de reprodução;
* Filtrarem e ordenarem os resultados por critérios como gênero, artista, ano, popularidade ou avaliação;
* Reproduzam músicas e álbuns diretamente pelo sistema, utilizando a integração com plataformas externas;
* Compartilhem álbuns e coletâneas em redes sociais ou via link;
* Sigam artistas e recebam notificações de novos lançamentos ou eventos;
* Editem seu perfil de usuário e ajustem preferências musicais;
* Realizem cadastro, login (incluindo login social), recuperação de senha e logout com segurança.

---

### 2. Requisitos Funcionais  

* **RF01 – Organização de Álbuns**  
  O sistema deve permitir ao usuário organizar músicas com base na ideia de álbuns.  

* **RF01 – Organização de Álbuns**
  O sistema deve permitir ao usuário organizar músicas com base na ideia de álbuns.

* **RF02 – Seleção de Álbuns Favoritos**
  O sistema deve permitir que os usuários escolham e marquem seus álbuns favoritos.

* **RF03 – Criação de Coletâneas**
  O sistema deve permitir que os usuários criem novos álbuns em formato de coletâneas personalizadas.

* **RF04 – Gerenciamento de Álbuns**
  O sistema deve permitir que os usuários gerenciem seus álbuns e coletâneas de acordo com diferentes critérios (ex.: ordem, categorias definidas pelo usuário).

* **RF05 – Integração com Plataformas de Streaming**
  O sistema deve se integrar com diferentes plataformas de streaming de música (Spotify, YouTube Music, entre outras) para obter e reproduzir os álbuns.

* **RF06 – Classificação de Álbuns**
  O sistema deve permitir que os usuários classifiquem os álbuns (ex.: atribuindo notas ou avaliações).

* **RF07 – Comentários Públicos**
  O sistema deve permitir que os usuários façam comentários públicos sobre os álbuns.

* **RF08 – Exibição de Popularidade**
  O sistema deve exibir informações sobre a popularidade de cada álbum.

* **RF09 – Reprodução de Álbuns**
  O sistema deve permitir a reprodução dos álbuns a partir das plataformas de streaming integradas.

* **RF10 – Busca de Álbuns e Músicas**
  O sistema deve permitir que os usuários pesquisem álbuns e músicas por nome, artista, gênero ou palavra-chave.

* **RF11 – Filtragem de Álbuns**
  O sistema deve permitir filtrar os álbuns por critérios como gênero musical, artista, ano de lançamento ou popularidade.

* **RF12 – Ordenação de Resultados**
  O sistema deve permitir ordenar os álbuns encontrados por critérios como mais recentes, mais populares ou melhor avaliados.

* **RF13 – Detalhamento de Álbuns**
  O sistema deve exibir informações detalhadas de cada álbum, incluindo capa, lista de músicas, artistas participantes e ano de lançamento.

* **RF14 – Histórico de Reprodução**
  O sistema deve manter um histórico dos álbuns reproduzidos pelo usuário.

* **RF15 – Compartilhamento de Álbuns**
  O sistema deve permitir que os usuários compartilhem álbuns e coletâneas em redes sociais ou por link.

* **RF16 – Criação de Playlists Dinâmicas**
  O sistema deve permitir que o usuário gere playlists automáticas baseadas em critérios, como “mais ouvidas” ou “recomendadas”.

* **RF17 – Recomendações Personalizadas**
  O sistema deve sugerir álbuns e coletâneas ao usuário com base no histórico de uso e preferências.

* **RF18 – Curtidas em Comentários**
  O sistema deve permitir que os usuários curtam ou avaliem os comentários públicos feitos em álbuns.

* **RF19 – Notificações de Atualizações**
  O sistema deve notificar os usuários quando novos álbuns ou músicas forem adicionados em artistas que eles seguem.

* **RF20 – Gerenciamento de Perfil do Usuário**
  O sistema deve permitir que os usuários editem informações básicas de perfil (nome, foto, preferências musicais).

* **RF21 – Gerenciamento de Músicas**
  O sistema deve permitir o cadastro, edição e exclusão de músicas individuais associadas a álbuns.

* **RF22 – Gerenciamento de Artistas**
  O sistema deve permitir o filtro de álbuns e músicas por artistas.

* **RF23 – Gerenciamento de Gêneros**
  O sistema deve permitir o cadastro, edição e exclusão de gêneros musicais.

* **RF24 – Seguir Artistas**
  O sistema deve permitir que o usuário siga ou deixe de seguir artistas para receber atualizações.

* **RF25 – Notificações de Artistas Seguidos**
  O sistema deve notificar o usuário sobre novos lançamentos ou eventos de artistas seguidos.

* **RF26 – Cadastro de Usuário**
  O sistema deve permitir que novos usuários criem uma conta informando nome, e-mail e senha.

* **RF27 – Login de Usuário**
  O sistema deve permitir que os usuários façam login com e-mail e senha cadastrados.

* **RF28 – Recuperação de Senha**
  O sistema deve permitir que o usuário recupere a senha por e-mail em caso de esquecimento.

* **RF29 – Login Social (opcional)**
  O sistema pode permitir login via contas de terceiros (Google, Facebook, etc.).

* **RF30 – Logout**
  O sistema deve permitir que o usuário encerre a sessão de forma segura.

---

### 3. Restrições  

- O sistema depende da disponibilidade das **APIs de terceiros** (Spotify, YouTube Music, etc.) para acesso e reprodução.  

---

### 4. Critérios de Aceitação  

* **CA01 – Organização de Álbuns**
  O usuário deve conseguir visualizar seus álbuns em uma interface estruturada, diferenciando favoritos, coletâneas e demais álbuns.

* **CA02 – Seleção de Favoritos**
  Ao marcar um álbum como favorito, este deve aparecer em uma seção dedicada.

* **CA03 – Criação de Coletâneas**
  O usuário deve conseguir criar uma coletânea personalizada, inserindo álbuns ou músicas já disponíveis.

* **CA04 – Gerenciamento de Álbuns**
  O sistema deve permitir reorganizar, renomear ou excluir álbuns e coletâneas de acordo com os critérios definidos pelo usuário.

* **CA05 – Integração com Plataformas**
  O sistema deve exibir álbuns provenientes de pelo menos uma plataforma de streaming (ex.: Spotify ou YouTube Music) e possibilitar sua reprodução.

* **CA06 – Classificação de Álbuns**
  O usuário deve conseguir atribuir uma nota ou avaliação a um álbum, e essa avaliação deve ser registrada no sistema.

* **CA07 – Comentários Públicos**
  O sistema deve permitir que os comentários feitos por um usuário sejam exibidos publicamente para os demais.

* **CA08 – Exibição de Popularidade**
  O sistema deve exibir métricas de popularidade de álbuns (ex.: número de reproduções, curtidas ou avaliações).

* **CA09 – Reprodução de Álbuns**
  O usuário deve conseguir reproduzir álbuns diretamente da interface, via integração com serviços externos.

* **CA10 – Busca de Álbuns e Músicas**
  A busca deve retornar resultados ao pesquisar por nome, artista, gênero ou palavra-chave.

* **CA11 – Filtragem de Álbuns**
  O usuário deve conseguir aplicar filtros como gênero, artista, ano ou popularidade nos álbuns listados.

* **CA12 – Ordenação de Resultados**
  Os resultados devem poder ser ordenados por mais recentes, mais populares ou melhor avaliados.

* **CA13 – Detalhamento de Álbuns**
  A página de detalhes de um álbum deve incluir capa, lista de músicas, artistas e ano de lançamento.

* **CA14 – Histórico de Reprodução**
  O sistema deve manter um registro acessível ao usuário com os álbuns reproduzidos anteriormente.

* **CA15 – Compartilhamento de Álbuns**
  O usuário deve conseguir compartilhar álbuns ou coletâneas via link ou redes sociais.

* **CA16 – Criação de Playlists Dinâmicas**
  O sistema deve gerar playlists automaticamente com base em critérios como “mais ouvidas” ou “recomendadas”.

* **CA17 – Recomendações Personalizadas**
  O sistema deve sugerir álbuns com base nas interações e preferências do usuário.

* **CA18 – Curtidas em Comentários**
  Os comentários públicos devem permitir reações, como curtidas, visíveis a todos os usuários.

* **CA19 – Notificações de Atualizações**
  O usuário deve ser notificado ao surgir novo conteúdo de artistas que segue.

* **CA20 – Gerenciamento de Perfil do Usuário**
  O usuário deve poder editar nome, foto de perfil e preferências musicais.

* **CA21 – Gerenciamento de Músicas**
  O sistema deve permitir adicionar, editar e excluir músicas de álbuns criados pelo usuário.

* **CA22 – Gerenciamento de Artistas**
  O usuário deve poder filtrar músicas e álbuns com base nos artistas associados.

* **CA23 – Gerenciamento de Gêneros**
  O sistema deve permitir adicionar, editar e excluir gêneros musicais utilizados na organização de conteúdo.

* **CA24 – Seguir Artistas**
  O usuário deve conseguir seguir ou deixar de seguir artistas por meio de botão de ação.

* **CA25 – Notificações de Artistas Seguidos**
  O sistema deve notificar o usuário sempre que houver novidades de artistas seguidos.

* **CA26 – Cadastro de Usuário**
  O usuário deve conseguir criar uma conta ao informar nome, e-mail e senha válidos.

* **CA27 – Login de Usuário**
  O sistema deve permitir o login com e-mail e senha cadastrados previamente.

* **CA28 – Recuperação de Senha**
  O sistema deve enviar um link de redefinição de senha ao e-mail do usuário, quando solicitado.

* **CA29 – Login Social (opcional)**
  O sistema deve permitir autenticação por serviços como Google ou Facebook, se disponível.

* **CA30 – Logout**
  O sistema deve disponibilizar uma opção para o usuário encerrar sua sessão com segurança.

---

📖 **Status:** Elaboração do diagrama de classes do projeto, e inciando escolhas de padrões de projetos a serem utilizados.  
