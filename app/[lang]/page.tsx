import HomeTemplate from "@/templates/Home";
import { Languages } from "@/templates/Home/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Languages }>;
}) {
  const { lang } = await params;

  return <HomeTemplate language={lang} />;
}
