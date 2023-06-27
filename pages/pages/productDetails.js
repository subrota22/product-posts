import { useRouter } from 'next/router';
import PostDetials from '../../Components/PostDetails/PostDetials';
import Head from 'next/head';
export async function getStaticProps() {
  // Fetch data from API
  const response = await fetch('https://fakestoreapi.com/products/');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}


function productDetails({ data }) {
  const router = useRouter();
  const { id } = router.query; // 'id' will contain the dynamic ID from the URL
  const getObject = data.find((getObject) => getObject.id === parseInt(id));
  return (
    <>
      <Head><title>Post details</title></Head>
        <PostDetials title={getObject?.title} description={getObject?.description}
          category={getObject?.category} image={getObject?.image} ratingRate={getObject?.rating?.rate}
          ratingCount={getObject?.rating?.count} id={getObject?.id} price={getObject?.price}></PostDetials>
    </>
  );
}

export default productDetails;
