export default function Page({ params }: { params: { project: string } }) {
  return <div>My Post: {params.project}</div>;
}
