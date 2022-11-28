// https://www.codewars.com/kata/undo-slash-redo

// 4 kyu
// Undo/Redo

// DESCRIPTION:
// The purpose of this kata is to implement the undoRedo function.

// This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

// set(key, value) Assigns the value to the key. If the key does not exist, creates it.

// get(key) Returns the value associated to the key.

// del(key) removes the key from the object.

// undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

// redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

// After set() or del() are called, there is nothing to redo.

// All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

// Any set/del after an undo should disallow new redos.


function undoRedo (object){
  let lastActions = []
  let undoneActions = []

  return{
    set (key,value){
      if (object.hasOwnProperty(key)=== true){
        lastActions.push(['edit', key, object[key], value])
      } else {
        lastActions.push(['set', key, value])
      }
      object[key]=value

      undoneActions = []

    },
    get (key){
      return object[key]
    },
    del (key) {
      if (object[key]){
        lastActions.push(['del', key, object[key]])
        delete object[key]
        
        undoneActions = []
      }
    },
    undo () {
      if (lastActions.length===0){
        throw new Error('No actions in last actions queue')
      }
      const popped = lastActions.pop()
      if (popped[0]==='set'){ delete object[popped[1]]}
      else if (popped[0]=== 'edit') {object[popped[1]]= popped[2]}
      else if (popped[0]=== 'del'){ object[popped[1]]=popped[2]}
      undoneActions.push(popped)
    },
    redo() {
      if (undoneActions.length === 0){
        throw new Error ('No actions in last actions queue')
      }
      const popped = undoneActions.pop()

      if (popped[0]==='set'){ object[popped[1]]=popped[2]}
      else if (popped[0]=== 'edit') {object[popped[1]]= popped[3]}
      else if (popped[0]=== 'del'){ delete object[popped[1]]}

      lastActions.push(popped)
    }
  }
}