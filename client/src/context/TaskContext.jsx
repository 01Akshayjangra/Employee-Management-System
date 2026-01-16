import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  

    return (
        <TaskContext
            value={{
            }}
        >
            {children}
        </TaskContext>
    )
}

export default TaskProvider