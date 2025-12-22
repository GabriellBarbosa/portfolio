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
        <SelectItem value="pt">Português</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
