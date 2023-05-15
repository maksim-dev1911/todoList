export type TodoPayloadType = {
    title: string
}

export type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type TaskType = {
    id: string
    description: string
    title: string
    todoListId: string
}