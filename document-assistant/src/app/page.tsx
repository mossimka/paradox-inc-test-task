import { Container } from "@mui/material";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <div>
      <main>
        <Container sx={{ mt: 4, mb: 4 }}>
          <HeroSection />

          <AboutSection />
        </Container>
      </main>
    </div>
  );
}
