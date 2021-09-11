export const state = () => ({})

export const getters = {

}

export const mutations = {

}


export const actions = {
    async getLeetcodeRepositroy() {
        const res = await this.$axios.get('/leetcode/contents/')
        return res;
    }
}

