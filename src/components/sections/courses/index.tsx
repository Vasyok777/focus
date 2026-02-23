import { Container, Heading, Text } from "@/components/ui";
import { CourseCard } from "./card";
import { courses } from "./data";

export function Courses() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-[1fr_565px] gap-12.5 items-start">
          <Heading as="h2">
            Our <span className="text-accent">Courses</span>
          </Heading>
          <Text>
            At our photography school, we offer a variety of courses that cover
            all aspects of this fascinating art. Regardless of your experience
            or skill level, we have courses to suit your needs and goals.
          </Text>
        </div>

        <div className="mt-12.5 grid grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.number} {...course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
