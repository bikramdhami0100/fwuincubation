import ProgramContent from "@/app/components/programs/slug/ProgramContent";
import { programsData } from "@/data/programsData";


// This is a server component
export default function ProgramPage({ params }: { params: { slug: string } }) {
  // Find the program with the matching slug
  const program = programsData?.find((item) => item?.slug === params?.slug) || null;
  // Pass the program to the client componen
    if(!program){
    return <div>Program not found</div>;
  }
  return <ProgramContent program={program} />;
}

// Generate static params for all programs
// export async function generateStaticParams() {
//   return allProgramsData.map((program) => ({
//     slug: program.slug,
//   }));
// }
