import { useRouter } from "next/router";

const PostDetails = ({ post }) => {

    const router = useRouter()
    const backHandle = () => {
        router.push('/Post')
    }
    return (
        <div>
            {
                <div className="card mt-10 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">{post?.title}</h2>
                        <p>{post?.body}</p>
                        <div onClick={backHandle} className="card-actions justify-end">
                            <button className="btn">Back to the Post</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default PostDetails;
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}


export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    const paths = posts?.map(post => {
        return {
            params: {
                postId: `${post?.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}