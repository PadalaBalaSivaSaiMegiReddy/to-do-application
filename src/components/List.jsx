import React, {useState} from 'react'
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const List = ({item, handleDelete, id, handleEdit, checked}) => {
    const [check, setCheck] = useState(false);
    
    const lineThrough = () => {
        setCheck((previousValue) => {
            return !previousValue
        })
    }

  return (
		<div className="flex justify-between m-2">
			<div>
				<li
					className="text-md border-dashed hover:font-bold hover:cursor-pointer hover:text-lg"
					onClick={lineThrough}
					style={{ textDecoration: check ? "line-through" : null }}
				>
					{item}
				</li>
			</div>
			<div className="flex gap-2">
				<button
					className={`btn bg-[#fdcb6e] hover:bg-[#ffa600] text-md font-semibold rotate-1 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md p-1 ${
						checked === false ? "light" : "dark"
					}`}
					type="button"
					onClick={() => handleEdit(id)}
				>
					<MdEdit />
				</button>
				<button
					className={`btn bg-[#fdcb6e] hover:bg-[#ffa600] text-md font-semibold rotate-1 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md p-1  ${
						checked === false ? "light" : "dark"
					}`}
					type="button"
					onClick={() => handleDelete(id)}
				>
					<RiDeleteBin5Fill />
				</button>
			</div>
		</div>
	);
}

export default List