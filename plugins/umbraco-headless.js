import UmbracoHeadless from 'umbraco-headless'
import config from '../umbraco.config';

export default async (context, inject) => {
    let headlessService = new UmbracoHeadless.HeadlessService(config);
    await headlessService.authenticate()
    inject('umbraco', headlessService)
}