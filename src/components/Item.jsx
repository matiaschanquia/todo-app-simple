import { useDispatch } from "react-redux";
import "./Item.css";
import { checkToggleItem, removeItem } from "../redux/listSlice";

const Item = (props) => {
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removeItem(props.index));
	};

	const handleChecked = () => {
		dispatch(checkToggleItem(props.index));
	};

	return (
		<article className="item">
			<button className="btn-checked" title={props.checked ? "Desmarcar" : "Listo"} onClick={handleChecked}>
				{
					props.checked ? 
						<ion-icon name="checkmark-circle-outline"></ion-icon> :
						<ion-icon name="ellipse-outline"></ion-icon>
				}
			</button>
			<p className={props.checked ? "checked" : ""}>{props.text}</p>
			<button className="btn-remove" onClick={handleRemove}>
				<ion-icon name="trash-outline"></ion-icon>
			</button>
		</article>
	);
};

export default Item;