import UmbracoHeadless from 'umbraco-headless'
import umbracoConfig from '../umbraco.config';

export default (context, inject) => {
    let umbraco = new UmbracoHeadless.HeadlessService(umbracoConfig);
    // Umbraco headless doesn't actually need authenticating
    // for public read requests, but the API doesn't currently
    // support unauthenticated requests, so to bypass the auth
    // requests, just make it think it's already authenticated
    umbraco.IsAuthenticated = true;
    umbraco.BaseUrl = umbracoConfig.url;
    inject('umbraco', umbraco)
}