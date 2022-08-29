import { useRouter } from 'next/router';

const Project = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div style={{ flex: 1, marginBlock: "1rem", marginRight: "1rem", position: "relative" }}>
            {slug}
        </div>
    );
};

export default Project;
