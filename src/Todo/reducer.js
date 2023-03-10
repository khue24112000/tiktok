import { ADD_JOB, SET_JOB, DELETE_JOB, EDIT_JOB } from "./constants"

export const initState = {
    job: '',
    jobs: [],
    isEdit: undefined
}
const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_JOB:
            return {
                ...state,
                job: payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, payload]
            }

        case EDIT_JOB:
            const editedJobs = [...state.jobs]
            editedJobs[state.isEdit] = payload
            return {
                ...state,
                jobs: editedJobs,
                isEdit: undefined
            }

        case DELETE_JOB:
            const newJobs = state.jobs
            newJobs.splice(payload, 1)
            return {
                ...state,
                jobs: newJobs,
                isEdit: undefined
            }

        default:
            throw new Error('Invalid Action')
    }
}

export default reducer