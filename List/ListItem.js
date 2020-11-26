const ListItem = ({ onChange, onDelete, value}) =>{
    return (
        <div>
            <input
                className="item-field"
                value={value}
                onChange={onChange}
            />
            <button onClick={onDelete}>Excluir</button>
        </div>
    )
}

export default ListItem