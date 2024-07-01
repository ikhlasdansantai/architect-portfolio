import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollClass, setScrollClass] = useState({
    borderClass: window.innerWidth < 640 ? "" : "3px solid #ff0000",
    bgClass: window.innerWidth < 640 ? "" : "",
    textClass: window.innerWidth < 640 ? "#141414" : "",
  });

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;

    setScrollClass({
      borderClass: isScrolled ? "" : "3px solid #ff0000",
      bgClass: isScrolled ? "white" : "",
      textClass: isScrolled ? "#141414" : "white",
    });

    // if (window.innerWidth < 640) {
    //   setScrollClass({
    //     borderClass: "",
    //     bgClass: "",
    //     textClass: "black",
    //   });
    // } else {
    //   setScrollClass({
    //     borderClass: isScrolled ? "" : "3px solid #ff0000",
    //     bgClass: isScrolled ? "white" : "",
    //     textClass: isScrolled ? "#141414" : "white",
    //   });
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setScrollClass({ ...scrollClass, textClass: "white" });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box position={"fixed"} top={0} left={0} right={0} bgcolor={scrollClass.bgClass} sx={{ zIndex: 1000, transition: "0.3s", paddingInline: { xs: 2, md: 0 } }}>
      <Box maxWidth={"lg"} mx={"auto"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} py={2} borderBottom={scrollClass.borderClass}>
        <Box className="left">
          <Typography variant="subtitle1" fontWeight={"bold"} color={scrollClass.textClass}>
            Dennes Rizky Shadewa
          </Typography>
          <Typography sx={{ letterSpacing: 3 }} variant="caption" color={scrollClass.textClass}>
            architect & designer
          </Typography>
        </Box>
        {/* Desktop */}
        <Box className="right" display="flex" gap={4} sx={{ display: { xs: "none", sm: "flex" } }}>
          <Box className="contact" display="flex" flexDirection="column">
            <Typography variant="caption" color={scrollClass.textClass}>
              Email Me
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold" color={scrollClass.textClass}>
              dennesrizqyshadewa@gmail.com
            </Typography>
          </Box>
          <Box className="contact" display="flex" flexDirection="column">
            <Typography variant="caption" color={scrollClass.textClass}>
              Call Me
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold" color={scrollClass.textClass}>
              (+62) 882-1874-2057
            </Typography>
          </Box>
        </Box>
        {/* Mobile */}
        <Box id="nav-icon2" onClick={() => setShowNavbar(!showNavbar)} sx={{ display: { xs: "block", sm: "none" } }} className={showNavbar ? "open" : ""}>
          <Box component="span"></Box>
          <Box component="span"></Box>
          <Box component="span"></Box>
          <Box component="span"></Box>
          <Box component="span"></Box>
          <Box component="span"></Box>
        </Box>
      </Box>
    </Box>
  );
}
