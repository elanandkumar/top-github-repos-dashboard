import Link from 'next/link';

const Card = ({ repo: { owner, name, description, full_name } }) => {
  return (
    <Link href="/dashboard/[owner]/[repoName]" as={`/dashboard/${full_name}`}>
      <div className="card">
        <img src={owner.avatar_url} alt={name} className="thumbnail" />
        <article>
          <h2>{name}</h2>
          <span>{description}</span>
        </article>

        <style jsx>
          {`
            .card {
              border: 1px solid #d3d3d3;
              border-radius: 0.25rem;
              min-height: 100%;
              background: white;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              text-decoration: none;
              color: #444;
              transition: all 0.1s ease-in;
              cursor: pointer;
            }

            .card:hover {
              top: -2px;
              box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
            }

            .card img {
              display: flex;
            }

            .card article {
              padding: 1rem;
              display: flex;
              word-break: break-word;
              flex: 1;
              justify-content: flex-start;
              flex-direction: column;
              text-align: center;
            }
            .card .thumbnail {
              padding: 1rem;
              border-radius: 50%;
              width: 100px;
              height: 100px;
              margin: auto;
            }

            .card p {
              flex: 1; /* make p grow to fill available space*/
              line-height: 1.4;
            }

            /* typography */
            h2 {
              font-size: 20px;
              margin: 0;
              color: #333;
            }

            .card span {
              font-size: 14px;
              color: #1f3f49;
              letter-spacing: 0.05em;
              margin: 2em 0 0 0;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

export default Card;
