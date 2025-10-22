
import { AddColumn } from "../store/slices/boardSlice";
import type { AppDispatch } from "@/store/store";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

type ColumnForm = {
  title: string;
};

const AddColumnForm = () => {
  const { register, handleSubmit, reset } = useForm<ColumnForm>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: ColumnForm) => {
    dispatch(AddColumn(data.title));
    reset();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title")}
        type="text"
        placeholder="New column"
        className="border px-2 py-1 rounded"
      />
      <button type="submit" className="px-3 py-1 bg-green-400 text-white">
        Add column
      </button>
    </form>
  );
};
export default AddColumnForm;
