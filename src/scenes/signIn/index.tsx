import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInParams>();
  const { signIn } = useSignInPresenter();
  const { account } = useCurrentAccount();
  const history = useHistory();

  useEffect(() => {
    if (account) history.push("/");
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <h1>求職者ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.emailInputWrapper}>
            <p>メールアドレス</p>
            <input
              className={styles.input}
              type="email"
              name="account.email"
              ref={register}
              placeholder="coadmap@mail.com"
              />
          </div>
          <div className={styles.passwordInputWrapper}>
            <p>パスワード</p>
            <input
              className={styles.input}
              type='password'
              name="account.password"
              ref={register}
              placeholder="パスワードを入力"
              />
          </div>
          <div className={styles.loginButtonWrapper}>
            <button className={styles.button}>ログイン</button>
          </div>
        </form>
        <div className={styles.forgetPasswordWrapper}>
          <a href="">パスワードを忘れた方はこちら</a>
        </div>
        <div className={styles.signupWrapper}>
          <button className={styles.button}>新規登録はこちら</button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
