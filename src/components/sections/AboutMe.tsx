import { Box, Button, Grid, Typography } from "@mui/material";
import { Profile, Ps, Id, Sk, Tm, Es, Ac, Rn, Ns } from "../../constants/Image";

export default function AboutMe() {
  return (
    <Grid container maxWidth={"lg"} mx="auto" my={10} justifyItems={"center"} justifyContent={"center"} gap={8} sx={{ paddingInline: { xs: 2, lg: 0 } }}>
      <Grid item md={4.5} border={"2px solid #5A79AB"} borderRadius={8} pt={4}>
        <img src={Profile} alt="profile" className="img" />
      </Grid>
      <Grid item md={5} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h2" component="h2" fontWeight="bold" color="white" sx={{ width: { lg: "15ch" } }}>
          A Few Words About Me
        </Typography>
        <Typography variant="caption" color="rgba(255,255,255,0.75)">
          An enthusiastic architecture student passionate about conceptual design. Over three years at the National Institute of Technology, I've been involved in diverse academic and practical projects that apply theory to practice.
        </Typography>

        <Box display={"flex"} flexDirection="column" gap={3}>
          <Box display={"flex"} flexDirection="column" gap={0.5}>
            <Typography variant="caption" color="rgba(255,255,255,0.75)">
              Education
            </Typography>
            <Typography variant="subtitle2" color="whitesmoke">
              Institut Teknologi Nasional, Bandung
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" gap={0.5}>
            <Typography variant="caption" color="rgba(255,255,255,0.75)">
              Degree
            </Typography>
            <Typography variant="subtitle2" color="whitesmoke">
              BSc. in Architecture
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" gap={0.5}>
            <Typography variant="caption" color="rgba(255,255,255,0.75)">
              Language
            </Typography>
            <Typography variant="subtitle2" color="whitesmoke">
              Bahasa Indonesia (native)
            </Typography>
            <Typography variant="subtitle2" color="whitesmoke">
              English (beginners)
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" gap={1}>
            <Typography variant="caption" color="rgba(255,255,255,0.75)">
              Tools Skills
            </Typography>

            <Box className="soft_skills_cards" display="flex" gap={2}>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Ps} alt="photoshop" className="img" />
              </Box>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Id} alt="indesign" className="img" />
              </Box>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Sk} alt="indesign" className="img" />
              </Box>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Tm} alt="indesign" className="img" />
              </Box>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Es} alt="indesign" className="img" />
              </Box>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Ac} alt="indesign" className="img" />
              </Box>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Rn} alt="indesign" className="img" />
              </Box>
              <Box component="figure" color="whitesmoke" width={30}>
                <img src={Ns} alt="indesign" className="img" />
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Typography variant="subtitle2" color="rgba(255,255,255,0.75)">
              Organization Experience
            </Typography>
            <Box>
              <Typography variant="subtitle2" color="whitesmoke">
                Itenas Architecture Week (March 2024)
              </Typography>
              <Typography variant="subtitle2" color="whitesmoke">
                Sarthapura (March 2022)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button variant="contained" sx={{ color: "white", borderColor: "white", padding: "1rem 1.6rem", fontSize: ".75rem", fontWeight: "semibold", letterSpacing: 1, mt: 2, display: "block", mr: "auto" }}>
          See More
        </Button>
      </Grid>
    </Grid>
  );
}
