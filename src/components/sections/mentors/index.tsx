import { Container, Heading } from "@/components/ui";
import { MentorCard } from "./card";
import { mentors } from "./data";

export function Mentors() {
  return (
    <section>
      <Container>
        <Heading as="h2">
          Our <span className="text-accent">Mentors</span>
        </Heading>

        <div className="mt-12.5 flex justify-center gap-25">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.name} {...mentor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
