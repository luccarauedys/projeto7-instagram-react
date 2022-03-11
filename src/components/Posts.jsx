const Posts = () => {
  const posts = [
    {
      userImage: './assets/img/meowed.svg',
      userName: 'meowed',
      mediaContent: './assets/img/gato-telefone.svg',
      likedByImage: './assets/img/respondeai.svg',
      likedBy: 'respondeai',
      likes: '101.523',
    },
    {
      userImage: './assets/img/barked.svg',
      userName: 'barked',
      mediaContent: './assets/img/dog.svg',
      likedByImage: './assets/img/adorable_animals.svg',
      likedBy: 'adorable_animals',
      likes: '99.159',
    },
  ];

  return (
    <section className="posts">
      {posts.map((post, indice) => (
        <Post key={indice} post={post} />
      ))}
    </section>
  );
};

export default Posts;

const Post = ({ post }) => {
  return (
    <section className="post">
      <Top userImage={post.userImage} userName={post.userName} />
      <PostContent mediaContent={post.mediaContent} />
      <Bottom
        likedBy={post.likedBy}
        likedByImage={post.likedByImage}
        likes={post.likes}
      />
    </section>
  );
};

const Top = ({ userImage, userName }) => {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={userImage} alt={`Foto do perfil de ${userName}`} />
        {userName}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
};

const PostContent = ({ mediaContent }) => {
  return (
    <div className="conteudo">
      <img src={mediaContent} />
    </div>
  );
};

const Bottom = ({ likedBy, likedByImage, likes }) => {
  return (
    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
      <div className="curtidas">
        <img src={likedByImage} alt={`Foto do perfil de ${likedBy}`} />
        <div className="texto">
          Curtido por <strong>{likedBy}</strong> e{' '}
          <strong>outras {likes} pessoas</strong>
        </div>
      </div>
    </div>
  );
};
