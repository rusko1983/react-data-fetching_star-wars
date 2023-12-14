import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Character() {
  const router = useRouter();

 const newId = router.query.id;
  //const id = 1;
  const URL = `https://swapi.dev/api/people/${newId}`;
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load ...</div>;
  if (!data) return <div>Loding ...</div>;
  console.log(data);
  return (
    <Layout>
      <Card
        id={data.name}
        name={data.name}
        height={data.height}
        eyeColor={data.hair_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
