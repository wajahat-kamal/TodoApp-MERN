
export const getTodo = (req, res) => {
 
}

export const createTodo = (req, res) => {
    const {title, description, completed} = req.body;
    if (!title) {
        return res.status(400).json({
            message: "Please Enter a Title",
            success: false
        })
    }
}

export const updateTodo = (req, res) => {

}

export const deleteTodo = (req, res) => {

}