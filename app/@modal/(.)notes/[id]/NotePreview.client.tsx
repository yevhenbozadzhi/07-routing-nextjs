'use client';
import { fetchNoteById } from "@/lib/api";
import { Note } from "../../types/note";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import css from './NotePreview.client.module.css'
import Modal from "@/components/Modal/Modal";

// interface NotePreviewProps {
//   noteId: string;
// }


export default function NotePreviewClient() {
    const { id } = useParams<{ id: string }>();
  const { data: note, isLoading, error } = useQuery<Note>({
    queryKey: ["note"],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const router = useRouter();

  const handleGoBack = () => {
    const issue = confirm("Are you sure?");
    if (issue) { router.back() };
   };
  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

    return (
       <Modal onClose={handleGoBack}>
      <div className={css.container}>
         
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          Created: {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>
      <button className={css.button} onClick={ handleGoBack} >Go Back</button>
      </div>
      </Modal>
  );
}