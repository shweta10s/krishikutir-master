import About from "@/app/components/about";
import Blog from "@/app/components/blog";
import Divider from "@/app/components/divider";
import Features from "@/app/components/divider";
import HeroSection from "@/app/components/hero-section";
import Product from "@/app/components/product";
import Services from "@/app/components/services";
import Provide from "@/app/components/services";
import Testimonial from "@/app/components/testimonial";
import WhyChoose from "@/app/components/why-choose";
import PopupForm from "./components/popupForm";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <div>
      {/* ✅ Add the popup component at the top level */}
      <PopupForm />

      <HeroSection />
      <Services />
      <About />
      <Product />
      <WhyChoose />
      <Blog />
      <Divider />
      <Testimonial />
      <Gallery />
      {/* <Whatsapp /> */}
    </div>
  );
}
