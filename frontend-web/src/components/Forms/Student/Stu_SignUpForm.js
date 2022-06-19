import React from "react";
import { useState, useEffect } from "react";

import {
  v_required,
  v_min,
  v_match,
  v_email,
  v_containsUppercase,
  v_containsLowercase,
  v_containsNumber,
  v_containsSpecialChars,
} from "../../../utils/validator";

function Stu_SignUpForm() {
  const [nic, setNic] = useState("");
  const [isNicValid, setIsNicValid] = useState(true);
  const [nicError, setNicError] = useState("");

  const [confirmNic, setConfirmNic] = useState("");
  const [isConfirmNicValid, setIsConfirmNicValid] = useState(true);
  const [confirmNicError, setConfirmNicError] = useState("");

  const [nicDateOfIssue, setNicDateOfIssue] = useState("");
  const [isNicDateOfIssueValid, setNicDateOfIssueValid] = useState(true);
  const [nicDateOfIssueError, setNicDateOfIssueError] = useState("");

  const handleNicDetails = async (e) => {
    e.preventDefault();

    setIsNicValid(true);
    setNicError("");
    setIsConfirmNicValid(true);
    setConfirmNicError("");
    setNicDateOfIssueValid(true);
    setNicDateOfIssueError("");

    if (!v_required(nic)) {
      setIsNicValid(false);
      setNicError("NIC can't be empty.");
    }

    if (!v_match(nic, confirmNic)) {
      setIsConfirmNicValid(false);
      setConfirmNicError("NICs are not matched.");
    }

    if (!v_required(nicDateOfIssue)) {
      setNicDateOfIssueValid(false);
      setNicDateOfIssueError("NIC issued date can't be empty.");
    }
  };

  const [indexNo, setIndexNo] = useState("");
  const [isIndexNoValid, setIndexNoValid] = useState(true);
  const [indexNoError, setIndexNoError] = useState("");

  const [usedIDType, setUsedIDType] = useState("");
  const [isUsedIDTypeValid, setUsedIDTypeValid] = useState(true);
  const [usedIDTypeError, setUsedIDTypeError] = useState("");

  const [usedIDNo, setUsedIDNo] = useState("");
  const [isUsedIDNoValid, setUsedIDNoValid] = useState(true);
  const [usedIDNoError, setUsedIDNoError] = useState("");

  const [usedIDDateOfIssue, setUsedIDDateOfIssue] = useState("");
  const [isUsedIDDateOfIssueValid, setUsedIDDateOfIssueValid] = useState(true);
  const [usedIDDateOfIssueError, setUsedIDDateOfIssueError] = useState("");

  const [usedIDCopy, setUsedIDCopy] = useState("");
  const [isUsedIDCopyValid, setUsedIDCopyValid] = useState(true);
  const [usedIDCopyError, setUsedIDCopyError] = useState("");

  const handleExamDetails = async (e) => {
    e.preventDefault();

    setIndexNoValid(true);
    setIndexNoError("");
    setUsedIDTypeValid(true);
    setUsedIDTypeError("");
    setUsedIDNoValid(true);
    setUsedIDNoError("");
    setUsedIDDateOfIssueValid(true);
    setUsedIDDateOfIssueError("");
    setUsedIDCopyValid(true);
    setUsedIDCopyError("");

    if (!v_required(indexNo)) {
      setIndexNoValid(false);
      setIndexNoError("Index number can't be empty.");
    }

    if (!v_required(usedIDType)) {
      setUsedIDTypeValid(false);
      setUsedIDTypeError("ID type can't be empty.");
    }

    if (!v_required(usedIDNo)) {
      setUsedIDNoValid(false);
      setUsedIDNoError("Used ID number can't be empty.");
    }

    if (!v_required(usedIDDateOfIssue)) {
      setUsedIDDateOfIssueValid(false);
      setUsedIDDateOfIssueError("Used ID date of issue can't be empty.");
    }

    if (!v_required(usedIDCopy)) {
      setUsedIDCopyValid(false);
      setUsedIDCopyError("Used ID copy can't be empty.");
    }
  };

  const [title, setTitle] = useState("");
  const [isTitleValid, setTitleValid] = useState(true);
  const [titleError, setTitleError] = useState("");

  const [nameWithInitials, setNameWithInitials] = useState("");
  const [isNameWithInitialsValid, setNameWithInitialsValid] = useState(true);
  const [nameWithInitialsError, setNameWithInitialsError] = useState("");

  const [fullName, setFullName] = useState("");
  const [isFullNameValid, setFullNameValid] = useState(true);
  const [fullNameError, setFullNameError] = useState("");

  const [dob, setDob] = useState("");
  const [isDobValid, setDobValid] = useState(true);
  const [dobError, setDobError] = useState("");

  const [pob, setPob] = useState("");
  const [isPobValid, setPobValid] = useState(true);
  const [pobError, setPobError] = useState("");

  const [civilStatus, setCivilStatus] = useState("");
  const [isCivilStatusValid, setCivilStatusValid] = useState(true);
  const [civilStatusError, setCivilStatusError] = useState("");

  const [gender, setGender] = useState("");
  const [isGenderValid, setGenderValid] = useState(true);
  const [genderError, setGenderError] = useState("");

  const handleStudentDetails = async (e) => {
    e.preventDefault();

    setTitleValid(true);
    setTitleError("");
    setNameWithInitialsValid(true);
    setNameWithInitialsError("");
    setFullNameValid(true);
    setFullNameError("");
    setDobValid(true);
    setDobError("");
    setPobValid(true);
    setPobError("");
    setCivilStatusValid(true);
    setCivilStatusError("");
    setGenderValid(true);
    setGenderError("");

    if (!v_required(title)) {
      setTitleValid(false);
      setTitleError("Title can't be empty.");
    }

    if (!v_required(nameWithInitials)) {
      setNameWithInitialsValid(false);
      setNameWithInitialsError("Name with initials can't be empty.");
    }

    if (!v_required(fullName)) {
      setFullNameValid(false);
      setFullNameError("Fullname can't be empty.");
    }

    if (!v_required(dob)) {
      setDobValid(false);
      setDobError("Date of birth can't be empty.");
    }

    if (!v_required(pob)) {
      setPobValid(false);
      setPobError("Place of birth can't be empty.");
    }

    if (!v_required(civilStatus)) {
      setCivilStatusValid(false);
      setCivilStatusError("Civil status can't be empty.");
    }

    if (!v_required(gender)) {
      setGenderValid(false);
      setGenderError("Gender can't be empty.");
    }
  };

  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [isPhoneValid, setPhoneValid] = useState(true);
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const [pwd_guideline_length, set_pwd_guideline_length] = useState(false);
  const [pwd_guideline_uppercase, set_pwd_guideline_uppercase] =
    useState(false);
  const [pwd_guideline_lowercase, set_pwd_guideline_lowercase] =
    useState(false);
  const [pwd_guideline_number, set_pwd_guideline_number] = useState(false);
  const [pwd_guideline_specialChar, set_pwd_guideline_specialChar] =
    useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  useEffect(() => {
    set_pwd_guideline_length(v_min(password, 8));
    set_pwd_guideline_uppercase(v_containsUppercase(password));
    set_pwd_guideline_lowercase(v_containsLowercase(password));
    set_pwd_guideline_number(v_containsNumber(password));
    set_pwd_guideline_specialChar(v_containsSpecialChars(password));
  }, [password]);

  const handleLoginDetails = async (e) => {
    e.preventDefault();

    setEmailValid(true);
    setEmailError("");
    setPhoneValid(true);
    setPhoneError("");
    setPasswordValid(true);
    setPasswordError("");
    setConfirmPasswordValid(true);
    setConfirmPasswordError("");

    if (!v_required(email)) {
      setEmailValid(false);
      setEmailError("Email can't be empty.");
    }

    if (!v_email(email)) {
      setEmailValid(false);
      setEmailError("Email is not valid.");
    }

    if (!v_required(phone)) {
      setPhoneValid(false);
      setPhoneError("Phone number can't be empty.");
    }

    if (
      !(
        pwd_guideline_length &&
        pwd_guideline_uppercase &&
        pwd_guideline_lowercase &&
        pwd_guideline_number &&
        pwd_guideline_specialChar
      )
    ) {
      setPasswordValid(false);
      setPasswordError("Password is not following the above guidelines.");
    }

    if (!v_required(password)) {
      setPasswordValid(false);
      setPasswordError("Password can't be empty.");
    }

    if (!v_required(confirmPassword)) {
      setConfirmPasswordValid(false);
      setConfirmPasswordError("Confirm password can't be empty.");
    }

    if (!v_match(password, confirmPassword)) {
      setConfirmPasswordValid(false);
      setConfirmPasswordError("Passwords are not matching.");
    }
  };

  return (
    <div>
      <div>
        {/* NIC Details */}
        <form onSubmit={handleNicDetails}>
          <div className="border border-1">
            <div className="h6 bg-light p-3">NIC details</div>

            <div className="row px-3 pb-3 g-3">
              {/* nic */}
              <div className="form-group col-md-4">
                <label htmlFor="nicInput" className="form-label">
                  NIC Number
                </label>
                <input
                  type="text"
                  className={
                    isNicValid ? "form-control" : "form-control is-invalid"
                  }
                  id="nicInput"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
                <div
                  className={isNicValid ? "valid-feedback" : "invalid-feedback"}
                >
                  {nicError}
                </div>
              </div>

              {/* confirm nic */}
              <div className="form-group col-md-4">
                <label htmlFor="confirmNicInput" className="form-label">
                  Confirm NIC
                </label>
                <input
                  type="text"
                  className={
                    isConfirmNicValid
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  id="confirmNicInput"
                  value={confirmNic}
                  onChange={(e) => setConfirmNic(e.target.value)}
                />
                <div
                  className={
                    isConfirmNicValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {confirmNicError}
                </div>
              </div>

              {/* nic date of issue */}
              <div className="form-group col-md-4">
                <label htmlFor="nicDateOfIssueInput" className="form-label">
                  NIC - Date of Issue
                </label>
                <input
                  type="date"
                  className={
                    isNicDateOfIssueValid
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  id="nicDateOfIssueInput"
                  value={nicDateOfIssue}
                  onChange={(e) => setNicDateOfIssue(e.target.value)}
                />
                <div
                  className={
                    isNicDateOfIssueValid
                      ? "valid-feedback"
                      : "invalid-feedback"
                  }
                >
                  {nicDateOfIssueError}
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="row p-3">
              <span className="form-group col-md-8"></span>

              <div className="form-group col-md-4 d-flex flex-row gap-3">
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Cancel
                  </button>
                </div>
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Details of G.C.E. (A/L), October 2020 */}
        <form onSubmit={handleExamDetails}>
          <div className="border border-1">
            <div className="h6 bg-light p-3">
              Details of G.C.E. (A/L), October 2020
            </div>

            <div className="row px-3 pb-3 g-3">
              {/* index number */}
              <div className="form-group col-md-3">
                <label htmlFor="indexNoInput" className="form-label">
                  Index number
                </label>
                <input
                  type="text"
                  className={
                    isIndexNoValid ? "form-control" : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={indexNo}
                  onChange={(e) => setIndexNo(e.target.value)}
                />
                <div
                  className={
                    isIndexNoValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {indexNoError}
                </div>
              </div>

              <span className="form-group col-md-9"></span>

              {/* ID Type used at the G.C.E (A/L) */}
              <div className="form-group col-md-4">
                <label htmlFor="usedIDTypeInput" className="form-label">
                  ID Type used at the G.C.E (A/L)
                </label>
                <select
                  className="form-select p-1 w-100"
                  value={usedIDType}
                  onChange={(e) => setUsedIDType(e.target.value)}
                >
                  <option value="NIC">National Identity Card (NIC)</option>
                  <option value="PIC">Postal Identity Card (PIC)</option>
                  <option value="DL">Driving License (DL)</option>
                  <option value="SLPP">Sri Lankan Passport (SLPP)</option>
                  <option value="FPP">Foreign Passport (FPP)</option>
                  <option value="CP">Certified Photographs (CP)</option>
                </select>
                <div
                  className={
                    isUsedIDTypeValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {usedIDTypeError}
                </div>
              </div>

              {/* ID Number used at the G.C.E (A/L) */}
              <div className="form-group col-md-4">
                <label htmlFor="indexNoInput" className="form-label">
                  ID Number used at the G.C.E (A/L)
                </label>
                <input
                  type="text"
                  className={
                    isUsedIDNoValid ? "form-control" : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={usedIDNo}
                  onChange={(e) => setUsedIDNo(e.target.value)}
                />
                <div
                  className={
                    isUsedIDNoValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {usedIDNoError}
                </div>
              </div>

              {/* Date of issue of ID used at the G.C.E (A/L) */}
              <div className="form-group col-md-4">
                <label htmlFor="indexNoInput" className="form-label">
                  Date of issue of ID used at the G.C.E (A/L)
                </label>
                <input
                  type="date"
                  className={
                    isUsedIDDateOfIssueValid
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={usedIDDateOfIssue}
                  onChange={(e) => setUsedIDDateOfIssue(e.target.value)}
                />
                <div
                  className={
                    isUsedIDDateOfIssueValid
                      ? "valid-feedback"
                      : "invalid-feedback"
                  }
                >
                  {usedIDDateOfIssueError}
                </div>
              </div>

              {/* Scanned Copy of ID (One file only) */}
              <div className="form-group col-md-4">
                <label htmlFor="indexNoInput" className="form-label">
                  Scanned Copy of ID (One file only)
                </label>
                <input
                  type="file"
                  className={
                    isUsedIDCopyValid
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={usedIDCopy}
                  onChange={(e) => setUsedIDCopy(e.target.value)}
                />
                <div
                  className={
                    isUsedIDCopyValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {usedIDCopyError}
                </div>
              </div>

              <span className="form-group col-md-8"></span>
            </div>

            {/* footer */}
            <div className="row p-3">
              <span className="form-group col-md-8"></span>

              <div className="form-group col-md-4 d-flex flex-row gap-3">
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Back
                  </button>
                </div>
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Student details */}
        <form onSubmit={handleStudentDetails}>
          <div className="border border-1">
            <div className="h6 bg-light p-3">Student details</div>

            <div className="row px-3 pb-3 g-3">
              {/* title */}
              <div className="form-group col-md-2">
                <label htmlFor="indexNoInput" className="form-label">
                  Title
                </label>
                <select
                  className="form-select p-1 w-100"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="mrs">Mrs.</option>
                  <option value="miss">Miss.</option>
                  <option value="ms">Ms.</option>
                </select>
                <div
                  className={
                    isTitleValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {titleError}
                </div>
              </div>

              {/* Name of the Applicant with initials (English Block Letters Eg: BANDARA DPS) */}
              <div className="form-group col-md-10">
                <label htmlFor="indexNoInput" className="form-label">
                  Name of the Applicant with initials (English Block Letters Eg:
                  BANDARA DPS)
                </label>
                <input
                  type="text"
                  className={
                    isNameWithInitialsValid
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={nameWithInitials}
                  onChange={(e) => setNameWithInitials(e.target.value)}
                />
                <div
                  className={
                    isNameWithInitialsValid
                      ? "valid-feedback"
                      : "invalid-feedback"
                  }
                >
                  {nameWithInitialsError}
                </div>
              </div>

              {/* Applicant’s Full Name (English Block Letters) */}
              <div className="form-group col-md-12">
                <label htmlFor="indexNoInput" className="form-label">
                  Applicant’s Full Name (English Block Letters)
                </label>
                <input
                  type="text"
                  className={
                    isFullNameValid ? "form-control" : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <div
                  className={
                    isFullNameValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {fullNameError}
                </div>
              </div>

              {/* Date of Birth */}
              <div className="form-group col-md-3">
                <label htmlFor="indexNoInput" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className={
                    isDobValid ? "form-control" : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <div
                  className={isDobValid ? "valid-feedback" : "invalid-feedback"}
                >
                  {dobError}
                </div>
              </div>

              {/* Place of Birth (District) */}
              <div className="form-group col-md-3">
                <label htmlFor="usedIDTypeInput" className="form-label">
                  Place of Birth (District)
                </label>
                <select
                  className="form-select p-1 w-100"
                  value={pob}
                  onChange={(e) => setPob(e.target.value)}
                >
                  <option>01 - Colombo</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div
                  className={isPobValid ? "valid-feedback" : "invalid-feedback"}
                >
                  {pobError}
                </div>
              </div>

              {/* Civil status */}
              <div className="form-group col-md-3">
                <label htmlFor="usedIDTypeInput" className="form-label">
                  Civil status
                </label>
                <select
                  className="form-select p-1 w-100"
                  value={civilStatus}
                  onChange={(e) => setCivilStatus(e.target.value)}
                >
                  <option>Unmarried</option>
                  <option value="1">Married</option>
                </select>
                <div
                  className={
                    isCivilStatusValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {civilStatusError}
                </div>
              </div>

              {/* Gender */}
              <div className="form-group col-md-3">
                <label htmlFor="usedIDTypeInput" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select p-1 w-100"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option value="1">Female</option>
                </select>
                <div
                  className={
                    isGenderValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {genderError}
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="row p-3">
              <span className="form-group col-md-8"></span>

              <div className="form-group col-md-4 d-flex flex-row gap-3">
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Back
                  </button>
                </div>
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Login details */}
        <form onSubmit={handleLoginDetails}>
          <div className="border border-1">
            <div className="h6 bg-light p-3">Login details</div>

            <div className="row px-3 pb-3 g-3">
              {/* Email */}
              <div className="form-group col-md-6">
                <label htmlFor="indexNoInput" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className={
                    isEmailValid ? "form-control" : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className={
                    isEmailValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {emailError}
                </div>
              </div>

              {/* Mobile phone number */}
              <div className="form-group col-md-6">
                <label htmlFor="indexNoInput" className="form-label">
                  Mobile phone number
                </label>
                <input
                  type="text"
                  className={
                    isPhoneValid ? "form-control" : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div
                  className={
                    isPhoneValid ? "valid-feedback" : "invalid-feedback"
                  }
                >
                  {phoneError}
                </div>
              </div>

              <div className="form-group col-md-6">
                {/* Password */}
                <div>
                  <label htmlFor="indexNoInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className={
                      isPasswordValid
                        ? "form-control"
                        : "form-control is-invalid"
                    }
                    id="indexNoInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className={
                      isPasswordValid ? "valid-feedback" : "invalid-feedback"
                    }
                  >
                    {passwordError}
                  </div>
                </div>

                {/* Password-guidelines */}
                <div>
                  <div>
                    <small
                      className={
                        pwd_guideline_length
                          ? "text-success fw-bold"
                          : "text-muted"
                      }
                    >
                      Password contain more than 8 characters.
                    </small>
                    {pwd_guideline_length && <i className="bi bi-check-lg" />}
                  </div>
                  <div>
                    <small
                      className={
                        pwd_guideline_uppercase
                          ? "text-success fw-bold"
                          : "text-muted"
                      }
                    >
                      Contains an uppercase letter.
                    </small>
                    {pwd_guideline_uppercase && (
                      <i className="bi bi-check-lg" />
                    )}
                  </div>
                  <div>
                    <small
                      className={
                        pwd_guideline_lowercase
                          ? "text-success fw-bold"
                          : "text-muted"
                      }
                    >
                      Contains a lowercase letter.
                    </small>
                    {pwd_guideline_lowercase && (
                      <i className="bi bi-check-lg" />
                    )}
                  </div>
                  <div>
                    <small
                      className={
                        pwd_guideline_number
                          ? "text-success fw-bold"
                          : "text-muted"
                      }
                    >
                      Contains a number.
                    </small>
                    {pwd_guideline_number && <i className="bi bi-check-lg" />}
                  </div>
                  <div>
                    <small
                      className={
                        pwd_guideline_specialChar
                          ? "text-success fw-bold"
                          : "text-muted"
                      }
                    >
                      Contains a special character.
                    </small>
                    {pwd_guideline_specialChar && (
                      <i className="bi bi-check-lg" />
                    )}
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="form-group col-md-6">
                <label htmlFor="indexNoInput" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className={
                    isConfirmPasswordValid
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  id="indexNoInput"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className={
                    isConfirmPasswordValid
                      ? "valid-feedback"
                      : "invalid-feedback"
                  }
                >
                  {confirmPasswordError}
                </div>
              </div>

              <span className="form-group col-md-6"></span>
            </div>

            {/* footer */}
            <div className="row p-3">
              <span className="form-group col-md-8"></span>

              <div className="form-group col-md-4 d-flex flex-row gap-3">
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Back
                  </button>
                </div>
                <div className="w-100">
                  <button className="btn btn-primary btn-block w-100 p-2">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Stu_SignUpForm;
