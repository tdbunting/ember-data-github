import GithubAdapter from './github';

export default GithubAdapter.extend({
  buildURL(type, id, snapshot) {
    let builtURL = this._super(type, id, snapshot);
    return builtURL;
  }
});
