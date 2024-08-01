export const metadata = {
  baseUrl: 'https://hnq.so',
  title: 'Henrique Alves, Developer',
  description: 'Ideas, travel log, projects and updates by Henrique Alves.',
  author: {
    name: 'Henrique Alves',
    twitter: '@hnqso',
    url: 'https://hnq.so'
  },
}

export function formatDate(date: Date, month: "numeric" | "2-digit" | "long" | "short" | "narrow" = 'short') {
  return date.toLocaleDateString('en-US', { month, day: 'numeric' });
}

