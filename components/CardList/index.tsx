import Card from '~/components/Card';

const CardList = ({ repoList }) => {
  return (
    <div className="row">
      {repoList.map(repo => (
        <Card repo={repo} key={repo.id} />
      ))}

      <style jsx>{`
        .row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default CardList;
