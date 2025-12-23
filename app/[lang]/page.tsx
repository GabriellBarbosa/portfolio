import HomeTemplate from "@/templates/Home";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <HomeTemplate language={lang} />;
}
