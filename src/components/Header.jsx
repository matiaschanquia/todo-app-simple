import { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/listSlice";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
	const [text, setText] = useState("");
	const [messageActive, setMessageActive] = useState(false);
	const list = useSelector(state => state.list);
	const dispatch = useDispatch();
	
	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(list));
	}, [list]);
	
	const handleText = (e) => {
		setText(e.target.value);
		setMessageActive(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!text) {
			setMessageActive(true);
			return;
		}

		const newItem = {
			id: uuidv4(),
			text: text,
			checked: false
		};

		dispatch(addItem(newItem));
		setText("");
	};

	return (
		<header className="header">
			<div className="container-header">
				<h1>Todo App Simple</h1>
				<form className="form-add-item" onSubmit={handleSubmit}>
					<input type="text" value={text} onChange={handleText}/>
					<button>Agregar</button>
				</form>
				{
					messageActive && <p className="message-empty">Debe escribir algo</p>
				}
			</div>
		</header>
	);
};

export default Header;