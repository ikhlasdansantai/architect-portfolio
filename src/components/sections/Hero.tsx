import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box component="figure" sx={{ height: "100dvh" }} className="bg-image" display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ width: { xs: "100%", lg: "50%" }, mt: { xs: 10, lg: 10 }, paddingInline: { xs: 2, lg: 0  } }} mx={"auto"} display="flex" flexDirection="column" rowGap={4}>
        <Typography variant="h1" component="h1" textAlign="center" color="white" fontWeight="bold" sx={{ mx: "auto" }}>
          The New Future Of Architecture
        </Typography>
        <Typography color="white" textAlign="center">
          Pushing the boundaries of design to create extraordinary spaces. We embrace innovation and creativity to redefine what architecture can be.
        </Typography>
        <Box className="animate-btn">
          <Box className="animate-cursor"></Box>
        </Box>
        <Typography color="white" textAlign="center" variant="caption" letterSpacing={3}>
          scroll down
        </Typography>
      </Box>
    </Box>
  );
}
