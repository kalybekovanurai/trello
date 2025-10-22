import type { RootState } from "../store/store";
import { useSelector } from "react-redux";
import ColumnList from "./ColumnList";

const Board = () => {
  const { columns } = useSelector((state: RootState) => state.board);

  return (
    <div className="flex gap-4 flex-wrap bg-gray-100">
      {columns.map((column) => (
        <ColumnList column={column} key={column.id} />
      ))}
    </div>
  );
};

export default Board;
