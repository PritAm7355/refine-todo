import { Button } from "./ui/button";

interface DeleteButtonProps {
    onDelete: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
    return (
        <Button 
            variant="destructive" 
            // onClick={(e) => {
            //     // e.stopPropagation(); // Prevent drag event from triggering
            //     // e.preventDefault(); // Ensure only the button click is handled
            //     console.log("Delete button clicked"); // Debugging
            //     // onDelete();
            // }}
            onClick= {()=>console.log("delete button clicked")}
            className="relative z-99"
        >
            Delete
        </Button>
    );
}
