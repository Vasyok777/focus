import { Container, Heading } from "@/components/ui";
import { ReviewCard } from "./card";
import { reviews } from "./data";

export function Reviews() {
  return (
    <section>
      <Container>
        <Heading as="h2">Reviews</Heading>

        <div className="mt-12.5 grid grid-cols-2 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
