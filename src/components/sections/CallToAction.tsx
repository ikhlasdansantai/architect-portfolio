import { Box, Button, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import { Instagram } from "@mui/icons-material";

export default function CallToAction() {
  function composeEmail() {
    const recipient = "dennesrizqyshadewa@gmail.com";
    const subject = "I Want to Discuss About the Project";
    const body =
      "Hi Dennis,\n\nI hope this email finds you well.\n\nI am writing to you today to express my interest in discussing the project further. I have been following the project's development with great interest and believe that I have the skills and experience to contribute to its success.\n\nI have been working in the [Your Field] industry for [Number] years and have a proven track record of [List Your Achievements]. I am particularly interested in [Specific Area of the Project] and believe that I can make a significant contribution in this area.\n\nI would be grateful for the opportunity to discuss the project with you in more detail. Please let me know if you are available for a meeting at your earliest convenience.\n\nThank you for your time and consideration.\n\nSincerely,\n[Your Name]";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  return (
    <Box maxWidth="lg" mx={"auto"} mt={20} mb={10} display="flex" flexDirection="column" alignItems="center" gap={6} sx={{ paddingInline: { xs: 2, lg: 0 } }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h3" color="white" textAlign="center">
          Do you have any project in mind?
        </Typography>
        <Typography variant="subtitle2" color="white" textAlign="center">
          Let's work together
        </Typography>
      </Box>

      <Box className="buttons" display="flex" alignItems="center" gap={2.5}>
        <Button variant="outlined" sx={{ color: "white", borderColor: "white", padding: "1rem 1.6rem", fontSize: ".75rem", fontWeight: "semibold", letterSpacing: 3 }} size="large" onClick={composeEmail}>
          Let's Discuss
        </Button>
        <Box className="social-media" display="flex" gap={1}>
          <Tooltip title="Instagram" arrow TransitionComponent={Zoom} placement="top">
            <IconButton>
              <Instagram sx={{ color: "white", fontSize: "1.75rem", cursor: "pointer" }} onClick={() => window.open("https://www.instagram.com/shadeeofu/")} />
            </IconButton>
          </Tooltip>
          {/* <Facebook sx={{ color: "white", fontSize: "1.75rem" }} /> */}
        </Box>
      </Box>
    </Box>
  );
}
