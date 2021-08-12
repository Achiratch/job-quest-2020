import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({}));

function Finish({ data1, data2, data3, data4, data5 }) {
  const {
    prefix,
    firstName,
    lastName,
    prefixTh,
    firstNameTh,
    lastNameTh,
    birthday,
    email,
    idCard,
    phoneNumber,
    address,
    bib,
    photo,
  } = data1[0];

  const { marathon, time } = data2[0];
  const {
    firstNameE,
    lastNameE,
    phoneNumberE,
    relationship,
    firstNameE2,
    lastNameE2,
    phoneNumberE2,
    relationship2,
  } = data3[0];
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
  } = data4[0];
  const { size } = data5[0];
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        {data1 && data2 && data3 && data4 && data5 && (
          <div>
            <p>
              <b>Name: </b>
              {prefix} {firstName} {lastName}
            </p>
            <p>
              <b>ชื่อ: </b>
              {prefixTh} {firstNameTh} {lastNameTh}
            </p>
            <p>
              <b>Birthday: </b>
              {birthday} <b>Email: </b>
              {email}
            </p>
            <p>
              <b>ID CARD: </b>
              {idCard} <b>Phone: </b>
              {phoneNumber}
            </p>
            <p>
              <b>Address: </b>
              {address}
            </p>
            <p>
              <b>BIB: </b>
              {bib}
            </p>
            <img
              alt={photo[0].name}
              src={photo[0].name}
              width="30"
              height="30"
            />
            <br />
            <p>
              <b>ผู้ติดต่อฉุกเฉินคนที่ 1: </b> {firstNameE} {lastNameE}
            </p>
            <p>
              <b>เบอร์โทรศัพท์: </b>
              {phoneNumberE} <b>ความสัมพันธ์: </b>
              {relationship}
            </p>
            <br />
            <p>
              <b>ผู้ติดต่อฉุกเฉินคนที่ 2: </b> {firstNameE2} {lastNameE2}
            </p>
            <p>
              <b>เบอร์โทรศัพท์: </b>
              {phoneNumberE2} <b>ความสัมพันธ์: </b>
              {relationship2}
            </p>
            <br />
            <p>
              <b>หมู่เลือด: </b>
              {bloodType}
            </p>
            <p>
              <b>ท่านมีแพลนที่จะมีบุตร :</b>
              {pregnant}
            </p>
            {allergic === "true" ? (
              <p>
                <b>มีอาการแพ้ยา :</b>
                {allergicDetail}
              </p>
            ) : (
              <p>
                <b>ไม่มีอาการแพ้ยา</b>
              </p>
            )}
            {surgery === "true" ? (
              <p>
                <b>มีโรคประจำตัว: </b>
                {surgeryDetail}
              </p>
            ) : (
              <p>
                <b>ไม่มีโรคประจำตัว</b>
              </p>
            )}
            {pill === "true" ? (
              <p>
                <b>มียาที่ต้องทานเป็นประจำ: </b>
                {pillDetail}
              </p>
            ) : (
              <p>
                <b>ไม่มียาที่ต้องทานเป็นประจำ</b>
              </p>
            )}
            <p>
              <b>เคยบาดเจ็บหรือไม่: </b>
              {injured}
            </p>
            <p>
              <b>ออกกำลังกายสม่ำเสมอหรือไม่: </b>
              {workout}
            </p>
            <p>
              <b>เคยมีอาการเจ็บแน่นหน้าอก ขณะออกกำลังกายหรือไม่: </b>
              {faint}
            </p>
            <p>
              <b>เสื้อของที่ระลึก: </b>
              {size}
            </p>
          </div>
        )}
      </Grid>
    </>
  );
}

export default Finish;
