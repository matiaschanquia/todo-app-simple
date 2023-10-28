import { useSelector } from "react-redux";
import Item from "./Item";
import "./List.css";

const List = () => {

	const list = useSelector(state => state.list);

	return (
		<section className="list">
			<div className="container-list">
				{
					list.map((item, index) => (
						<Item key={item.id} index={index} text={item.text} checked={item.checked} />
					))
				}
			</div>
		</section>
	);
};

export default List;