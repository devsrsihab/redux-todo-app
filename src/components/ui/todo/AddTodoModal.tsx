import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { addTodo } from "../../../redux/features/todoSlice";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch()

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const randomString =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
    const todoDetails = {
      id: randomString,
      title,
      description,
    }
    dispatch(addTodo(todoDetails))
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo </DialogTitle>
          <DialogDescription>
            Add Todo Title and Details here.
          </DialogDescription>
        </DialogHeader>
        {/* dialog body */}
        <form onSubmit={handleFormSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
