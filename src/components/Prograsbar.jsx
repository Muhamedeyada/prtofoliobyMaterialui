import { styled } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`& .MuiLinearProgress-bar`]: {
    backgroundColor: "#4caf50",
  },
  [`& .MuiLinearProgress-bar1Buffer`]: {
    backgroundColor: "gray",
  },
  [`& .MuiLinearProgress-bar2Buffer`]: {
    backgroundColor: "gray",
  },
}));

export default function Prograsbar({ value }) {
  return (
    <div>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <br />
        <BorderLinearProgress variant="determinate" value={value} />
      </Stack>
    </div>
  );
}
