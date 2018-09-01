import UmbracoHeadless from 'umbraco-headless'
import umbracoConfig from '../umbraco.config';

export default (context, inject) => {
    let umbraco = new UmbracoHeadless.HeadlessService(umbracoConfig);
    umbraco.IsAuthenticated = true;
    umbraco.BaseUrl = umbracoConfig.url;
    //await umbraco.authenticate()
    inject('umbraco', umbraco)
}