export default function Page({ params }: { params: { job: string } }) {
  return <div>My Post: {params.job}</div>;
}
