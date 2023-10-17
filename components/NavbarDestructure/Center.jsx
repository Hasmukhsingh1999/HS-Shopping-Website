import Link from "next/link";


const Center = () => {
  return (
    <div className={`flex items-center gap-2 flex-1 justify-center `}>
      <Link href={'/'}>
      <h1 className={`text-3xl font-bold`}>HS</h1>
      </Link>
    </div>
  );
};

export default Center;
