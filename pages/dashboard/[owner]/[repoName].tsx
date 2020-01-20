import React from 'react';
import { useRouter } from 'next/router';
import PageLayout from '~/components/PageLayout';
import DashboardHeader from '~/components/Header/Dashboard';

const REPO_DATA = {
  id: 28457823,
  node_id: 'MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==',
  name: 'freeCodeCamp',
  full_name: 'freeCodeCamp/freeCodeCamp',
  private: false,
  owner: {
    login: 'freeCodeCamp',
    id: 9892522,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=',
    avatar_url: 'https://avatars0.githubusercontent.com/u/9892522?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/freeCodeCamp',
    html_url: 'https://github.com/freeCodeCamp',
    followers_url: 'https://api.github.com/users/freeCodeCamp/followers',
    following_url: 'https://api.github.com/users/freeCodeCamp/following{/other_user}',
    gists_url: 'https://api.github.com/users/freeCodeCamp/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/freeCodeCamp/subscriptions',
    organizations_url: 'https://api.github.com/users/freeCodeCamp/orgs',
    repos_url: 'https://api.github.com/users/freeCodeCamp/repos',
    events_url: 'https://api.github.com/users/freeCodeCamp/events{/privacy}',
    received_events_url: 'https://api.github.com/users/freeCodeCamp/received_events',
    type: 'Organization',
    site_admin: false,
  },
  html_url: 'https://github.com/freeCodeCamp/freeCodeCamp',
  description:
    'The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.',
  fork: false,
  url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp',
  forks_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks',
  keys_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}',
  collaborators_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams',
  hooks_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks',
  issue_events_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}',
  events_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events',
  assignees_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}',
  branches_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}',
  tags_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags',
  blobs_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}',
  git_tags_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}',
  git_refs_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}',
  trees_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}',
  statuses_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages',
  stargazers_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers',
  contributors_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors',
  subscribers_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers',
  subscription_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription',
  commits_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}',
  git_commits_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}',
  comments_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}',
  issue_comment_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}',
  contents_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}',
  compare_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges',
  archive_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads',
  issues_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}',
  pulls_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}',
  milestones_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}',
  labels_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}',
  releases_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}',
  deployments_url: 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments',
  created_at: '2014-12-24T17:49:19Z',
  updated_at: '2020-01-20T18:11:06Z',
  pushed_at: '2020-01-20T15:46:05Z',
  git_url: 'git://github.com/freeCodeCamp/freeCodeCamp.git',
  ssh_url: 'git@github.com:freeCodeCamp/freeCodeCamp.git',
  clone_url: 'https://github.com/freeCodeCamp/freeCodeCamp.git',
  svn_url: 'https://github.com/freeCodeCamp/freeCodeCamp',
  homepage: '',
  size: 122660,
  stargazers_count: 308241,
  watchers_count: 308241,
  language: 'JavaScript',
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: false,
  forks_count: 23563,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 299,
  license: {
    key: 'bsd-3-clause',
    name: 'BSD 3-Clause "New" or "Revised" License',
    spdx_id: 'BSD-3-Clause',
    url: 'https://api.github.com/licenses/bsd-3-clause',
    node_id: 'MDc6TGljZW5zZTU=',
  },
  forks: 23563,
  open_issues: 299,
  watchers: 308241,
  default_branch: 'master',
  temp_clone_token: null,
  organization: {
    login: 'freeCodeCamp',
    id: 9892522,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=',
    avatar_url: 'https://avatars0.githubusercontent.com/u/9892522?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/freeCodeCamp',
    html_url: 'https://github.com/freeCodeCamp',
    followers_url: 'https://api.github.com/users/freeCodeCamp/followers',
    following_url: 'https://api.github.com/users/freeCodeCamp/following{/other_user}',
    gists_url: 'https://api.github.com/users/freeCodeCamp/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/freeCodeCamp/subscriptions',
    organizations_url: 'https://api.github.com/users/freeCodeCamp/orgs',
    repos_url: 'https://api.github.com/users/freeCodeCamp/repos',
    events_url: 'https://api.github.com/users/freeCodeCamp/events{/privacy}',
    received_events_url: 'https://api.github.com/users/freeCodeCamp/received_events',
    type: 'Organization',
    site_admin: false,
  },
  network_count: 23563,
  subscribers_count: 8383,
};

function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [repoData, setRepoData] = React.useState(REPO_DATA);

  const { owner, repoName } = router.query;
  React.useEffect(() => {
    setRepoData(REPO_DATA);
    setIsLoading(false);
    return;
    fetch(`https://api.github.com/repos/${owner}/${repoName}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setRepoData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const {
    owner: { avatar_url, login },
    description,
    updated_at,
    license,
    url,
  } = repoData;

  return (
    <PageLayout>
      <DashboardHeader />
      <div className="row">
        <div className="col-12">
          <div className="section section-blue-bgcolor">
            <div className="d-flex padding-1rem">
              <div className="col-12 col-md-3">
                <img src={avatar_url} alt={login} className="avatar" />
              </div>
              <div className="col-12 col-md-9">
                <div className="d-flex details">
                  <div className="col-12 repo-name-heading">{name}</div>
                  <div className="col-12">
                    <strong>Owner: </strong>
                    {login}
                  </div>
                  <div className="col-12">
                    <strong>Description: </strong>
                    {description}
                  </div>
                  <div className="col-12">
                    <strong>Last updated: </strong>
                    {updated_at
                      .substr(0, 10)
                      .split('-')
                      .reverse()
                      .join('/')}
                  </div>
                  <div className="col-12">
                    <strong>license: </strong>
                    {license.name}
                  </div>
                  <div className="col-12">
                    <strong>URL: </strong>
                    <a href={url} target="_blank">
                      {url}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
