const Header = () => {
  return (
    <>
      <header>
        <h1>Top Github Repos</h1>
        <h5>A dashboard for top 20 public github repository (Based on github Stars)</h5>
      </header>

      <style jsx>{`
        header {
          font-size: 2rem;
          background-color: var(--primary-bg-color);
          color: var(--primary-text-color);
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Header;
