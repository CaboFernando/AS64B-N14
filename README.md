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
Este documento descreve os requisitos funcionais do sistema **Agregador Musical**, uma aplicação que organiza e integra álbuns musicais de diferentes plataformas de streaming.  
O objetivo é permitir ao usuário **criar, gerenciar, classificar e interagir com conteúdos musicais** em um ambiente unificado.  

#### 1.2 Escopo  
O sistema permitirá que os usuários:  
- Consultem e selecionem álbuns de diferentes serviços de streaming (Spotify, YouTube Music, etc.);  
- Criem coletâneas personalizadas a partir de músicas e álbuns existentes;  
- Classifiquem e comentem publicamente sobre os álbuns;  
- Consultem informações de popularidade de álbuns e coletâneas;  
- Reproduzam músicas e álbuns diretamente pelo sistema via integração com as plataformas suportadas.  

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

- **CA01 – Organização de Álbuns:** O usuário deve conseguir visualizar seus álbuns em uma interface estruturada, diferenciando favoritos, coletâneas e demais álbuns.  
- **CA02 – Seleção de Favoritos:** Ao marcar um álbum como favorito, este deve aparecer em uma seção dedicada.  
- **CA03 – Criação de Coletâneas:** O usuário deve conseguir criar uma coletânea personalizada, inserindo álbuns ou músicas já disponíveis.  
- **CA04 – Gerenciamento de Álbuns:** O sistema deve permitir reorganizar, renomear ou excluir álbuns e coletâneas de acordo com os critérios definidos pelo usuário.  
- **CA05 – Integração com Plataformas:** O sistema deve exibir álbuns provenientes de pelo menos uma plataforma de streaming (ex.: Spotify ou YouTube Music) e possibilitar sua reprodução.  
- **CA06 – Classificação de Álbuns:** O usuário deve conseguir atribuir uma nota ou avaliação a um álbum, e essa avaliação deve ser registrada no sistema.  
- **CA07 – Comentários Públicos:** O sistema deve permitir que os comentários feitos por um usuário sejam exibidos publicamente para os demais.  

---

📖 **Status:** Documento inicial de especificação de requisitos funcionais para o sistema *Agregador Musical*.  
