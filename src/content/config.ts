import { z, defineCollection, getCollection, type CollectionEntry, type ContentEntryMap } from 'astro:content';

type DateSortable = {
  data: {
    date: string | Date;
  };
};

const travelCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const writingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const pageCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    og: image().optional(),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  travel: travelCollection,
  writing: writingCollection,
  page: pageCollection
};

function sortByDate<T extends DateSortable>(items: T[], asc: boolean = false): T[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return asc ? dateA - dateB : dateB - dateA;
  });
}

export async function getPosts<K extends Exclude<keyof ContentEntryMap, 'page'>>(collectionName: K) {
  const posts = await getCollection(collectionName, ({ data }: CollectionEntry<K>) => {
    return !data.draft;
  });
  return sortByDate(posts);
}
