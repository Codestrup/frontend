import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function WorkProcess1() {
  return (
    <>
      <section
        className="work-process-section fix "
        style={{ paddingTop: "70px", paddingBottom: "70px" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 style={{ marginBottom: "10px" }}>Internship & Course Features</h2>
            <span style={{ fontWeight: 600 }}>
              Get global work experience in any programming language with
              Virtual Internships, India's No. 1 platform for remote Internships & Course Certification.
            </span>
          </div>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: { xs: "16px", md: "16px", lg: "16px" },
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 430,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem className="wow fadeInUp" data-wow-delay=".3s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <LaptopChromebookIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work on live projects." />
                </ListItem>
                <ListItem className="wow fadeInUp" data-wow-delay=".3s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <TaskAltIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary=" Receive task reviews and approvals from experts." />
                </ListItem>
                <ListItem className="wow fadeInUp" data-wow-delay=".5s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <SmartToyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary=" Get help from AI to learn and guide you in completing project tasks." />
                </ListItem>
                <ListItem className="wow fadeInUp" data-wow-delay=".5s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <SchoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary=" Access text courses for learning." />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6} className="highlights">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 430,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem className="wow fadeInUp" data-wow-delay=".7s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <WorkHistoryIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary=" Get alerts for new job openings." />
                </ListItem>
                <ListItem className="wow fadeInUp" data-wow-delay=".7s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <CardMembershipIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary=" Receive an internship certificate upon completing all projects and tasks." />
                </ListItem>
                <ListItem className="wow fadeInUp" data-wow-delay=".9s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <LinkedInIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="   Share your internship certificate directly on your LinkedIn profile." />
                </ListItem>

                <ListItem className="wow fadeInUp" data-wow-delay=".9s">
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#384bff" }}>
                      <OndemandVideoIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="   Access Video Courses For Learning." />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>

        {/* </div> */}
      </section>
    </>
  );
}
