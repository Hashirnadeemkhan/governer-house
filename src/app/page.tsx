
import AdvanceCourse from "@/components/widgets/AdvanceCourse";
import CoreCourses from "@/components/widgets/CoreCourses";
import Hero from "@/components/widgets/Hero";
import Technology from "@/components/widgets/Technology";


export default function Home(): JSX.Element {
  return (
    <div >
      <Hero/>
      <Technology/>
      <CoreCourses/>
      <AdvanceCourse/>
 
    </div>
  );
}
