import { Box, Container, Typography } from "@mui/material";

export default function Categories() {
  const categoryLinks = ["All Categories", "Architecture", "Interior Design", "Repair"];
  return (
    <Container maxWidth={"lg"}>
      <Box component="ul" display="flex" flexWrap="wrap" justifyContent="center" gap={4} pt={4}>
        {categoryLinks.map((category, index) => (
          <Typography component="li" key={index} className="category" textTransform="uppercase" color={index == 0 ? "#5A79AB" : "whitesmoke"} sx={{ cursor: "pointer" }}>
            {category}
          </Typography>
        ))}
      </Box>
    </Container>
  );
}
