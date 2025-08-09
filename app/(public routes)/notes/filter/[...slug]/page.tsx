import NoteList from '@/components/NoteList/NoteList';
import { getNotes } from '@/lib/api';
import React from 'react';
import NotesClient from './Notes.client';

type Props = {
    params: Promise <{slug: string[]}>
}

const NotesByCategory = async ({
    params
}: Props) => {
    const { slug } = await params;
    const category = slug[0] === 'All' ? undefined : slug[0]
    const response = await getNotes(category);
  return (
    <div>
                <h1>{category}</h1>
          {response?.notes?.length > 0 && <NotesClient initialData={response}/>}
    </div>
  );
};

export default NotesByCategory;