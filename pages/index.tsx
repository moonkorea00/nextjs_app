import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface IMockJSONProps {
  id: number;
  name: string;
}

const Home = ({ data }: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <>
      <div>Test</div>
      {/* {!data?.length && <div>None</div>} */}
      {data?.map((el: IMockJSONProps) => (
        <div key={el.id} style={{ margin: '10px' }}>
          {el.name}
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps({}: GetServerSideProps) {
  const data = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/${process.env.NEXT_PUBLIC_API_KEY}`
    )
  ).json();
  return {
    props: { data },
  };
}

export default Home;
