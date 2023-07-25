import { Frame } from "@/components/frame";
import { NavItems } from "@/components/nav";

export default function Default({
  searchParams: { id },
}: {
  searchParams: Record<string, string>;
}) {
  return (
    <Frame
      borderClassName="border-orange-200"
      textClassName="text-orange-400"
      text="app/(no-modal)/about/page.tsx"
    >
      <NavItems navItems={[{ href: `/photo?id=999`, text: `Photo #999` }]} />
    </Frame>
  );
}
