import { useReducer, useRef } from "react";
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob, editJob } from './actions'
// import logger from './logger'
// Cơ chế hoạt động:
// useState
// 1. Init state = 0
// 2. Actions: Up(state + 1) / Down(state -1)

// useReducer
// 1. Init state = 0
// 2. Actions: Up(state + 1) / Down(state -1)
// 3. Reducer
// 4. Dispatch

function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const inputRef = useRef()
    const handleSubmit = () => {
        if (state.isEdit !== undefined) {
            job === '' ? dispatch(deleteJob(state.isEdit)) : dispatch(editJob(job, state.isEdit))
        } else {
            job && dispatch(addJob(job))
        }
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    const handleEditJob = (job) => {
        dispatch(setJob(job))
        inputRef.current.focus()
    }

    return (
        <div style={{ padding: '10px 32px' }}>
            <h1>Todo</h1>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter job name...."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>{state.isEdit !== undefined ? "Edit" : "Add"}</button>
            <br />
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))} style={{ padding: 10, cursor: "pointer" }}>
                            &times;
                        </span>
                        <button onClick={() => {
                            state.isEdit = index
                            return handleEditJob(job)
                        }}>
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;
