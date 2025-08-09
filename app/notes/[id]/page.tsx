import { QueryClient, dehydrate } from "@tanstack/react-query";

import NoteDetailsClient from "./NoteDetails.client";
import { HydrationBoundary } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function NoteDetails({ params }: NoteDetailsProps) {
  const { id } = await params;
  
  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient noteId={id} />
    </HydrationBoundary>
  );
}