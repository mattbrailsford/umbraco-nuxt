export const state = () => ({
    pageModels: {}
})
  
export const mutations = {
    setPageModel (state, { url, model }) {
        state.pageModels[url] = model;
    }
}

export const getters = {
    getPageModel: state => (url) => state.pageModels.hasOwnProperty(url)
        ? state.pageModels[url]
        : null
}

export const actions = {
    async loadPageModel({ commit }, url) {
        let query = '/root/home';
        let cleanUrl = url.replace(/^\/+|\/+$/g, '');
        if (cleanUrl) {
            let urlParts = cleanUrl.split('/');
            query = urlParts.reduce((acc, cur) => {
                if (cur) {
                    acc += `/*[@urlName='${cur}']`;
                }
                return acc;
            }, query);
        }
        let res = await this.$umbraco.query(query, 'XPath').getAll();
        if (res && res.totalResults == 1){
            commit('setPageModel', { url, model: res.results[0] })
        }
    },
    setPageModel({ commit }, url, model) {
        commit('setPageModel', { url, model })
    }
}