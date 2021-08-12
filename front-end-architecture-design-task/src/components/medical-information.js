import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

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

function MedicalInformation({ formProps: { register, errors }, data }) {
  const {
    bloodType,
    allergic,
    allergicDetail,
    surgery,
    surgeryDetail,
    pregnant,
    pill,
    pillDetail,
    injured,
    workout,
    faint,
  } = data[0];
  const [allergic1, setAllergic] = useState(allergic === "true");
  const [surgery1, setSurgery] = useState(surgery === "true");
  const [pill1, setPill] = useState(pill === "true");
  const classes = useStyles();
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
            <FormLabel className={classes.label}>- หมู่เลือด</FormLabel>
            <RadioGroup
              name="bloodType"
              defaultValue={bloodType}
              className={classes.radio}
              row
            >
              <FormControlLabel
                inputRef={register}
                value="A"
                control={<Radio color="primary" />}
                label="A"
              />
              <FormControlLabel
                inputRef={register}
                value="B"
                control={<Radio color="primary" />}
                label="B"
              />
              <FormControlLabel
                inputRef={register}
                value="O"
                control={<Radio color="primary" />}
                label="O"
              />
              <FormControlLabel
                inputRef={register}
                value="AB"
                control={<Radio color="primary" />}
                label="AB"
              />
            </RadioGroup>
            {errors.bloodType && (
              <p className={classes.errorMessage}>{errors.bloodType.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              - ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  inputRef={register}
                  value={allergic1}
                  color="primary"
                  checked={allergic1}
                  onChange={(event) => setAllergic(event.target.checked)}
                  name="allergic"
                />
              }
              label="มี"
            />
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          {allergic1 === true ? (
            <FormControl className={classes.formControl}>
              <TextField
                className={classes.text}
                inputRef={register}
                error={!!errors.allergicDetail}
                multiline
                maxRows={3}
                minRows={3}
                name="allergicDetail"
                id="allergicDetail"
                label="รายละเอียด"
                margin="normal"
                variant="outlined"
                defaultValue={allergicDetail}
                autoFocus
              />
            </FormControl>
          ) : null}
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              - ท่านมีโรคประจำตัว หรือไม่
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  inputRef={register}
                  value={surgery1}
                  color="primary"
                  checked={surgery1}
                  onChange={(event) => setSurgery(event.target.checked)}
                  name="surgery"
                />
              }
              label="มี"
            />
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          {surgery1 === true ? (
            <FormControl className={classes.formControl}>
              <TextField
                className={classes.text}
                inputRef={register}
                error={!!errors.surgeryDetail}
                multiline
                maxRows={3}
                minRows={3}
                name="surgeryDetail"
                id="surgeryDetail"
                label="รายละเอียด"
                margin="normal"
                variant="outlined"
                defaultValue={surgeryDetail}
                autoFocus
              />
            </FormControl>
          ) : null}
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              - ท่านมีแผนที่จะมีบุตร หรือ
              กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่
            </FormLabel>
            <RadioGroup
              name="pregnant"
              defaultValue={pregnant}
              className={classes.radio}
              row
            >
              <FormControlLabel
                inputRef={register}
                value="yes"
                control={<Radio color="primary" />}
                label="ใช่"
              />
              <FormControlLabel
                inputRef={register}
                value="no"
                control={<Radio color="primary" />}
                label="ไม่ใช่"
              />
            </RadioGroup>
            {errors.pregnant && (
              <p className={classes.errorMessage}>{errors.pregnant.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              - ท่านมียาที่ต้องทานเป็นประจำหรือไม่
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  inputRef={register}
                  color="primary"
                  value={pill1}
                  checked={pill1}
                  onChange={(event) => setPill(event.target.checked)}
                  name="pill"
                />
              }
              label="มี"
            />
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          {pill1 === true ? (
            <FormControl className={classes.formControl}>
              <TextField
                className={classes.text}
                inputRef={register}
                error={!!errors.pillDetail}
                multiline
                maxRows={3}
                minRows={3}
                name="pillDetail"
                id="pillDetail"
                label="รายละเอียด"
                margin="normal"
                variant="outlined"
                defaultValue={pillDetail}
                autoFocus
              />
            </FormControl>
          ) : null}
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              - ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง
              ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือไม่
            </FormLabel>
            <RadioGroup
              name="injured"
              defaultValue={injured}
              className={classes.radio}
              row
            >
              <FormControlLabel
                inputRef={register}
                value="yes"
                control={<Radio color="primary" />}
                label="ใช่"
              />
              <FormControlLabel
                inputRef={register}
                value="no"
                control={<Radio color="primary" />}
                label="ไม่ใช่"
              />
            </RadioGroup>
            {errors.injured && (
              <p className={classes.errorMessage}>{errors.injured.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              - ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์)
            </FormLabel>
            <RadioGroup
              name="workout"
              defaultValue={workout}
              className={classes.radio}
              row
            >
              <FormControlLabel
                inputRef={register}
                value="yes"
                control={<Radio color="primary" />}
                label="ใช่"
              />
              <FormControlLabel
                inputRef={register}
                value="no"
                control={<Radio color="primary" />}
                label="ไม่ใช่"
              />
            </RadioGroup>
            {errors.workout && (
              <p className={classes.errorMessage}>{errors.workout.message}</p>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>
              - ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด
              ขณะออกกำลังกายหรือไม่?
            </FormLabel>
            <RadioGroup
              name="faint"
              defaultValue={faint}
              className={classes.radio}
              row
            >
              <FormControlLabel
                inputRef={register}
                value="yes"
                control={<Radio color="primary" />}
                label="ใช่"
              />
              <FormControlLabel
                inputRef={register}
                value="no"
                control={<Radio color="primary" />}
                label="ไม่ใช่"
              />
            </RadioGroup>
            {errors.faint && (
              <p className={classes.errorMessage}>{errors.faint.message}</p>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default MedicalInformation;
