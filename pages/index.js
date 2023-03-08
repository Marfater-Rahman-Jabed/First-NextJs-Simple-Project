import Card from "@/Components/Card";
import Carusel from "@/Components/Carusel/Carusel";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";
import Link from "next/link";

const index = ({ posts }) => {
  return (
    <div >
      <Head>
        <title>Home</title>
      </Head>
      <Carusel></Carusel>
      <div >
        {

          posts.map(post => <Card post={post} key={post.id}></Card>)

        }
      </div>
      <Link href='/Post' className="flex justify-center"><button className="btn btn-primary mb-3 ">See More</button></Link>
      <Footer></Footer>

    </div>
  );
};

export default index;


export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const data = await res.json();
  return {
    props: {
      posts: data
    }
  }
}