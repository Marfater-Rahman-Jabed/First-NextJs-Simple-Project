import Link from "next/link";

const Card = ({ post }) => {
    return (
        <div>
            <div className="card bg-red-100  shadow-xl my-10 mx-5">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>

                    <Link href={`/Post/${post?.id}`}>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;