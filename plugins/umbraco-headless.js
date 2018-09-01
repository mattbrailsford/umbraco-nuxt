import UmbracoHeadless from 'umbraco-headless'
import umbracoConfig from '../umbraco.config';

export default async (context, inject) => {
    let headlessService = new UmbracoHeadless.HeadlessService(umbracoConfig);
    await headlessService.authenticate()
    inject('umbraco', headlessService)
}