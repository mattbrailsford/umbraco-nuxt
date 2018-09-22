const UmbracoHeadless = require('umbraco-headless')
const umbracoConfig = require('../umbraco.config')

module.exports = {
    createClient() {
        let client = new UmbracoHeadless.HeadlessService(umbracoConfig);
        // Umbraco headless doesn't actually need authenticating
        // for public read requests, but the API doesn't currently
        // support unauthenticated requests, so to bypass the auth
        // requests, just make it think it's already authenticated
        client.IsAuthenticated = true;
        client.BaseUrl = umbracoConfig.url;
        return client;
    }
}