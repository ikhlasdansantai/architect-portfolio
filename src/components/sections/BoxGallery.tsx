import { Box, Typography } from "@mui/material";

export default function BoxGallery({ title, img }: { title: string; img: string }) {
  return (
    <Box component="figure" display="flex" flexDirection="column" gap={2}>
      <Box sx={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <img src={img} className="img" />
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h6" color="white">
          {title}
        </Typography>
        {/* <Typography variant="caption" color="white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptate officia quibusdam eos...
        </Typography> */}
      </Box>
    </Box>
  );
}
