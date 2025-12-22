import { getDictionary } from "./dictionaries";
import { SelectLanguage } from "@/components/SelectLanguage";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        {dict.title}
      </h1>

      <SelectLanguage lang={lang} />
    </div>
  );
}
