import { useRouter } from 'next/router';

const Project = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div style={{ paddingLeft: '8rem' }}>{slug}</div>;
};

export default Project;
