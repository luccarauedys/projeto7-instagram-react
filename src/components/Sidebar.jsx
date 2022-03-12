const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Usuario
        user="catanacomics"
        name="Catana"
        profilePic="./assets/img/catanacomics.svg"
      />
      <Sugestoes />
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </aside>
  );
};

export default Sidebar;

const Usuario = ({ user, name, profilePic }) => {
  return (
    <div className="usuario">
      <img src={profilePic} />
      <div className="texto">
        <strong>{user}</strong>
        {name}
      </div>
    </div>
  );
};

const Sugestoes = () => {
  const sugestoes = [
    {
      profilePic: './assets/img/bad.vibes.memes.svg',
      user: 'bad.vibes.memes',
      reason: 'Segue você',
    },
    {
      profilePic: './assets/img/chibirdart.svg',
      user: 'chibirdart',
      reason: 'Segue você',
    },
    {
      profilePic: './assets/img/razoesparaacreditar.svg',
      user: 'razoesparaacreditar',
      reason: 'Novo no Instagram',
    },
    {
      profilePic: './assets/img/adorable_animals.svg',
      user: 'adorable_animals',
      reason: 'Segue você',
    },
    {
      profilePic: './assets/img/smallcutecats.svg',
      user: 'smallcutecats',
      reason: 'Segue você',
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((sugestao, indice) => (
        <Sugestao key={indice} sugestao={sugestao} />
      ))}
    </div>
  );
};

const Sugestao = ({ sugestao: { profilePic, user, reason } }) => {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={profilePic} alt="Foto do perfil" />
        <div className="texto">
          <div className="nome">{user}</div>
          <div className="razao">{reason}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
};
