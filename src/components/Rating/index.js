import Rating from "@material-ui/lab/Rating";
import { Typography, Box } from "@material-ui/core";

import { RatingContainer } from "./styles";

const SimpleRating = ({ value, setValue, readOnly = false }) => {
  return (
    <RatingContainer>
      <Box component="fieldset" mb={3} width={300} borderColor="transparent">
        <Typography component="legend">Status</Typography>

        <Rating
          readOnly={readOnly}
          name="simple-controlled"
          max={3}
          size="large"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </RatingContainer>
  );
};

export default SimpleRating;
