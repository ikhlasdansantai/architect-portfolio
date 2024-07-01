import { Box, Grid } from "@mui/material";
import CallToAction from "./components/sections/CallToAction";
import { projects } from "./datas";
import Categories from "./components/sections/Categories";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import BoxGallery from "./components/sections/BoxGallery";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Box component="main">
        <AboutMe />

        <Categories />
        <Grid container className="galeries" justifyContent={"space-between"} mx={"auto"} mt={10} rowGap={6} sx={{ maxWidth: "lg", paddingInline: { xs: 2, lg: 0 } }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={3.5} key={index}>
              <BoxGallery {...project} />
            </Grid>
          ))}
        </Grid>

        <CallToAction />
      </Box>
    </Box>
  );
}

export default App;
