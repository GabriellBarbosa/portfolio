"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface Props {
  lang: string;
}

export function SelectLanguage(props: Props) {
  const { lang } = props;
  const router = useRouter();

  const handleChange = useCallback((value: any) => {
    router.push(`/${value}`);
  }, []);

  return (
    <Select defaultValue={lang} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">Português &#x1f1e7;&#x1f1f7;</SelectItem>
        <SelectItem value="en">English &#x1F1FA;&#x1F1F8;</SelectItem>
      </SelectContent>
    </Select>
  );
}
