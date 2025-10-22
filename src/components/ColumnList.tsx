import { addCard, deleteCard, type Column } from "../store/slices/boardSlice";
import type { AppDispatch } from "../store/store";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

type CardForm = { title: string; descriptiom?: string };

const ColumnList = ({ column }: { column: Column }) => {
  const { register, handleSubmit, reset } = useForm<CardForm>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: CardForm) => {
    dispatch(
      addCard({
        columnId: column.id,
        title: data.title,
        description: data.descriptiom,
      })
    );
    reset();
  };
  const handleDelete = (cardId: string | number) => {
    dispatch(deleteCard({ columnId: column.id, cardId }));
  };

  return (
    <div
      key={column.id}
      className="w-[250px] bg-white px-2 py-3 rounded text-center flex flex-col gap-4"
    >
      <div>
        <h3>{column.title}</h3>
        <div className="flex flex-col gap-3">
          {column.cards.map((card) => (
            <div className="border rounded py-2 bg-gray-50 flex justify-between px-3">
              <div className="flex flex-col">
                <h4>{card.title}</h4>
                <p className="text-gray-300">{card.description}</p>
              </div>
              <button
                onClick={() => handleDelete(card.id)}
                className="text-xs px-2 rounded bg-red-500 cursor-pointer"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col">
        <input
          type="text"
          placeholder="title"
          {...register("title")}
          className="w-full border rounded px-2 py-2 text-sm"
        />
        <input
          type="text"
          placeholder="Description"
          {...register("descriptiom")}
          className="w-full border rounded px-2 py-2 text-sm"
        />
        <button
          type="submit"
          className="mt-2 w-full py-1 text-sm bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ColumnList;
