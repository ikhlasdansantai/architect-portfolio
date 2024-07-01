import { Box, Button, Typography } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";

export default function CallToAction() {
  return (
    <Box maxWidth="lg" mx={"auto"} mt={20} mb={10} display="flex" flexDirection="column" alignItems="center" gap={6}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h3" color="white" textAlign="center">
          Do you have any project in mind?
        </Typography>
        <Typography variant="subtitle2" color="white" textAlign="center">
          Let's work together
        </Typography>
      </Box>

      <Box className="buttons" display="flex" alignItems="center" gap={2.5}>
        <Button variant="outlined" sx={{ color: "white", borderColor: "white", padding: "1rem 1.6rem", fontSize: ".75rem", fontWeight: "semibold", letterSpacing: 3 }} size="large">
          Let's Discuss
        </Button>
        <Box className="social-media" display="flex" gap={1}>
          <Instagram sx={{ color: "white", fontSize: "1.75rem" }} />
          <Facebook sx={{ color: "white", fontSize: "1.75rem" }} />
        </Box>
      </Box>
    </Box>
  );
}
