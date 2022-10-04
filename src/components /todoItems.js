

function TodoItem({todo, handleDeletion}){
    return (
      <li>
        {todo}
        <button className="delete-btn">{handleDeletion}</button>
      </li>
    );
}