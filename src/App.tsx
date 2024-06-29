import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Navbar() {
  // *Fitur Navbar on scroll
  const [scrollClass, setScrollClass] = useState({
    borderClass: window.innerWidth < 640 ? "" : "3px solid #aaa",
    bgClass: window.innerWidth < 640 ? "white" : "",
    textClass: window.innerWidth < 640 ? "black" : "",
  });

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;

    if (window.innerWidth < 640) {
      setScrollClass({
        borderClass: "3px solid #aaa",
        bgClass: "white",
        textClass: "text-black",
      });
    } else {
      setScrollClass({
        borderClass: isScrolled ? "" : "3px solid #aaa",
        bgClass: isScrolled ? "white" : "",
        textClass: isScrolled ? "black" : "white",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setScrollClass({ ...scrollClass, textClass: "white" });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box position={"fixed"} top={0} left={0} right={0} bgcolor={scrollClass.bgClass} sx={{ zIndex: 1000, transition: "0.3s" }}>
      <Box maxWidth={"lg"} mx={"auto"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} py={1.5} borderBottom={scrollClass.borderClass}>
        <Box className="left">
          <Typography variant="subtitle1" fontWeight={"bold"} color={scrollClass.textClass}>
            Dennes Rizky Shadewa
          </Typography>
          <Typography sx={{ letterSpacing: 3 }} variant="caption" color={scrollClass.textClass}>
            architect & designer
          </Typography>
        </Box>
        <Box className="right" display="flex" gap={4}>
          <Box className="contact" display="flex" flexDirection="column">
            <Typography variant="caption" color={scrollClass.textClass}>
              Email Me
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold" color={scrollClass.textClass}>
              dennesvietnam@gmail.com
            </Typography>
          </Box>
          <Box className="contact" display="flex" flexDirection="column">
            <Typography variant="caption" color={scrollClass.textClass}>
              Call Me
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold" color={scrollClass.textClass}>
              081220203994
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Hero() {
  return (
    <Box component="figure" sx={{ height: "100dvh" }} className="bg-image" display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ width: { xs: "100%", lg: "50%" }, mt: { xs: 10, lg: 2 } }} mx={"auto"} display="flex" flexDirection="column" rowGap={4}>
        <Typography variant="h1" component="h1" textAlign="center" color="white" fontWeight="bold" sx={{ mx: "auto" }}>
          The New Future Of Architecture
        </Typography>
        <Typography color="white" textAlign="center">
          Pushing the boundaries of design to create extraordinary spaces. We embrace innovation and creativity to redefine what architecture can be.
        </Typography>
        <Box className="animate-btn">
          <Box className="animate-cursor"></Box>
        </Box>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  );
}

export default App;
