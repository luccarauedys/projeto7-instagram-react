const Stories = () => {
  const stories = [
    { image: './assets/img/9gag.svg', user: '9gag' },
    { image: './assets/img/meowed.svg', user: 'meowed' },
    { image: './assets/img/barked.svg', user: 'barked' },
    {
      image: './assets/img/nathanwpylestrangeplanet.svg',
      user: 'nathanwpylestrangeplanet',
    },
    { image: './assets/img/wawawicomics.svg', user: 'wawawicomics' },
    { image: './assets/img/respondeai.svg', user: 'respondeai' },
    { image: './assets/img/filomoderna.svg', user: 'filomoderna' },
    { image: './assets/img/memeriagourmet.svg', user: 'memeriagourmet' },
  ];

  return (
    <section className="stories">
      {stories.map((story, indice) => (
        <Story key={indice} story={story} />
      ))}
      <Arrow />
    </section>
  );
};

export default Stories;

const Story = ({ story: { image, user } }) => {
  return (
    <div className="story">
      <div className="imagem">
        <img src={image} alt={`Foto do perfil de ${user}`} />
      </div>
      <div className="usuario">{user}</div>
    </div>
  );
};

const Arrow = () => {
  return (
    <div className="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
};
