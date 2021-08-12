import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  radio: {
    marginLeft: theme.spacing(1),
  },
  textField: {
    width: 250,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
    textAlign: "left",
  },
}));

function InformationRunning({
  formProps: { register, errors, getValues, setValue },
  data,
}) {
  const classes = useStyles();
  const { marathon, time } = data[0];
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item md={12} xs={12}>
          <FormControl error={!!errors.marathon}>
            <FormLabel>
              Have you ever competed in Mini Marathon / Half Marathon / Full
              Marathon before?
            </FormLabel>
            <RadioGroup name="marathon" defaultValue={marathon} className={classes.radio} row>
              <FormControlLabel
                inputRef={register}
                value="yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                inputRef={register}
                value="no"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
            {errors.marathon && (
              <p className={classes.errorMessage}>{errors.marathon.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl>
            <TextField
              id="time"
              name="time"
              label="เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้"
              type="time"
              defaultValue={time}
              inputRef={register}
              error={!!errors.time}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {errors.time && (
              <p className={classes.errorMessage}>{errors.time.message}</p>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default InformationRunning;
