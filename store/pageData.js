export const state = () => ({
    pageData: {}
})
  
export const mutations = {
    setAllPageData (state, data) {
        data.forEach(d => {
            this.setPageData(state, d)
        });
    },
    setPageData (state, data) {
        state.pageData[data.url] = data;
    }
}

export const getters = {
    getPageData: state => (url) => state.pageData[url]
}

export const actions = {
    async ensurePageData({ commit, state }, url) {
        if (!state.pageData.hasOwnProperty(url)){
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
                commit('setPageData', res.results[0])
            }
        }
    }
}