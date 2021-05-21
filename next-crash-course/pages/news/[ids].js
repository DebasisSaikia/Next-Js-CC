import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();
  const path = router.query.ids;
  return (
    <div>
      <h1>Dynamic</h1>
      <h4>{path}</h4>
    </div>
  );
};

export default Dynamic;
