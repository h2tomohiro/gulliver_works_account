import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const RecruitmentIndexPage = () => {
  return (
    <div className={styles.text}>
      全ての募集
      <Link to="/sign_in">ログイン</Link>
    </div>
  );
};

export default RecruitmentIndexPage;
