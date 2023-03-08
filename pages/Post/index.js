import Card from "@/Components/Card";
import Head from "next/head";


const index = ({ posts }) => {
    console.log(posts)
    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <h1>this is blog main page</h1>
            {
                posts.map(post => <Card post={post} key={post.id}></Card>)
            }

        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }
}

export default index;