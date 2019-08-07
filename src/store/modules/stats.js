import store from "../store";

const state = {
    totalTaskCount: 0,

    mySubmissionCount: 0
};

const getters = {

};

const actions = {
    /*
    setLanguage({state, commit, rootState}, language) {
        commit('SET_LANGUAGE', language);
    }
    */
    updateTotalTaskCount({state, commit, rootState}) {

        console.log('update task count');

        const taskCountQuery = {
            "select": {
                "fields": [
                    "count(*)"
                ],
                "tables": [
                    "tasks"
                ]
            },
            'where': [
                {
                    "field": 'tasks.activity_id',
                    'op': 'e',
                    'val': store.state.consts.identificationActivity
                }
            ]
        };
        store.dispatch('c3s/task/getTaskCount', taskCountQuery).then(res => {

            commit('SET_TOTAL_TASK_COUNT', res.body );

        });

    },
    updateMySubmissionCount({state, commit, rootState}) {

        console.log('update my submissions');

        const submissionCountQuery = {
            "select": {
                "fields": [
                    "count(*)"
                ],
                "tables": [
                    "submissions"
                ]
            },
            'where': [
                {
                    "field": 'submissions.user_id',
                    'op': 'e',
                    'val': store.state.c3s.user.currentUser.id
                }
            ]
        };
        store.dispatch('c3s/task/getTaskCount', submissionCountQuery).then(res => {

            commit('SET_MY_SUBMISSION_COUNT', res.body );

        });

    },
    increaseMySubmissionCount({state, commit, rootState}) {
        commit('INCREASE_MY_SUBMISSION_COUNT' );
    }
};

const mutations = {
    SET_TOTAL_TASK_COUNT(state, totalTaskCount) {
        state.totalTaskCount = totalTaskCount;
    },
    SET_MY_SUBMISSION_COUNT(state, mySubmissionCount) {
        state.mySubmissionCount = mySubmissionCount;
    },
    INCREASE_MY_SUBMISSION_COUNT(state) {
        state.mySubmissionCount++;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
