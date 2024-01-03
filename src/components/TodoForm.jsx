import React, {useState} from 'react'

// 1. how to hold input value in state
const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")
    

    const handleSubmit = e => {
        e.preventDefault();
        // 4. how to check if the input is empty
        // if(!value) return alert('C\'mon, you must have SOMETHING to do')
        console.log(value)
        addTodo(value);
        

        setValue("")
        
    
        
    }
    


  return (
    // 3. we need an onSubmit function to prevent the page from reloading
    //  first option (gotta be in the same line) => onSubmit={(e) => e.preventDefault()} 
    //  second option (gotta be before the return) => const handleSubmit = (e) => {
    //     e.preventDefault()

    <form className='input-form' onSubmit={handleSubmit}>
        <div className="app">
        <div className="container">
            <h1><span className="write">Write</span> <span className="cursor"></span> <span className="here">Here</span> </h1>

            <div id="todo__wrapper">
                {/* 2. we need a onChange function to catch the input value */}
                {/* first option (gotta be in the same line) => onChange={(e) => setValue(e.target.value)} */}
                {/* second option (gotta be before the return) => const handleChange= (e) => {
                    setValue(e.target.value)
                } */}
                <input type="text" id="todo__wrapper-input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="actually, write here..." />
                <button id="addBtn" >Add</button>
            </div>
        </div>
        
    </div>
    </form>
  )
}

export default TodoForm