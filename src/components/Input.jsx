import React from "react";

import { MdEdit } from "react-icons/md";

const Input = ({ handleChange, handleClick, input, toggle, checked }) => {
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleClick(e);
		}
	};

	return (
		<div className="flex items-center justify-between p-5">
			<input
				className={`p-[0.5rem] rounded-br-[15px] rounded-bl-[5px] rounded-tr-[7px] rounded-tl-[9px] bg-transparent w-[90%] border-dashed ${
					checked === false ? "light" : "dark"
				}`}
				type="text"
				placeholder="Write Something..."
				value={input}
				onChange={handleChange}
				onKeyDown={handleKeyPress}
			/>
			<div>
				<button
					className={`btn p-1 bg-[#fdcb6e] hover:bg-[#ffa600] text-md font-semibold -rotate-2 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md  ${
						checked === false ? "light" : "dark"
					}`}
					type="button"
					onClick={handleClick}
				>
					{toggle ? (
						<>
							+ Add
						</>
					) : (
						<MdEdit />
					)}
				</button>
			</div>
		</div>
	);
};

export default Input;

// import React from "react";

// const Input = ({ handleChange, handleClick, input, toggle, checked }) => {
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleClick(e);
//     }
//   };

//   return (
//     <div className={`inputContainer ${checked === false ? "light" : "dark"}`}>
//       <input
//         type="text"
//         placeholder="Enter a task"
//         value={input}
//         onChange={handleChange}
//         onKeyPress={handleKeyPress}
//       />
//       <button onClick={handleClick}>
//         {toggle ? "Add" : "Edit"}
//       </button>
//     </div>
//   );
// };

// export default Input;
