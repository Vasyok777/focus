import type { Course } from "./types";

export const courses: Course[] = [
  {
    number: "01",
    title: "Basics of photography",
    description:
      "During this course, you will be able to familiarize yourself with different types of cameras, learn the basics of composition.",
    href: "/courses/basics",
  },
  {
    number: "02",
    title: "Landscape photography",
    description:
      "In this course, you'll learn how to choose the right angles, frame landscapes, and create depth and perspective in your images.",
    href: "/courses/landscape",
  },
  {
    number: "03",
    title: "Portrait photography",
    description:
      "During this course, you will learn to choose the right lighting, reproduce the mood and expressions on the faces of the models.",
    href: "/courses/portrait",
  },
];
