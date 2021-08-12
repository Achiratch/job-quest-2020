import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


const useStyles = makeStyles((theme) => ({
  formControl: {
    width: 500,
  },

  text: {
    marginBottom: theme.spacing(3),
  },
  label: {
    textAlign: "left",
  },
  radio: {
    marginLeft: theme.spacing(),
    marginBottom: theme.spacing(2),
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem",
    textAlign: "left",
  },
}));
function SouvenirShirt({ formProps: { register, errors },data }) {
  const classes = useStyles();
  const { size } = data[0];
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
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>- ไซส์เสื้อ</FormLabel>
            <RadioGroup
              name="size"
              defaultValue={size}
              className={classes.radio}
              row
            >
              <FormControlLabel
                inputRef={register}
                value="XS"
                control={<Radio color="primary" />}
                label="XS"
              />
              <FormControlLabel
                inputRef={register}
                value="S"
                control={<Radio color="primary" />}
                label="S"
              />
              <FormControlLabel
                inputRef={register}
                value="M"
                control={<Radio color="primary" />}
                label="M"
              />
              <FormControlLabel
                inputRef={register}
                value="L"
                control={<Radio color="primary" />}
                label="L"
              />
              <FormControlLabel
                inputRef={register}
                value="XL"
                control={<Radio color="primary" />}
                label="XL"
              />
              <FormControlLabel
                inputRef={register}
                value="XXL"
                control={<Radio color="primary" />}
                label="XXL"
              />
              <FormControlLabel
                inputRef={register}
                value="XXXL"
                control={<Radio color="primary" />}
                label="XXXL"
              />
            </RadioGroup>
            {errors.size && (
              <p className={classes.errorMessage}>{errors.size.message}</p>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default SouvenirShirt;
