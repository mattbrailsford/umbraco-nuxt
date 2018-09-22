import UmbracoHeadless from '../services/umbraco-headless'

export default (context, inject) => {
    inject('umbraco', UmbracoHeadless.createClient())
}