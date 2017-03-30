
// ... delete "$app_root/node_modules/gh-pages/.cache" if you want to reset all.
//   See the source "$app_root/node_modules/.bin/gh-pages" for hints on how to use options.
// Previous package.json deploy script...
//   "deploy": "gh-pages --dist build --repo git@github.com:user/repo.git"

var ghpages = require('gh-pages');
var path = require('path');
var { user, repo } = require(path.join(__dirname, '../../priv.json'));

ghpages.publish(path.join(__dirname, '../../build'), {
  user,
  repo,

  logger: function logger(message) {
    process.stderr.write(message + '\n');
  }
}, function cb(err) {
  if (err) {
    process.stderr.write(err.message + '\n');
    throw err;
  }
  process.stderr.write('Published\n');
});
