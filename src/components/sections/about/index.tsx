import Image from "next/image";
import { Container, Heading, Text } from "@/components/ui";

export function About() {
  return (
    <section>
      <Container>
        <Heading as="h2">
          About <span className="text-accent">Us</span>
        </Heading>

        <div className="mt-12.5 grid grid-cols-[8fr_9fr] gap-12.5 items-start">
          <div className="bg-accent rounded-[1000px] overflow-hidden">
            <Image
              src="/camera.png"
              alt="Photography"
              width={560}
              height={240}
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-[314fr_276fr] gap-10">
            <Text>
              Our photography school is designed to teach you everything you
              need to know about this magical art. Regardless of your experience
              or skill level, we offer a wide range of courses to suit your
              needs and interests. Our teaching team consists of experienced
              photographers who have many years of experience in this field.
              They strive not only to share their knowledge, but also to inspire
              you to develop and express your unique creativity.
            </Text>

            <Text>
              Our courses cover a wide range of topics, from the basics of
              photography and equipment use to professional image processing and
              creating impressive compositions. You will have the opportunity to
              learn the technical aspects of photography, discover your own
              style and develop your own visual language.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}
