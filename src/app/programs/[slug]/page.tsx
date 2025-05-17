import { allProgramsData } from "../page";
import ProgramContent from "../../components/programs/slug/ProgramContent";

// This is a server component
export default function ProgramPage({ params }: { params: { slug: string } }) {
  // Find the program with the matching slug
  const program:any = allProgramsData.find((item) => item.slug === params.slug) || null;

  // Pass the program to the client component
  return <ProgramContent program={program} />;
}

// Generate static params for all programs
export async function generateStaticParams() {
  return allProgramsData.map((program) => ({
    slug: program.slug,
  }));
}
